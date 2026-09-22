# Roadmap

Scope: **English only**, root URLs, domain **phymilad.vercel.app**.

Ordered by impact-per-effort. Each phase is independently shippable, is one commit, and
has acceptance criteria you can check in a browser.

Nothing is blocked — every decision is settled (`docs/decisions.md`). Only the
live-domain checks in Phase 2 need a deployment to exist; everything else verifies
against `next start` on localhost.

**Legend:** ~files = files touched (the brief's ~10-file ceiling). Phases that would
exceed it are already split.

---

## Phase 0 — Unbreak the build

**Fixes:** audit 1.1, 1.4, 5.1 · ~6 files · effort S

- `await params` in the four pages that read it synchronously.
- Add `"typecheck": "tsc --noEmit"`; make `lint` explicit (`eslint .`).
- Drop `--turbopack` from `build` (or add a `build:check`) so the route-type validation
  that's currently failing actually runs.
- `npm audit fix` — patches Next within 15.x, no major bump.

**What could break:** the `await` change is mechanical but touches every page. The Next
patch bump could shift build output; that's what the acceptance check is for.

**Acceptance**

- [ ] `npx next build` (webpack, no `--turbopack`) exits 0
- [ ] `npm run typecheck` exits 0
- [ ] `npm audit` reports 0 critical
- [ ] every page still renders identically

---

## Phase 1 — Delete the locale layer

**Fixes:** audit 1.6, 1.7, 1.9 (partial), 2.9, 3.5 (catch-all half), 3.10, 5.5 (dropdown) · ~10 files · effort M

The highest-value phase in the plan, and it's almost entirely deletion. This is where
most of the audit's critical findings stop existing.

- Move `src/app/[locale]/*` up to `src/app/*`; delete the segment.
- Delete `src/i18n/`, `src/components/language-selector/`, `src/middleware.ts`,
  `public/images/flags/`.
- Delete `Vazirmatn` from `src/utils/constants.ts` — halves the font payload immediately.
- Move the ~25 English strings into a typed `src/content/copy.ts`; flatten
  `createProjectsBasedOnLocale(locale)` into `src/content/projects.ts` as a plain array.
- `next.config.ts`: 308 redirects `/en/:path*` → `/:path*` (and `/fa`, `/de`, `/nl`)
  so existing links and any indexed URLs don't rot.

**What could break:** the largest structural change in the plan — every import path moves
at once. It is, however, almost entirely mechanical, and `typecheck` catches the misses.
The redirects are the part to test deliberately.

**Acceptance**

- [ ] `phymilad.vercel.app/` serves the home page directly — no redirect hop
- [ ] `/projects/1` works; `/en/projects/1` → **308** → `/projects/1`
- [ ] `/robots.txt` → 404 (not the home page with `lang="robots.txt"`)
- [ ] `/xx` → 404, not 200
- [ ] network tab: **one** font file, not two
- [ ] `grep -rn "locale\|Locale\|dict" src/` returns nothing
- [ ] `next build` shows `○`/`●` for every route, not `ƒ`

---

## Phase 2 — Make it shareable and findable

**Fixes:** audit 3.1, 3.2, 3.3, 3.5, 3.6, 3.8, 3.11, 3.13, 3.14, 3.15, 3.18 · ~10 files · effort M

- `generateMetadata` per route: title template, real descriptions, canonicals.
- `metadataBase: 'https://phymilad.vercel.app'`.
- OG + Twitter tags; a static `opengraph-image` (dynamic per-post ones land in Phase 6).
- `app/robots.ts` + `app/sitemap.ts`.
- JSON-LD: `Person` + `WebSite` in the layout, `VideoObject` on project pages.
- One `<h1>` per page; demote the rest.
- `notFound()` on invalid project ids; add `not-found.tsx` and `error.tsx`.
- Delete the "In Step 2, this list becomes dynamic" placeholder copy that's live today.
- Make `/projects` a real index instead of a redirect.

**What could break:** heading changes shift visual sizing. The rest is view-source only.

**Acceptance**

- [ ] every page has exactly one `<h1>` and a distinct `<title>` + description
- [ ] `/sitemap.xml` is XML listing every route; `/robots.txt` is text and references it
- [ ] `/projects/999` → 404 styled page, not a 200 blank
- [ ] `/projects` is a real page
- [ ] no "Step 2" text anywhere in production HTML
- [ ] Rich Results Test accepts the `Person` markup
- [ ] _(once deployed)_ pasting `https://phymilad.vercel.app` into Slack renders a card

---

## Phase 3 — Design foundation

**Fixes:** audit 2.1, 2.2, 2.3, 2.4, 2.8, 5.5 (focus/motion) · ~8 files · effort M

Tokens and primitives only — no page redesign yet, so it stays reviewable. Direction is
`docs/decisions.md` §4 (editorial base, technical accents).

- Delete the dead `tailwind.config.ts`; move everything into `@theme` in `globals.css`.
- Real tokens: one accent hue, surface/border/muted, spacing and radius scales, a type
  scale with a display size.
- Add the display and mono faces; remove the broken `--font-geist-*` mapping.
- One `<Card>` primitive replacing the six copy-pasted class strings.
- Define the `fadeInUp` keyframes (or drop the class); wrap `hover:scale` in
  `motion-safe:`.
- A global `focus-visible` ring.
- Fix `body` so `--bg`/`--fg` actually apply in dark mode.

**What could break:** a global style change — every page shifts. Check both themes,
mobile and desktop.

**Acceptance**

- [ ] `grep -rn "gray-" src/` returns nothing (one grey scale)
- [ ] Tab through the whole site: every interactive element shows a visible ring
- [ ] OS "reduce motion" on → no card scaling, no entrance animation
- [ ] dark mode toggles cleanly on every route
- [ ] cards otherwise render as they did in Phase 2

---

## Phase 4 — Crawlable, keyboard-reachable cards

**Fixes:** audit 3.9, 1.9, 3.12, 2.6 (card responsive) · ~5 files · effort S

Small, high-value, and deliberately its own commit because it fixes an SEO defect and an
accessibility defect with the same change.

- Replace the `<div onClick>` card with a real `<Link>`; drop `'use client'` from
  `ProjectCard`.
- `priority` on the first card's image only, not all eight.
- Correct the `sizes` attributes; enable AVIF in `next.config.ts`.
- Stack the desktop/mobile screenshot pair below `sm`.

**Acceptance**

- [ ] right-click a project card → "Open link in new tab" works
- [ ] Tab reaches every card; Enter activates it
- [ ] view-source shows `<a href="/projects/1">`
- [ ] exactly one image preload in the response `link:` header
- [ ] at 360px the screenshots stack and are legible

---

## Phase 5 — Blog infrastructure

**Fixes:** audit 4, 1.3 · ~10 files · effort L

Approach per `docs/decisions.md` §2: MDX in-repo, Shiki at build time, hand-rolled schema
check.

- `content/blog/*.mdx` + frontmatter schema.
- `/blog` index and `/blog/[slug]`.
- Reading time, TOC, Shiki highlighting, drafts, published/updated dates.
- Remove `next-mdx-remote`; wire up the MDX deps that are already installed.
- Restore blog navigation to the header (it has no nav links at all today).
- Two real posts so the section isn't empty at launch.

**What could break:** first real content in the repo; the Phase 3 type scale gets its
real test against long-form prose.

**Acceptance**

- [ ] adding a `.mdx` to `content/blog/` makes it appear at `/blog/<slug>` after rebuild
- [ ] `draft: true` hides a post in production, shows it in dev
- [ ] a post missing `description` **fails the build**
- [ ] code blocks are highlighted with **zero** highlighting JS in the network tab
- [ ] reading time and publish date show on every post
- [ ] TOC links jump correctly; the header links to the blog

---

## Phase 6 — Blog SEO and discovery

**Fixes:** audit 3.4, 3.7, 3.8 (BlogPosting/Breadcrumb) · ~8 files · effort M

- Per-post metadata + canonical.
- `BlogPosting` + `BreadcrumbList` JSON-LD.
- RSS feed.
- Sitemap picks up posts automatically.
- Dynamic per-post OG images.
- Tag pages, archive pages, pagination, related posts.

**Acceptance**

- [ ] `/blog/<slug>` OG image renders the post title
- [ ] `/rss.xml` validates
- [ ] a new post appears in `/sitemap.xml` with no manual step
- [ ] Rich Results Test accepts `BlogPosting` and `BreadcrumbList`
- [ ] tag pages list the right posts; pagination works past 10

---

## Phase 7 — Visual identity

**Fixes:** audit 2.5, 2.7, 3.17 · split 7a/7b · effort L

Deliberately late: redesigning before the content layer exists means redesigning twice.
Phase 3 built the vocabulary; this spends it.

**7a — home + layout** (~6 files): hero with a real display `<h1>`, break the uniform
1024px column, asymmetric grid, narrow measure for articles.

**7b — project pages + chrome** (~6 files): project detail redesign, real favicon and
og-image, rewrite the README, delete the five create-next-app SVGs.

**What could break:** the largest visual change in the plan. Check both themes, mobile
and desktop, and specifically article pages at long lengths.

**Acceptance (7a)**

- [ ] home has one `<h1>` at display size, above the fold
- [ ] article body measure is ~65ch, not 1024px
- [ ] nothing scrolls horizontally at 320px
- [ ] Lighthouse Performance ≥ 90 on home and on an article

---

## Phase 8 — CI and guardrails

**Fixes:** audit 5.2, 5.3, 5.6 · ~6 files · effort M

- GitHub Actions: typecheck, lint, `next build` on every PR.
- Prettier + `prettier-plugin-tailwindcss` + EditorConfig.
- Playwright smoke tests: nav, 404, theme toggle, a blog post renders.
- Lighthouse CI budget.

**Acceptance**

- [ ] a PR that breaks types or the build is blocked by a red check
- [ ] Lighthouse SEO and Accessibility ≥ 95 on home and on an article

---

## Phase 9 — Launch

**Fixes:** audit 5.6 · effort S

- Deploy to a host (Vercel recommended — `docs/decisions.md` §5).
- Point `phymilad.vercel.app` at it; verify HTTPS and apex/www canonicalization.
- Google Search Console: verify the domain, submit the sitemap.
- Analytics if wanted (Plausible/Umami suggested).

**Acceptance**

- [ ] `https://phymilad.vercel.app` serves the site; `www` and `http` both 308 to the canonical
- [ ] Search Console verified and sitemap submitted without errors
- [ ] a shared link renders a proper card on LinkedIn and Slack

---

## Deferred

- Contact form / CV download — removed in commit `3fa4b74`; not re-adding unless asked.
- Search across posts — worth it past ~20 posts, not before.
- Newsletter capture — only once there's a publishing cadence to subscribe to.
- Re-adding languages — decision recorded in `docs/decisions.md` §1; the copy module in
  Phase 1 is structured so this is mechanical rather than a rewrite.

---

## Progress

| Phase                     | Status                     |
| ------------------------- | -------------------------- |
| 0 Unbreak the build       | ✅ done — `696a157`        |
| 1 Delete the locale layer | ✅ done — `4e1c95e`        |
| 2 Metadata & SEO          | ✅ done — `2a` + `2b`      |
| 3 Design foundation       | ✅ done — `3a` + `3b`      |
| 4 Crawlable cards         | ✅ done — `c0782c0`        |
| 5 Blog infrastructure     | ✅ done — `832e65b`        |
| 6 Blog SEO                | ✅ done — `58aefa5`        |
| 7 Visual identity         | ✅ done — `7a` + `7b`      |
| 8 CI                      | ✅ done — `8a` + `8b`      |
| 9 Launch                  | prepared — deploy is yours |
