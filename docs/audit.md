# Portfolio Audit

Date: 2026-09-08
Commit audited: `657c228` (plus one uncommitted change to `tailwind.config.ts`)
Domain: **phymilad.com**
Scope: **English only.** See "Scope change" below.

Everything below was verified by reading the file or by running the toolchain / a
production server against this checkout. Commands run: `npx tsc --noEmit`,
`npx next build` (webpack), `npm run build` (turbopack), `npx eslint .`,
`npm audit`, `npm outdated`, and `next start` + HTTP probes on port 3999.

Severity: **critical** = broken or actively harmful in production ·
**high** = blocks a stated goal · **medium** = real cost, not blocking ·
**low** = polish.
Effort: **S** ≤ 1h · **M** ≤ half a day · **L** > half a day.

---

## Scope change (decided after the first pass)

The original brief asked for English + Dutch + Persian with RTL. You've since decided
the site is **English only**, with **root URLs** (`phymilad.com/projects/1`, not
`/en/projects/1`), and the existing `fa`/`de`/`nl` translations deleted — recoverable
from git at `657c228` if ever needed.

This is a genuinely good outcome for the audit, and worth being explicit about: it does
not just remove the i18n work, it **resolves four of the six critical findings by
deletion rather than by fixing them.** Once `[locale]` is gone:

- `/robots.txt` and `/sitemap.xml` stop being swallowed by a catch-all segment (was 3.1)
- `/xx` stops returning HTTP 200 (was 3.1)
- hreflang / `x-default` / locale alternates become unnecessary (was 4.5)
- the locale-detection, cookie-persistence, RTL, and Persian-typography work vanishes
  entirely (was 3.2, 3.9, 3.10, 3.11)

Deleted code is the cheapest code to maintain. Roughly **60% of the original finding
count** disappears with the `[locale]` segment.

Findings below are the surviving set, renumbered. Where a finding existed in the first
pass under a different number, I've noted it — the original i18n-scoped version of this
file is in git history if you want to compare.

---

## Summary

The site is small and readable — 5 routes, 5 components, ~1400 lines. Nothing here is
badly written for its size. The problems are almost entirely _absences_: there is no
metadata layer, no design system, and no content layer. Two things are outright broken:
`npx next build` fails, and invalid project ids return HTTP 200 with an empty page.

Verified working and **not** worth touching: TypeScript is on `strict: true`
(`tsconfig.json:7`) and passes clean; ESLint is wired to `next/core-web-vitals` +
`next/typescript` (`eslint.config.mjs:13`) and reports 0 errors; the Tailwind v4
PostCSS pipeline is correct (`postcss.config.mjs:2`); `next-themes` dark mode is
correctly hydration-guarded (`src/components/header/index.tsx:17-18`); landmarks
(`<header>`/`<main>`/`<footer>`) are correct in `layout.tsx:27-37`; the `<iframe>` in
`project-video/index.tsx:33-40` has a proper `title`.

---

## 1. Stack & architecture

**Baseline (verified):** Next.js 15.5.2, App Router, React 19.1.0, TypeScript 5.9.2
strict, Tailwind CSS 4.1.12, npm (`package-lock.json` present, no other lockfile).

### 1.1 `npx next build` fails — type error on `params` — critical / S

`src/app/[locale]/blog/[slug]/page.tsx:8`, and the same pattern at
`src/app/[locale]/page.tsx:6`, `src/app/[locale]/projects/page.tsx:4`,
`src/app/[locale]/projects/[id]/page.tsx:5`.

In Next 15 `params` is a `Promise`. These four pages type it as a plain object and read
it synchronously. The generated route-type check rejects it:

```
.next/types/app/[locale]/blog/[slug]/page.ts:34:29
Type '{ params: { slug: string; }; }' does not satisfy the constraint 'PageProps'.
  Type '{ slug: string; }' is missing the following properties from type 'Promise<any>'
```

