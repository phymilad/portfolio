import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { blog } from '@/content/copy';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { PostList } from '@/components/post-list';
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
  const tags = getAllTags();
  const years = [...new Set(posts.map((post) => post.publishedAt.slice(0, 4)))].sort().reverse();

  return (
    <Container width="default">
      <section>
        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: blog.title, path: '/blog' },
          ])}
        />

        <h1 className="font-display text-title pb-2">{blog.title}</h1>
        <p className="text-fg-muted pb-6 leading-relaxed md:text-lg">{blog.metaDescription}</p>

        <p className="flex flex-wrap items-center gap-2 pb-10">
          <a
            href="/rss.xml"
            className="border-line text-accent hover:border-accent rounded-full border px-2.5 py-1 font-mono text-xs transition-colors"
          >
            RSS
          </a>
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              className="bg-surface-sunken text-fg-muted border-line hover:text-accent hover:border-accent rounded-full border px-2.5 py-1 font-mono text-xs transition-colors"
            >
              {tag} <span className="text-fg-subtle">{count}</span>
            </Link>
          ))}
          {years.map((year) => (
            <Link
              key={year}
              href={`/blog/archive/${year}`}
              className="border-line text-fg-muted hover:text-accent hover:border-accent rounded-full border px-2.5 py-1 font-mono text-xs transition-colors"
            >
              {year}
            </Link>
          ))}
        </p>

        {posts.length === 0 ? (
          <p className="text-fg-muted">{blog.empty}</p>
        ) : (
          <PostList posts={posts} />
        )}
      </section>
    </Container>
  );
}
