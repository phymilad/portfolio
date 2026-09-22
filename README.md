# phymilad.vercel.app

Personal site of Milad Mohammadi — portfolio, project write-ups, and a blog.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.
Statically generated; there is no database and no CMS.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run dev`       | Dev server (Turbopack)                                                                                                                                       |
| `npm run build`     | Production build. **Not** `--turbopack`: the Turbopack builder skips Next's generated route-type validation, which is how a broken build once went unnoticed |
| `npm start`         | Serve the production build                                                                                                                                   |
| `npm run lint`      | ESLint                                                                                                                                                       |
| `npm run typecheck` | `tsc --noEmit`                                                                                                                                               |

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

1. Copy `content/blog/example-post.mdx` to `content/blog/your-slug.mdx`.
   The filename becomes the URL: `/blog/your-slug`.
2. Edit the frontmatter.
3. Set `draft: false` when it is ready to publish.
4. `npm run dev` to preview, `npm run build` to check it passes.

```yaml
---
title: Post title
description: One sentence. Feeds the meta description, OG card and RSS.
publishedAt: '2026-09-08'
updatedAt: '2026-09-12' # optional
tags: ['nextjs', 'css'] # optional
draft: true # optional — dev only, never in prod
---
```

`title`, `description` and a `YYYY-MM-DD` `publishedAt` are required and
validated at build time: a malformed post fails the build with the file and
field named, rather than shipping an empty meta tag.

While `draft: true`, a post appears in `npm run dev` but is excluded from the
production build, the sitemap and the RSS feed, and its URL returns 404.

Everything else is derived, with no extra work per post:

| Derived                           | From                         |
| --------------------------------- | ---------------------------- |
| Reading time                      | Word count                   |
| Table of contents                 | `##` and `###` headings      |
| Tag pages at `/blog/tags/<tag>`   | `tags`                       |
| Archive at `/blog/archive/<year>` | `publishedAt`                |
| Related posts                     | Shared tags, then recency    |
| Social card image                 | Title, date and reading time |
| RSS entry and sitemap entry       | Automatic on publish         |

Syntax highlighting runs at build time via Shiki, so no highlighter JavaScript
is sent to the browser. Images go in `public/images/blog/` and render through
`next/image`.

## Deploying

Hosted on Vercel. Next.js needs no configuration there — no `vercel.json`.

First deploy:

1. Push to `github.com/phymilad/portfolio`.
2. Import the repo at [vercel.com/new](https://vercel.com/new). Framework, build
   command and output directory are all detected.
3. Add `phymilad.vercel.app` under Settings → Domains and follow the DNS instructions.
   Point the apex at Vercel and let `www` redirect to it, so only one hostname
   is canonical.

After that, pushes to `main` deploy to production and pull requests get preview
URLs. CI (`.github/workflows/ci.yml`) runs format, lint, typecheck, build and
the smoke tests on every push and PR.

`src/content/copy.ts` holds the canonical site URL. It drives `metadataBase`,
canonicals, the sitemap and RSS, so it must match the live domain.

Once live: submit `https://phymilad.vercel.app/sitemap.xml` in
[Google Search Console](https://search.google.com/search-console).

## Notes

- Styling is Tailwind v4. There is no `tailwind.config.ts` — v4 would not read
  one without an `@config` directive. Tokens live in `@theme` in
  `src/app/globals.css`.
- Colour tokens are declared on `:root`/`.dark` and mapped through
  `@theme inline` so utilities follow the cascade instead of resolving once at
  build time.
- The site was previously served under `/en`, `/fa`, `/de` and `/nl`. Those
  paths are permanently redirected in `next.config.ts`; see `docs/decisions.md`.
