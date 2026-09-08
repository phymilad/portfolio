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
      <p className="text-fg-muted leading-relaxed pb-6">{blog.metaDescription}</p>

      <p className="flex flex-wrap items-center gap-2 pb-10">
        <a
          href="/rss.xml"
          className="font-mono text-xs px-2.5 py-1 rounded-full border border-line text-accent hover:border-accent transition-colors"
        >
          RSS
        </a>
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/blog/tags/${tag}`}
            className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-sunken text-fg-muted border border-line hover:text-accent hover:border-accent transition-colors"
          >
            {tag} <span className="text-fg-subtle">{count}</span>
          </Link>
        ))}
        {years.map((year) => (
          <Link
            key={year}
            href={`/blog/archive/${year}`}
            className="font-mono text-xs px-2.5 py-1 rounded-full border border-line text-fg-muted hover:text-accent hover:border-accent transition-colors"
          >
            {year}
          </Link>
        ))}
      </p>

      {posts.length === 0 ? <p className="text-fg-muted">{blog.empty}</p> : <PostList posts={posts} />}
    </section>
    </Container>
  );
}
