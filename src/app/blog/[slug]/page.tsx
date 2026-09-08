import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeShiki from '@shikijs/rehype';

import { getAllPosts, getPost, getRelatedPosts } from '@/lib/blog';
import { getToc } from '@/lib/toc';
import { mdxComponents } from '@/components/mdx';
import { formatDate, formatReadingTime } from '@/utils/format';
import { JsonLd } from '@/components/json-ld';
import { blogPostingSchema, breadcrumbSchema } from '@/utils/schema';
import { blog } from '@/content/copy';
import { Container } from '@/components/ui/container';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
    },
    // Drafts are dev-only, but belt and braces if one ever leaks.
    robots: post.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = getToc(post.body);
  const related = getRelatedPosts(post);

  const { content } = await compileMDX({
    source: post.body,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        // Highlighting runs at build time, so no highlighter JS reaches the
        // browser. Two themes, swapped by CSS in globals.css.
        rehypePlugins: [
          [
            rehypeShiki,
            { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false },
          ],
        ],
      },
    },
  });

  return (
    <Container width="wide" className="lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12">
      <article className="min-w-0 max-w-[68ch]">
        <JsonLd schema={blogPostingSchema(post)} />
        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: blog.title, path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ])}
        />

        <p className="font-mono text-xs text-fg-subtle pb-3">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true"> · </span>
          {formatReadingTime(post.readingMinutes)}
          {post.draft && (
            <span className="ms-2 rounded-full border border-accent px-2 py-0.5 text-accent">
              draft
            </span>
          )}
        </p>

        <h1 className="font-display text-title">{post.title}</h1>

        {post.updatedAt && (
          <p className="font-mono text-xs text-fg-subtle pt-3">
            Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
          </p>
        )}

        <div className="prose-body pt-4">{content}</div>

        {post.tags && post.tags.length > 0 && (
          <p className="flex flex-wrap gap-2 mt-12">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag}`}
                className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-sunken text-fg-muted border border-line hover:text-accent hover:border-accent transition-colors"
              >
                {tag}
              </Link>
            ))}
          </p>
        )}

        {related.length > 0 && (
          <section className="mt-16 border-t border-line pt-8">
            <h2 className="font-display text-heading pb-4">{blog.related}</h2>
            <ul className="space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {toc.length > 1 && (
        <aside className="hidden lg:block">
          <nav aria-label={blog.toc} className="sticky top-24">
            <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle pb-3">
              {blog.toc}
            </p>
            <ul className="space-y-2 text-sm border-s border-line">
              {toc.map((entry) => (
                <li key={entry.id} className={entry.depth === 3 ? 'ps-7' : 'ps-4'}>
                  <a href={`#${entry.id}`} className="text-fg-muted hover:text-accent transition-colors">
                    {entry.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </Container>
  );
}
