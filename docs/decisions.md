# Decisions

Scope: **English only**, root URLs, domain **phymilad.com**.

Decisions 1 and 5 are settled by your answers. Decisions 2, 3, and 4 were left to my
judgement — recommendations below are what I'll build unless you object.

A note on versions: where a decision depends on a library API, I'll verify the API
against the installed version's own docs at implementation time rather than from memory.

---

## 1. i18n approach — ✅ SETTLED: remove it

**Decision:** English only, root URLs, no i18n library, `fa`/`de`/`nl` deleted.

You initially answered "use i18n" alongside "just English" — I read the English-only
answer as the real one and confirmed it. For the record, this is the right call, and not
just because it's less work:

- Trilingual publishing is a **per-post recurring cost**, forever. Your stated goal is
  publishing regularly. Writing each post three times is the single most reliable way to
  stop publishing.
- Your target audience — Dutch and international employers, and developers who'd read a
  technical blog — reads English. The Persian and German translations were serving an
  audience that mostly overlaps with the English one.
- Partial multilingual is worse than none: a site with hreflang pointing at
  half-translated pages ranks worse than a clean monolingual site.

**Consequences:** `[locale]` segment deleted, `src/i18n/` deleted, the language selector
and four flag SVGs deleted, `createProjectsBasedOnLocale(locale)` collapses to a plain
array, and the middleware becomes unnecessary. URLs become `phymilad.com/projects/1`,
not `/en/projects/1` — with 308 redirects from the old paths so nothing rots.

Translations remain recoverable at `git show 657c228:src/i18n/dict.ts` if you ever
reverse this.

---

## 2. Content layer — my call: **MDX in-repo**

You left this to me. Reasoning, since you should be able to disagree with it:

### The options

- **A — MDX files in the repo.** `content/blog/*.mdx`, frontmatter, static generation.
- **B — Headless CMS** (Sanity, Contentful, Strapi).
- **C — Git-backed CMS** (Keystatic, TinaCMS) — an editing UI that commits MDX.
- **D — Typed MDX build step** (Velite, Content Collections) — A plus schema validation.

### Recommendation: **A, with a small hand-rolled schema check** (D's idea, without D's dependency)

The decisive factor is friction _per post_ versus setup cost, and which of those actually
determines whether posts get written.

A CMS wins when there are multiple non-technical authors, or when publishing volume makes
the commit-and-deploy loop the bottleneck. Neither is true here — you're one developer who
lives in an editor and already has git muscle memory. A CMS's genuine advantages (media
pipeline, scheduled publishing, web editor) don't outweigh adding a second system to
configure, secure, and pay for, plus webhooks and revalidation plumbing, before post #1
exists. And the English-only decision removes the CMS's strongest remaining argument —
side-by-side translation editing.

The argument that actually settles it: **your posts will contain code.** MDX gives you
build-time syntax highlighting, embeddable live React components, and prose that's
diffable in PRs. Round-tripping code samples through a CMS API to re-highlight them at
build time is strictly worse in every dimension.

Option D's validation is genuinely valuable — a post missing a `description` should fail
the build, not ship with a broken `<meta>`. But the schema below is small enough that a
~40-line check covers it, which honours the "no new dependency without justification"
rule. If the schema grows past that, I'll revisit.

**Reconsider if:** you want to publish from your phone, or expect more than ~2 posts/week.

### Dependencies this implies

`gray-matter` and `remark-gfm` are already in `package.json` and get used for real.
`@next/mdx` stays. `next-mdx-remote` gets **removed** — it exists for MDX fetched at
runtime from a CMS, which is exactly the architecture we're not building.

One addition I'd propose in Phase 5: **Shiki** for syntax highlighting, running at build
time. It beats the built-in option (nothing) and beats the obvious alternative
(Prism/highlight.js client-side) because it ships **zero JavaScript to the browser** —
highlighting happens during the build and the output is plain styled HTML. On a site
where Core Web Vitals are a stated goal, that's the whole argument.

### Schema

```
content/blog/<slug>.mdx
```

Frontmatter:

```yaml
title: string # required — feeds <h1>, <title>, OG
description: string # required — feeds meta description, OG, RSS
publishedAt: YYYY-MM-DD # required
updatedAt: YYYY-MM-DD # optional — surfaces "Updated" + schema.org dateModified
tags: [string] # optional
series: { id, order } # optional
draft: boolean # default false — visible in dev, excluded from prod + sitemap
cover: { src, alt } # optional
```

Derived at build time, not stored: reading time (word count), heading tree for the TOC,
related posts (tag overlap then recency), prev/next within a series.

### Reading experience (Phases 5–6)

TOC (sticky on desktop, collapsible on mobile), reading time, tag pages at
`/blog/tags/[tag]`, archive at `/blog/archive/[year]`, related posts, series prev/next,
Shiki highlighting with copy-to-clipboard, pagination at 10/page.

---

## 3. Styling approach — my call: **Tailwind v4 with a real `@theme` token layer**

### Recommendation: keep Tailwind, fix the tokens

Tailwind isn't the reason the site looks plain — the absence of a brand color, a type
scale, and any layout idea is (audit 2.2). Deleting the dead v3 `tailwind.config.ts` and
moving everything into `@theme` in `globals.css` — v4's actual configuration surface —
fixes the real problem without a rewrite, and gives you one file where the visual
identity lives.

**Rejected: shadcn/ui.** Well-built and accessible, but it has a _recognizable look_, and
your explicit goal is not reading as a template. Adopting the most widely-deployed
component aesthetic on the web works directly against that. It would also pull in Radix
and CVA for a site with about five components.

