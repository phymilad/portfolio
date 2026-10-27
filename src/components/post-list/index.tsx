import Link from 'next/link';
import type { Post } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';
import { series as seriesNames } from '@/content/copy';
import { Icon } from '@/components/ui/icon';

/**
 * The Post item component: Wide from md up (date column, content, chevron),
 * Compact below. Shared by the home page, blog index, tag and archive pages.
 * Tags render as plain labels here because the whole row is already a link.
 */
export const PostList = ({
  posts,
  headingLevel = 'h2',
}: {
  posts: Post[];
  headingLevel?: 'h2' | 'h3';
}) => {
  const Heading = headingLevel;
  return (
    <ul className="divide-line flex flex-col divide-y">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-2 py-6 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:gap-8"
          >
            <p className="text-fg-subtle flex flex-wrap items-center gap-2 font-mono text-xs md:flex-col md:items-start md:gap-1 md:pt-1.5">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true" className="md:hidden">
                ·
              </span>
              <span>{formatReadingTime(post.readingMinutes)}</span>
              {post.draft && (
                <span className="bg-warning-subtle text-warning rounded-full px-2 py-0.5">
                  draft
                </span>
              )}
            </p>

            <div className="min-w-0">
              {post.series && seriesNames[post.series.id] && (
                <p className="text-accent-text pb-2 font-mono text-xs">
                  {seriesNames[post.series.id]} · Part {post.series.order}
                </p>
              )}
              <Heading className="text-h4 md:text-h3 group-hover:text-accent-text transition-colors">
                {post.title}
              </Heading>
              <p className="text-fg-muted pt-2 text-sm md:text-base">{post.description}</p>
              {post.tags && post.tags.length > 0 && (
                <p className="flex flex-wrap gap-1.5 pt-3">
                  {post.tags
                    .filter((tag) => tag !== post.series?.id)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="border-line text-fg-subtle rounded-md border px-2 py-0.5 font-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                </p>
              )}
            </div>

            <Icon
              name="chevron-right"
              size={20}
              className="text-fg-subtle group-hover:text-accent-text mt-1 hidden transition-[color,transform] motion-safe:group-hover:translate-x-0.5 md:block"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
