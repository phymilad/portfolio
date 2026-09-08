import Link from 'next/link';
import type { Post } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';

/** Shared by the blog index, tag pages and archive pages. */
export const PostList = ({ posts }: { posts: Post[] }) => (
  <ul className="divide-line border-line flex flex-col divide-y border-t">
    {posts.map((post) => (
      <li key={post.slug}>
        <Link
          href={`/blog/${post.slug}`}
          className="group focus-visible:outline-accent block py-7 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <p className="text-fg-subtle pb-2 font-mono text-xs">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {formatReadingTime(post.readingMinutes)}
            {post.draft && (
              <span className="border-accent text-accent ms-2 rounded-full border px-2 py-0.5">
                draft
              </span>
            )}
          </p>

          <h2 className="font-display text-heading group-hover:text-accent transition-colors">
            {post.title}
          </h2>

          <p className="text-fg-muted pt-2 leading-relaxed">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <p className="flex flex-wrap gap-2 pt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-sunken text-fg-muted border-line rounded-full border px-2.5 py-1 font-mono text-xs"
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
