import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { Tag } from '@/components/ui/tag';
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
    <Container>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: blog.title, path: '/blog' },
        ])}
      />

      <PageIntro eyebrow="Writing" title={blog.title}>
        {blog.metaDescription}
      </PageIntro>

      <nav aria-label="Filter posts" className="flex flex-wrap items-center gap-2 pb-10">
        <Tag variant="accent" href="/rss.xml">
          RSS
        </Tag>
        {tags.map(({ tag, count }) => (
          <Tag key={tag} href={`/blog/tags/${tag}`} count={count}>
            {tag}
          </Tag>
        ))}
        {years.map((year) => (
          <Tag key={year} variant="outline" href={`/blog/archive/${year}`}>
            {year}
          </Tag>
        ))}
      </nav>

      {posts.length === 0 ? (
        <p className="text-fg-muted">{blog.empty}</p>
      ) : (
        <div className="border-line border-t">
          <PostList posts={posts} />
        </div>
      )}
    </Container>
  );
}
