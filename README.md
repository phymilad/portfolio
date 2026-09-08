# phymilad.com

Personal site of Milad Mohammadi — portfolio, project write-ups, and a blog.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.
Statically generated; there is no database and no CMS.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build. **Not** `--turbopack`: the Turbopack builder skips Next's generated route-type validation, which is how a broken build once went unnoticed |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

`typecheck` and `build` catch different things. Run both.

## Layout

```
content/blog/*.mdx      posts — the only place content lives
src/app/                routes, plus robots.ts, sitemap.ts, rss.xml, OG images
src/components/         ui/ primitives, mdx/ element map, feature components
src/content/            site copy and project data as typed modules
src/lib/                blog reading, frontmatter validation, TOC extraction
src/utils/              schema.org builders, formatters, URL helpers
docs/                   audit, roadmap, decision record
```

## Writing a post

Add `content/blog/<slug>.mdx`:

```yaml
---
title: Post title
description: One sentence. Feeds the meta description, OG card and RSS.
publishedAt: '2026-09-08'
updatedAt: '2026-09-12'   # optional
tags: ['nextjs', 'css']   # optional
draft: true               # optional — dev only, never in prod or the sitemap
---
```

`title`, `description` and a `YYYY-MM-DD` `publishedAt` are required and
validated at build time: a malformed post fails the build with the file and
field named, rather than shipping an empty meta tag.

Reading time, the table of contents, related posts, tag pages and archive pages
are all derived. Syntax highlighting runs at build time via Shiki, so no
highlighter JavaScript is sent to the browser.

## Notes

- Styling is Tailwind v4. There is no `tailwind.config.ts` — v4 would not read
  one without an `@config` directive. Tokens live in `@theme` in
  `src/app/globals.css`.
- Colour tokens are declared on `:root`/`.dark` and mapped through
  `@theme inline` so utilities follow the cascade instead of resolving once at
  build time.
- The site was previously served under `/en`, `/fa`, `/de` and `/nl`. Those
  paths are permanently redirected in `next.config.ts`; see `docs/decisions.md`.
