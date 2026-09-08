import type { Metadata } from 'next';
import Link from 'next/link';
import { blog } from '@/content/copy';
import { getAllPosts } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';

export const metadata: Metadata = {
  title: blog.title,
  description: blog.metaDescription,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: blog.title,
    description: blog.metaDescription,
    url: '/blog',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: blog.title, path: '/blog' },
        ])}
      />

      <h1 className="font-display text-title pb-2">{blog.title}</h1>
      <p className="text-fg-muted leading-relaxed pb-10">{blog.metaDescription}</p>

      {posts.length === 0 ? (
        <p className="text-fg-muted">{blog.empty}</p>
      ) : (
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
      )}
    </section>
  );
}
