# Portfolio Design System — Figma builder

A development plugin that builds the site's design system into a Figma file:
variables, text, effect and grid styles, 22 icons, 21 components with variants and
properties, foundation docs, and page templates for every route (desktop, mobile
and dark).

It exists because the Figma MCP allowance on a Starter plan is far too small to
build a library call by call. A local plugin has no such limit and can be
re-run whenever the tokens change.

## Run it

1. Open the target file in the **Figma desktop app** (development plugins do not
   run in the browser).
2. Menu → **Plugins → Development → Import plugin from manifest…** and pick
   `design/figma-plugin/manifest.json`.
3. Menu → **Plugins → Development → Portfolio Design System Builder**.

It takes about a minute. The toast at the end says either `Design system built.`
or how many steps had problems. Details are in **Plugins → Development → Show
console**.

Re-running deletes the pages, variable collections and styles a previous run
created (matched by exact name) and rebuilds them. Anything else in the file is
left alone.

## What it creates

| Page                | Contents                                                                           |
| ------------------- | ---------------------------------------------------------------------------------- |
| Cover               | File thumbnail                                                                     |
| Getting started     | Principles, Figma → CSS → Tailwind mapping, theming notes                          |
| Colors              | Primitives, semantic tokens with light and dark values                             |
| Typography          | Geist / Geist Mono and the 16 text styles                                          |
| Spacing & Radius    | 4px scale (matches Tailwind), radius scale                                         |
| Elevation & Grid    | Shadow and focus styles, desktop and mobile grids                                  |
| Icons               | 22 Lucide icons as components                                                      |
| Buttons & Links     | Button, Icon button, Link                                                          |
| Tags & Badges       | Tag, Badge                                                                         |
| Navigation          | Nav link, Header, Footer, Breadcrumb, TOC item, Pager                              |
| Cards & Lists       | Card, Fact, Highlight, Section header, Project row, Project card, Post item        |
| Content             | Code block, Inline code, Callout                                                   |
| Templates · Desktop | Home, Projects, Project, Blog, Blog post, About, 404, plus dark Home and Blog post |
| Templates · Mobile  | Home, light and dark                                                               |

Templates pull the portrait and project screenshots from
`https://phymilad.vercel.app`. If that fails (offline, or the images moved),
those frames stay empty and the rest still builds.

## Light and dark

Starter plans allow one mode per variable collection, so the semantic colours
live in two collections with identical names: `Theme · Light` and
`Theme · Dark`. Components are bound to Light. The dark templates are copies
rebound to Dark. On a Professional plan these can become one collection with two
modes.

## Keeping Figma and code in step

The token values at the top of `code.js` mirror `src/app/globals.css`. Every
variable carries its CSS custom property as code syntax, so Dev Mode shows
`var(--surface)` rather than a hex value. Change both files together, then
re-run the plugin.
