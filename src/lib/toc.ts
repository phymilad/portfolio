export type TocEntry = { depth: 2 | 3; text: string; id: string };

/** Matches GitHub-style anchors so TOC links and heading ids agree. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-');
}

/**
 * Headings are read from the raw markdown rather than the compiled tree, so the
 * TOC can render before/independently of MDX compilation. Fenced code blocks are
 * stripped first — a `# comment` inside a shell snippet is not a heading.
 */
export function getToc(body: string): TocEntry[] {
  const withoutCode = body.replace(/^```[\s\S]*?^```/gm, '');
  const entries: TocEntry[] = [];

  for (const line of withoutCode.split('\n')) {
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;
    const text = match[2].replace(/[*_`]/g, '');
    entries.push({ depth: match[1].length as 2 | 3, text, id: slugify(text) });
  }

  return entries;
}