**Rejected: CSS Modules / vanilla-extract.** A full rewrite of every component for
benefits the token layer already provides.

**One dependency I'd add in Phase 8:** `prettier-plugin-tailwindcss`. It earns its place
specifically because it makes the six-way duplicated card class string (audit 2.3)
impossible to hide — deterministic class order turns "these look similar" into "these are
byte-identical".

---

## 4. Redesign direction — my call: **editorial base, technical accents**

You left this to me, so here is the concrete proposal rather than a menu.

### The reasoning

You are about to become **a blog that happens to have a portfolio attached**. That's what
"publish regularly" plus "I want to rank" means in practice — the articles will be the
majority of the pages, the majority of the words, and essentially all of the search
traffic. So the design should be optimized for reading long-form technical prose, and the
portfolio should live inside that system rather than the other way around.

An editorial direction serves that directly: it makes long text comfortable, it ages well,
and it's the one aesthetic that improves rather than degrades as you add content. The
competing directions have a common flaw here — a heavily graphic or heavily "technical"
site looks best when empty and gets harder to maintain with every article.

But pure editorial risks reading as a writer's site, not an engineer's. So the accent:
borrow a **monospace technical vocabulary** for the technical surfaces only — skill tags,
code, metrics, project metadata, dates, the footer. The contrast between warm editorial
prose and cool technical data is itself an identity, and it's not one any starter template
ships with — which is the actual brief.

### What this means concretely

- **Type:** a real display face for headings at 3–4× body size (the current maximum is
  `text-xl`, audit 2.2), a comfortable reading face at ~18px/1.7 for body, and a mono for
  code, tags, dates, and metadata. Inter can stay as the body face — it's a sound choice
  and it's already loaded; the display and mono faces are the additions.
- **Color:** near-monochrome with **one** accent hue carried through links, focus rings,
  tag pills, and the active nav state. One hue, used consistently, is what reads as
  "designed"; the current site has none at all.
- **Layout:** break the uniform 1024px column (audit 2.5). Articles get a narrow
  measure (~65ch) for readability; the home page and project pages get a wider,
  asymmetric grid. Different content, different container.
- **Motion:** entrance fades and link/underline transitions only, all `motion-safe:`
  guarded. Not the current `hover:scale-105` on everything, which is both unguarded
  (audit 5.5) and the most template-ish gesture on the site.
- **Dark mode:** designed properly rather than inherited — the current implementation is
  half-applied (audit 2.8).

Phase 3 builds this as tokens; Phase 8 spends them. If you want to steer it, the cheapest
moment is right after Phase 3 lands — the token file is one place to change.

---

## 5. Deployment & analytics — ✅ SETTLED: not set up yet

You confirmed nothing is configured. Implications:

- **Local verification only** until a host exists. Everything through Phase 8 can be
  verified against `next start` on localhost; only the live-domain checks (OG cards
  rendering in Slack, Search Console) need the real deployment.
- **Recommendation when you're ready:** Vercel. Not out of habit — for this specific
  project it's zero-config for Next 15, gives preview deploys per PR (which the plan's
  acceptance criteria assume), and handles the `next/image` optimization pipeline that
  audit 3.12 depends on. Netlify and Cloudflare are both fine; self-hosting means owning
  the `sharp` CVE surface from audit 1.4 yourself.
- **Analytics:** I'd suggest Plausible or Umami over GA4 — no cookie banner needed, far
  smaller script, and the data you actually want (which posts get read) is what they're
  built for. But this is genuinely deferrable; it's Phase 9 at the earliest.
- **Do set up Google Search Console** as soon as the domain is live. For your ranking
  goal it matters more than any analytics tool — it's the only place you see what queries
  you're actually surfacing for, and it's where you submit the sitemap from Phase 2.

---

## Answered

Recorded 2026-09-08.

| Question             | Answer                                                                                                                                                         |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locales              | English only. `fa`/`de`/`nl` deleted, recoverable at `657c228`.                                                                                                |
| Domain               | phymilad.com                                                                                                                                                   |
| Hosting              | Vercel                                                                                                                                                         |
| i18n library         | None — the locale layer was removed instead.                                                                                                                   |
| Content layer        | MDX in the repo.                                                                                                                                               |
| Styling              | Tailwind v4 with a CSS token layer.                                                                                                                            |
| Design direction     | Editorial base, technical accents — accepted as built.                                                                                                         |
| Role wording         | **Software Engineer**. Milad wrote "Software Engineering"; as a job title the noun is Engineer, which also matches his GitHub bio.                             |
| `sameAs` profiles    | LinkedIn and GitHub, both verified. No guessed URLs.                                                                                                           |
| YouTube upload dates | Not provided, by choice. `VideoObject` stays without `uploadDate` — valid markup, but it will not earn a video rich result.                                    |
| Project titles       | Shortened so each `<title>` lands under ~60 characters with the site template appended.                                                                        |
| Blog posts           | The drafts written during phase 5 were deleted. `content/blog/example-post.mdx` remains as a template, permanently `draft: true`. Milad writes the real posts. |
| Analytics            | Deferred.                                                                                                                                                      |
| Search Console       | Deferred until the site is live.                                                                                                                               |

## Still open

- **Analytics** — Plausible or Umami recommended over GA4: no cookie banner, far
  smaller script, and the useful question ("which posts get read") is what they
  are built for. Deferred by choice, not blocked.
- **Search Console** — submit `https://phymilad.com/sitemap.xml` once the domain
  resolves. For the ranking goal this matters more than analytics.
- **Pagination** — deferred until the post count approaches ten; building it for
  an empty blog would mean an unverifiable route.
- **Lighthouse budget in CI** — belongs against the real deployment rather than a
  cold runner.
