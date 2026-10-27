import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeShiki from '@shikijs/rehype';

import { getAllPosts, getPost, getRelatedPosts, getSeriesContext } from '@/lib/blog';
import { getToc } from '@/lib/toc';
import { mdxComponents } from '@/components/mdx';
import { formatDate, formatReadingTime } from '@/utils/format';
import { JsonLd } from '@/components/json-ld';
import { blogPostingSchema, breadcrumbSchema } from '@/utils/schema';
import { blog, series } from '@/content/copy';
import { Container } from '@/components/ui/container';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Tag, TagList } from '@/components/ui/tag';
import { Pager } from '@/components/ui/pager';
import { ChevronLink } from '@/components/ui/chevron-link';

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
  const seriesContext = getSeriesContext(post);

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

  const seriesName = seriesContext && series[seriesContext.id];

  return (
    <Container className="lg:grid lg:grid-cols-[minmax(0,720px)_15rem] lg:justify-between lg:gap-16">
      <article className="min-w-0">
        <JsonLd schema={blogPostingSchema(post)} />
        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: blog.title, path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ])}
        />

        <Breadcrumb parent={blog.title} href="/blog" current={seriesName ?? post.title} />

        <p className="text-fg-subtle flex flex-wrap items-center gap-3 pb-5 font-mono text-xs">
          {seriesContext && seriesName && (
            <Badge href={`/blog/tags/${seriesContext.id}`}>
              Part {seriesContext.order} of {seriesContext.total}
            </Badge>
          )}
          <span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {formatReadingTime(post.readingMinutes)}
          </span>
          {post.draft && <Badge tone="warning">draft</Badge>}
        </p>

        <h1 className="text-h1">{post.title}</h1>
        <p className="text-fg-muted pt-4 text-lg">{post.description}</p>

        {post.updatedAt && (
          <p className="text-fg-subtle pt-3 font-mono text-xs">
            Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
          </p>
        )}

        <div className="prose-body border-line mt-8 border-t pt-3">{content}</div>

        {post.tags && post.tags.length > 0 && (
          <TagList className="mt-12">
            {post.tags.map((tag) => (
              <Tag key={tag} variant="outline" href={`/blog/tags/${tag}`}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}

        {seriesContext && seriesName && (
          <div className="border-line mt-12 border-t pt-8">
            <Pager
              label={seriesName}
              prev={
                seriesContext.prev && {
                  href: `/blog/${seriesContext.prev.slug}`,
                  title: seriesContext.prev.title,
                }
              }
              next={
                seriesContext.next && {
                  href: `/blog/${seriesContext.next.slug}`,
                  title: seriesContext.next.title,
                }
              }
            />
          </div>
        )}

        {related.length > 0 && (
          <section className="border-line mt-12 border-t pt-8">
            <h2 className="eyebrow text-fg-subtle pb-4">{blog.related}</h2>
            <ul className="flex flex-col gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ChevronLink href={`/blog/${item.slug}`}>{item.title}</ChevronLink>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {toc.length > 1 && (
        <aside className="hidden lg:block">
          <nav aria-label={blog.toc} className="sticky top-24">
            <p className="eyebrow text-fg-subtle pb-3">{blog.toc}</p>
            <ul className="text-sm">
              {toc.map((entry) => (
                <li key={entry.id}>
                  {/* The TOC item component: a left rule with depth indent. */}
                  <a
                    href={`#${entry.id}`}
                    className={`border-line text-fg-muted hover:border-line-strong hover:text-fg block border-s py-1 transition-colors ${
                      entry.depth === 3 ? 'ps-8' : 'ps-4'
                    }`}
                  >
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