`npm run build` (turbopack) _passes_ because the turbopack builder skips that
validation, so the breakage is invisible day to day. `tsc --noEmit` also passes, because
the route types only exist after a webpack build. At runtime it works today only via
Next 15's deprecated sync-access shim, scheduled for removal.
`src/app/[locale]/layout.tsx:21` already does it correctly (`await params`).

Note: dropping `[locale]` removes the `params` prop from three of these four pages
entirely, so most of this fixes itself in Phase 1. `blog/[slug]` still needs the await.

**Why it matters:** any CI running the default `next build`, or any Next 16 upgrade,
fails immediately.

### 1.2 Every route is server-rendered on demand — high / S

Build output:

```
├ ƒ /[locale]                    6.05 kB
├ ƒ /[locale]/blog
├ ƒ /[locale]/projects
└ ƒ /[locale]/projects/[id]
```

`ƒ` = dynamic, rendered per request. Response headers confirm it:
`Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`.

This is a static site — the content lives in a TypeScript object literal
(`src/i18n/dict.ts`) and a hardcoded array (`src/utils/functions.tsx:4-56`). Nothing is
per-request. The cause is that no route defines `generateStaticParams` for `[locale]`,
so Next can't enumerate the segment.

Removing `[locale]` makes `/`, `/blog`, and `/projects` static automatically. Only
`/projects/[id]` will still need `generateStaticParams`.

**Why it matters:** TTFB and Core Web Vitals on a site whose entire value proposition
is "I build fast web apps".

### 1.3 Unused dependencies — medium / S

`package.json:12,13,15,19` ship `@next/mdx`, `gray-matter`, `next-mdx-remote`, and
`remark-gfm`. `grep -rn "mdx|gray-matter|remark" src/` returns nothing — all four are
dead weight in the lockfile and the audit surface, left from an abandoned first pass at
the blog. Three of them come back in Phase 5 when the blog is real; `next-mdx-remote`
does not (it's for runtime-fetched MDX, which an in-repo content layer doesn't need).

### 1.4 Security advisories — high / S

`npm audit`: **15 vulnerabilities (2 critical, 9 high, 4 moderate)**. All trace to the
Next 15.5.2 dependency tree, not to first-party code:

- `next` itself — critical, incl. GHSA-9qr9-h5gf-34mp (RCE in the React flight
  protocol) and GHSA-ggv3-7p47-pfv8 (HTTP request smuggling in rewrites)
- `tar` (transitive) — critical, path traversal
- `postcss` (bundled under `next`) — high
- `sharp` <0.35.0 — high, libvips CVEs; this one is in the image-optimization path
- `nanoid`, `yaml` — moderate

Fix is `next@15.5.25` (patch-level within 15.x) or the 16.x upgrade.

### 1.5 `next.config.ts` is the untouched template — medium / S

`next.config.ts:3-5` is an empty object with the generated `/* config options here */`
comment. Wants at minimum `images.formats` (AVIF), and is where any redirect policy
will have to live — including the `/en/*` → `/*` redirects that Phase 1 needs so the
old URLs don't rot (see 4.10).

### 1.6 Duplicated `Locale` type — low / S

Declared twice: `src/i18n/dict.ts:2` and `src/components/language-selector/index.tsx:6`.
`src/components/project-card/index.tsx:6` imports the _component's_ copy while
`src/app/[locale]/page.tsx:2` imports the _dict's_ copy. Both are deleted in Phase 1.

### 1.7 Data layer masquerading as a util — medium / S

`src/utils/functions.tsx` contains both the entire project dataset (lines 4-56: ids,
YouTube URLs, image paths, skill arrays) and an unrelated URL helper (lines 58-76). The
file is `.tsx` but contains no JSX. Project content should be typed data, not a function
in `utils/` — and with locales gone, `createProjectsBasedOnLocale(locale)` collapses
from a function into a plain array.

### 1.8 Dead code — low / S

- `src/app/[locale]/projects/page.tsx` exists only to `redirect()` to the home page
  (line 6), while the home page renders the project list inline
  (`src/app/[locale]/page.tsx:50-55`). A redirect-only route is a wasted hop and a
  crawl-budget sink.
