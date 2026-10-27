import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  series?: { id: string; order: number };
  draft?: boolean;
  cover?: { src: string; alt: string };
};

export type Post = PostFrontmatter & {
  slug: string;
  body: string;
  readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 200;

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Frontmatter is validated rather than trusted. A post missing a description
 * would otherwise ship with an empty <meta> and a broken card, and the failure
 * would only surface in Search Console weeks later.
 */
function assertFrontmatter(data: Record<string, unknown>, file: string): PostFrontmatter {
  const fail = (msg: string): never => {
    throw new Error(`Invalid frontmatter in content/blog/${file}: ${msg}`);
  };

  const { title, description, publishedAt, updatedAt, tags, series, draft, cover } = data;

  if (typeof title !== 'string' || !title.trim()) fail('`title` is required');
  if (typeof description !== 'string' || !description.trim()) fail('`description` is required');
  if (typeof publishedAt !== 'string' || !DATE_RE.test(publishedAt)) {
    fail('`publishedAt` is required and must be YYYY-MM-DD');
  }
  if (updatedAt !== undefined && (typeof updatedAt !== 'string' || !DATE_RE.test(updatedAt))) {
    fail('`updatedAt` must be YYYY-MM-DD');
  }
  if (tags !== undefined && !Array.isArray(tags)) fail('`tags` must be a list');
  if (draft !== undefined && typeof draft !== 'boolean') fail('`draft` must be true or false');

  return {
    title: title as string,
    description: description as string,
    publishedAt: publishedAt as string,
    updatedAt: updatedAt as string | undefined,
    tags: (tags as string[] | undefined) ?? [],
    series: series as PostFrontmatter['series'],
    draft: (draft as boolean | undefined) ?? false,
    cover: cover as PostFrontmatter['cover'],
  };
}

function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const frontmatter = assertFrontmatter(data, file);

  return {
    ...frontmatter,
    slug: file.replace(/\.mdx$/, ''),
    body: content,
    readingMinutes: readingMinutes(content),
  };
}

/**
 * Drafts are visible in development and excluded everywhere else, so they never
 * reach the index, a post URL, or the sitemap in production.
 */
export const includeDrafts = process.env.NODE_ENV === 'development';

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map(readPost)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags ?? []) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** The post's place in its series, for the "Part 2 of 20" badge and the pager. */
export function getSeriesContext(post: Post) {
  const series = post.series;
  if (!series) return undefined;
  const parts = getAllPosts()
    .filter((candidate) => candidate.series?.id === series.id)
    .sort((a, b) => a.series!.order - b.series!.order);
  const index = parts.findIndex((part) => part.slug === post.slug);
  return {
    id: series.id,
    order: series.order,
    total: parts.length,
    prev: parts[index - 1],
    next: parts[index + 1],
  };
}

/** Related by shared tags, then recency. */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const tags = new Set(post.tags ?? []);
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      candidate,
      shared: (candidate.tags ?? []).filter((tag) => tags.has(tag)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort(
      (a, b) =>
        b.shared - a.shared || b.candidate.publishedAt.localeCompare(a.candidate.publishedAt),
    )
    .slice(0, limit)
    .map((entry) => entry.candidate);
}
