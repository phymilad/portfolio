import Link from 'next/link';
import type { Post } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';

/** Shared by the blog index, tag pages and archive pages. */
export const PostList = ({ posts }: { posts: Post[] }) => (
  <ul className="flex flex-col divide-y divide-line border-t border-line">
    {posts.map((post) => (
      <li key={post.slug}>
        <Link
          href={`/blog/${post.slug}`}
          className="group block py-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <p className="font-mono text-xs text-fg-subtle pb-2">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {formatReadingTime(post.readingMinutes)}
            {post.draft && (
              <span className="ms-2 rounded-full border border-accent px-2 py-0.5 text-accent">
                draft
              </span>
            )}
          </p>

          <h2 className="font-display text-heading group-hover:text-accent transition-colors">
            {post.title}
          </h2>

          <p className="text-fg-muted leading-relaxed pt-2">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <p className="flex flex-wrap gap-2 pt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-sunken text-fg-muted border border-line"
                >
                  {tag}
                </span>
              ))}
            </p>
          )}
        </Link>
      </li>
    ))}
  </ul>
);