- `src/app/[locale]/page.tsx:8` — `base` assigned, never used (ESLint warns).
- `src/components/header/index.tsx:4` — `inter`, `vazir` imported, never used.
- `src/components/project-card/types.ts:1` — `JSX` imported, never used.
- `src/components/language-selector/index.tsx:39` — `_`, `__` placeholders.
- `src/app/[locale]/page.tsx:1` — a stale Persian comment about where `Home` is defined.
- `src/app/[locale]/page.tsx:44-49` — six blank lines; `projects/page.tsx:8-16` — eight.
- `dict.ts:392` — commented-out function-value branch inside `t()`.
- `dict.ts:52-57` — `switch_locale` key is unreferenced anywhere, and its values are
  nonsense (`de: 'EN'`, `nl: 'DE'`).
- `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — CNA template
  assets.
- `public/images/flags/*.svg` — four flag assets, all unused once the language selector
  is deleted.

### 1.9 Client/server boundaries — medium / S

Three of five components are `'use client'`:

- `src/components/header/index.tsx:1` — justified (theme toggle, mobile menu state).
- `src/components/language-selector/index.tsx:1` — deleted in Phase 1.
- `src/components/project-card/index.tsx:1` — **not justified.** The only client need is
  `useRouter().push` in an `onClick` (lines 9, 18). This drags an entirely static card —
  image, text, skill pills — into the client bundle. A `<Link>` wrapper is both a server
  component and better for SEO (see 4.7).

`src/components/project-video/index.tsx` correctly has no directive.

### 1.10 Folder structure — low / M

`components/` is flat with an `index.tsx`-per-folder convention, fine at this size but
with no separation between layout chrome, primitives, and feature components. There is
no `content/`, no `lib/`, no `types/`. This will not survive a blog.

---

## 2. Design & UI

### 2.1 `tailwind.config.ts` is dead — high / S

`tailwind.config.ts` is a Tailwind **v3** config file, but the installed version is
**v4.1.12** and `src/app/globals.css:1` uses `@import "tailwindcss"` with no `@config`
directive. Tailwind v4 does not auto-discover `tailwind.config.ts`. The file — including
`darkMode: 'selector'` (line 5) and the `fontFamily.sans` override (lines 8-10) — has
**zero effect on the build**. The uncommitted working-tree change is deleting a
commented-out block of `colors` tokens from the same dead file.

Dark mode works only because `globals.css:2` separately declares
`@custom-variant dark (&:where(.dark, .dark *))`.

### 2.2 There is no design system — high / L

This is the root cause of "the design is plain".

- **Color:** the entire token set is `--bg` and `--fg`, in two blocks
  (`globals.css:4-7`, `globals.css:14-17`). Everything else is raw Tailwind palette
  literals sprayed inline. There is no accent or brand color anywhere in the codebase —
  the single non-grey hue is `text-indigo-600` on one link (`project-video/index.tsx:26`).
  A site with no brand color reads as a template.
- **Inconsistent greys:** `slate-*` and `gray-*` are mixed within single components.
  `project-card/index.tsx:15` uses `border-slate-400` with `dark:border-slate-700`, then
  `dark:from-gray-800/80` two lines later. `page.tsx:15` uses `border-gray-400` where the
  card uses `border-slate-400`. Same visual intent, two different scales.
- **Spacing / radius / shadow:** no scale. `rounded-2xl`, `rounded-xl`, `rounded-md`, and
  `rounded-full` all appear with no rule.
- **Type scale:** the largest text on the home page is `text-xl`
  (`page.tsx:16,22,28,38`). There is no display size, no hero, no visual hierarchy —
  four equal cards in a grid.
- **`@theme inline` block is broken:** `globals.css:9-12` maps `--font-sans` to
  `var(--font-geist-sans)` and `--font-mono` to `var(--font-geist-mono)`. Neither
  variable is defined anywhere in the repo (leftover from the create-next-app template,
  which used Geist). Both resolve to nothing.

### 2.3 The same 200-character class string is copy-pasted 6 times — medium / M

The "card" appearance —
`rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80
dark:to-gray-800/90 border ... hover:scale-105 motion-safe:animate-fadeInUp` —
is duplicated verbatim at `page.tsx:15`, `page.tsx:21`, `page.tsx:27`, `page.tsx:37`,
`project-card/index.tsx:15-17`, and `project-video/index.tsx:6`. There is no `<Card>`
component. Every visual tweak is a six-site find-and-replace, and they have already
drifted (`border-gray-400` vs `border-slate-400` vs `border-gray-200`).

The gradient is also a no-op in light mode: `from-white/95 to-white/100` on white.

### 2.4 `animate-fadeInUp` does not exist — medium / S

Used at `page.tsx:15,21,27,37`, `project-card/index.tsx:17`, `project-video/index.tsx:6`.
`grep -rn "fadeInUp|keyframes" src/ tailwind.config.ts` finds only those six usages —
**the keyframes are never defined**, and the config that might have defined them is dead
(2.1). No entrance animation is playing. The `motion-safe:` prefix is correct practice
applied to nothing.

The only real motion is `hover:scale-105` on cards, which is _not_ wrapped in
`motion-safe:` — so it ignores `prefers-reduced-motion` (see 5.5).

### 2.5 Layout is a single fixed column — medium / M

`layout.tsx:31` — `max-w-screen-lg` (1024px) for every route, footer on the same width
(line 33). On a wide display the whole site is a narrow strip. Home is a 2-column card
grid (`page.tsx:12`) then a 1-column project list (`page.tsx:50`); there is no other
layout idea in the codebase.

### 2.6 Responsive gaps — medium / S

- `project-card/index.tsx:28-53` — the desktop/mobile screenshot pair is `flex flex-row`
  at **every** breakpoint, with fixed `w-3/4` / `w-1/4` children. On a 360px phone the
  desktop screenshot renders ~245px wide and the phone screenshot ~80px. Both are
  illegible. There is no stacking breakpoint.
- `layout.tsx:31` — `px-6 py-4 md:p-4`, i.e. horizontal padding _shrinks_ from 24px to
  16px as the viewport grows. Almost certainly unintended.
- `header/index.tsx:86` — the mobile menu toggles `block`/`hidden` **and**
  `max-h-96`/`max-h-0` **and** declares `transition-all duration-200`. Because `display`
  is toggled, the height transition can never run. The animation is dead code.

### 2.7 Template leftovers — low / S

`README.md` is the unmodified create-next-app README, including "This project uses
next/font to automatically optimize and load Geist" (line 21) — the project uses Inter
and Vazirmatn (`src/utils/constants.ts:3-4`). `public/` still holds five CNA SVGs.
`src/app/favicon.ico` is the default Next.js icon.

### 2.8 Dark mode is half-applied — medium / S

`layout.tsx:27` hardcodes `bg-white text-slate-800` on `<body>` with **no `dark:`
variant**, while `globals.css:19-22` separately sets `background-color: var(--bg)` on
`body`. The Tailwind utility wins, so `--bg`/`--fg` — the only real tokens in the
project — are effectively overridden. Dark mode survives only because individual
components carry their own `dark:` classes.

### 2.9 Two fonts load for every visitor — high / S

`src/utils/constants.ts:3-4` calls both `Inter(...)` and `Vazirmatn(...)` at module
level, and `layout.tsx:26` switches only the `className`. Both are in the graph on every
route. Verified on `/en`:

```
link: </_next/static/media/83afe278…woff2>; rel=preload; as="font",
      </_next/static/media/f1d25eab…woff2>; rel=preload; as="font"
```

Two font files preloaded — an English reader downloads and preloads the Arabic subset.
Both are render-blocking preloads competing for bandwidth with LCP. Deleting Vazirmatn
in Phase 1 halves the font payload for free. _(Was 3.10 in the first pass; it survives
the scope change because it's a pure performance finding.)_

---

## 3. SEO

### 3.1 One title and one description for the entire site — critical / M

`src/app/[locale]/layout.tsx:8-12` is the **only** `metadata` export in the repo
(`grep -rn "export const metadata|generateMetadata" src/` returns this one hit).
Verified by fetching `/en` — the complete indexable head is:

```html
<title>Milad Mohammadi — Frontend Developer</title>
<meta name="description" content="Portfolio, projects, and blog by Milad Mohammadi." />
```

Every route, identical. The title also says "Frontend Developer" while every string in
the dictionary says "Software Developer" (`dict.ts:10-14, 59-64`) — worth settling
which one you want to rank for.

### 3.2 `metadataBase` is `https://example.com` — critical / S

`layout.tsx:11`. Every absolute URL Next derives — OG images, canonicals — resolves
against `example.com`. Now unblocked: **`https://phymilad.com`**.

### 3.3 No Open Graph or Twitter tags — high / S

Verified absent from the rendered head. A link to this portfolio pasted into LinkedIn,
Slack, WhatsApp, or X renders as a bare URL with no title, no description, no image. For
a portfolio that gets shared into hiring conversations, this is the highest-leverage
single fix on the list.

### 3.4 No OG image generation — high / M

No `opengraph-image.tsx`, no `ImageResponse` usage. Needed per-page and, later,
per-post. (Notably simpler now that it doesn't need Persian glyph support.)

### 3.5 No robots.txt and no sitemap.xml — critical / S

No `app/robots.ts`, no `app/sitemap.ts`. Both URLs currently return **HTTP 200 with the
home page HTML** because `[locale]` swallows them — verified: `GET /robots.txt` →
`Content-Type: text/html`, `<html lang="robots.txt">`. A crawler requesting robots.txt
receives a portfolio page.

The catch-all half of this is fixed by deleting `[locale]`; the files themselves still
need writing.

### 3.6 No canonical URLs — high / S

Verified absent. With one locale this is much less critical than it was, but still wanted
— it's what stops query-string and `www`/apex variants from splitting ranking signals.

### 3.7 No RSS feed — medium / S

Required by the "publish regularly" goal, and the main way a technical audience
subscribes to a developer blog.

### 3.8 No structured data of any kind — high / M

`grep -rn "application/ld+json" src/` returns nothing. Missing: `Person` (this is what
drives a Google Knowledge Panel for your name), `WebSite`, `BreadcrumbList`, and — once
the blog exists — `BlogPosting` with `datePublished`, `dateModified`, and `author`.
`VideoObject` for the four YouTube project pages is free ranking surface.

### 3.9 Cards are div-with-onClick — no crawlable link — high / S

`src/components/project-card/index.tsx:14-18` — the card is a `<div>` with
`onClick={() => push(...)}`. There is no `<a href>`. **Crawlers cannot follow it.**
Google will not discover the project pages from the home page. It is also not focusable,
not keyboard-activatable, and has no `role`. One fix resolves an SEO defect and an
accessibility defect together.

### 3.10 Old `/en/*` URLs will rot — high / S

_(New — a consequence of the scope change.)_ Anything already indexed or linked at
`/en`, `/en/projects/1`, etc. must 308 to the new root-level path rather than 404.
Cheap to do in `next.config.ts` redirects, expensive to discover later.

### 3.11 No `<h1>` on the home page — high / S

Verified by scraping the rendered `/en`: `5 × <h2>`, `4 × <h3>`, **zero `<h1>`**.
`page.tsx:16,22,28,38,51` all use `h2`; the site title in the header is a `<Link>`, not a
heading. The document has no top-level heading and its outline starts at level 2. The
blog placeholder pages _do_ have `<h1>` (`blog/page.tsx:4`), so the hierarchy is
inconsistent across routes too. `project-video/index.tsx:9` makes the project detail
page's own title an `<h2>` on a page with no `<h1>`.

### 3.12 Every home-page image is `priority` — high / S

`project-card/index.tsx:37,51` set `priority` unconditionally, and the card renders 4× on
the home page (`page.tsx:52`) → **8 preloaded images**, confirmed in the response `link:`
header. `priority` is meant for the single LCP element; used this way it makes eight
requests compete and delays the real LCP. The source files are large:

```
mdotcar-client-mobile.png  3.29 MB
rsoon-mobile.png           2.98 MB
mdotcar-admin-mobile.png   2.47 MB
mdotcar-admin-desktop.png  1.01 MB          (~10 MB total in public/images/projects)
```

`next/image` optimizes on serve, but `next.config.ts` doesn't enable AVIF, and the
`sizes` values are wrong: `project-card/index.tsx:36` declares
`(min-width: 1024px) 66vw, 100vw` for an image whose container is `w-3/4` of a
`max-w-screen-lg` column — the real width is ~750px at desktop, so Next fetches a larger
candidate than needed.

### 3.13 Soft 404s on invalid project ids — high / S

`src/app/[locale]/projects/[id]/page.tsx:9` — `return project ? <ProjectVideo/> : null`.
Verified: `GET /en/projects/999` → **200** with an empty page. Should call `notFound()`.
(`blog/[slug]` gets this right — line 10 — and correctly returns 404.)

### 3.14 No `not-found.tsx` and no `error.tsx` — high / S

Neither file exists at any level. 404s render the unstyled Next.js default — no header,
no navigation, no way back. Any uncaught render error shows the default error screen.
Both are hostile to users and to crawlers.

### 3.15 The `/projects` redirect chain — medium / S

`/en/projects` → 307 → `/en` (`projects/page.tsx:6`), while `/en/projects/1` is a real
page. So `/en/projects/1`'s own parent path redirects away — a broken breadcrumb by
construction, and a crawl-budget waste.

### 3.16 No trailing-slash policy — low / S

`next.config.ts` doesn't set `trailingSlash`. Next's default (no trailing slash, with a
redirect) is fine — worth stating explicitly once canonicals exist so the two can't
disagree.

### 3.17 Thin content — high / M

Four project pages and a home page. The two blog routes are placeholders containing
developer notes ("In Step 2, this list becomes dynamic"). The project pages are a YouTube
embed plus 6-8 bullet lines of marketing copy. There is no indexable long-form text
anywhere on this site. This is the actual reason it won't rank today, and the blog is the
fix.

### 3.18 Hardcoded placeholder copy is publicly visible — medium / S

_(Was 3.6 in the first pass; survives as a content bug rather than a translation bug.)_
`src/app/[locale]/blog/page.tsx:5` renders "Select a post from the sidebar. In Step 2,
this list becomes dynamic (from MDX files)." — a note to yourself, live in production.
`blog/[slug]/page.tsx:14` has "Post content goes here. Next step: read MDX files and
render." Both are indexable today. There is no sidebar.

### 3.19 Link text — low / S

`project-video/index.tsx:28` — "Watch on YouTube" is acceptable but generic. Note it
currently points at the **embed** URL (`toEmbedUrl(...)`, line 24), not the watch URL, so
the "Watch on YouTube" link opens a bare embed player rather than the YouTube page — a
small correctness bug in its own right.

---

## 4. Content layer for the articles

**What exists:** nothing. Two placeholder routes (`src/app/[locale]/blog/page.tsx`,
`src/app/[locale]/blog/[slug]/page.tsx`) with hardcoded English copy and
`generateStaticParams` returning two fake slugs (`[slug]/page.tsx:5`). There is no
`content/` directory, no MDX file, and — despite four MDX-related dependencies in
`package.json` — no MDX configuration in `next.config.ts` and no import of any of them
(1.3). The blog nav link is commented out (commit `ad24966`, "comment blogs nav link"),
so the section isn't reachable from the header — which in fact has **no nav links at
all** (`header/index.tsx:37-49` contains only the language selector and theme toggle).

Recommendation and schema: `docs/decisions.md` §2.

---

## 5. Quality & DX

### 5.1 Lint and type-check: partially good — medium / S

- ESLint is configured (`eslint.config.mjs`) and clean: 0 errors, 9 warnings.
- **But `package.json:9` is `"lint": "eslint"`** with no target path. It works because
  flat config defaults to `.`, but it's fragile and non-obvious.
- **There is no `typecheck` script.** Type errors are only caught by `next build`, and
  `package.json:7` uses `--turbopack`, which — as 1.1 proves — **skips the route type
  check that is currently failing**. The one command that would catch the broken build is
  the one that isn't run.
- No Prettier, no EditorConfig. Verified inconsistent formatting: `header/index.tsx` uses
  4-space indent inside `<nav>` (lines 28-81) and 2-space elsewhere; quote style
  alternates between files.

### 5.2 No tests — medium / L

No test runner, no test file, no `__tests__`. For a site this size unit tests are
low-value; a couple of Playwright smoke tests covering nav, 404 handling, and theme
toggle are worth having.

### 5.3 No CI — high / S

No `.github/`, no workflow, no pre-commit hook. Nothing would have caught the broken
`next build` (1.1). Given the site presumably auto-deploys, a broken build reaches
production unannounced.

### 5.4 No error boundaries — high / S

Same finding as 3.14 from the reliability side: no `error.tsx`, no `global-error.tsx`.

### 5.5 Accessibility — high / M

- **Keyboard:** project cards are unreachable (3.9). The language selector
  (`language-selector/index.tsx:66-84`) is `role="listbox"` on a `<div>` whose children
  are `role="option"` `<div>`s with `onClick` only — no `tabIndex`, no `onKeyDown`, no
  focus management, and ESLint flags the missing `aria-selected` at line 75. That
  component is deleted in Phase 1, so only the card fix remains.
- **Focus states:** `grep -rn "focus:|focus-visible:" src/` returns **nothing**. There is
  no focus ring anywhere on the site. Combined with `cursor-pointer` on divs, the
  affordances are mouse-only throughout.
- **Reduced motion:** `hover:scale-105` (`page.tsx:15`, `project-card/index.tsx:17`) is
  not wrapped in `motion-safe:`, so it ignores `prefers-reduced-motion`. The
  `motion-safe:` prefixes that _are_ present are attached to `animate-fadeInUp`, which
  doesn't exist (2.4) — so the correct guard is applied only to the animation that isn't
  running.
- **Contrast:** `project-card/index.tsx:58` — `text-slate-600` on white is 4.9:1 (passes
  AA for body text, fails AAA). `header/index.tsx:44` — `text-slate-600` on a
  `backdrop-blur` header over arbitrary scrolling content has no guaranteed ratio at all.
  `layout.tsx:33` — the footer is `text-xs` (12px), below the 14px practical minimum.
- **Landmarks:** `<header>`, `<main>`, `<footer>` all present and correct
  (`layout.tsx:27-37`). But there is no skip-to-content link, and `<nav>`
  (`header/index.tsx:27`) has no `aria-label`.
- **Images:** all `next/image` uses have alt text (`project-card/index.tsx:34,46`).
- **`aria-expanded`/`aria-controls`** on the hamburger (`header/index.tsx:55-56`) —
  correct.

### 5.6 No hosting or deploy config — medium / S

No `vercel.json`, no `netlify.toml`, no `Dockerfile`, no CI config. `.gitignore:41`
mentions `.vercel`, which hints at Vercel, but nothing confirms it. You've said hosting
and analytics aren't set up yet — so `phymilad.com` needs a host chosen before Phase 2
can be verified on the real domain. Not blocking for local verification.

---

## Severity roll-up

| Sev      | Count | Items                                                                                               |
| -------- | ----- | --------------------------------------------------------------------------------------------------- |
| Critical | 3     | 1.1 broken build · 3.1 single global title · 3.2 example.com · 3.5 no robots/sitemap                |
| High     | 16    | 1.2, 1.4, 2.1, 2.2, 2.9, 3.3, 3.4, 3.6, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14, 3.17, 5.3, 5.4, 5.5 |
| Medium   | 14    | 1.3, 1.5, 1.7, 1.9, 2.3, 2.4, 2.5, 2.6, 2.8, 3.7, 3.15, 3.18, 5.1, 5.2, 5.6                         |
| Low      | 6     | 1.6, 1.8, 1.10, 2.7, 3.16, 3.19                                                                     |

Down from 6 critical / 22 high in the multilingual scope.
