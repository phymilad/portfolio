import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { PageIntro } from '@/components/ui/page-intro';
import { notFound } from 'next/navigation';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { PostList } from '@/components/post-list';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';
import { blog, series } from '@/content/copy';

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

const postsForTag = (tag: string) =>
  getAllPosts().filter((post) => (post.tags ?? []).includes(tag));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const count = postsForTag(tag).length;
  if (count === 0) return {};

  const title = `Posts tagged "${tag}"`;
  const description = `${count} ${count === 1 ? 'post' : 'posts'} about ${tag}.`;

  return {
    title,
    description,
    alternates: { canonical: `/blog/tags/${tag}` },
    openGraph: { title, description, url: `/blog/tags/${tag}` },
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = postsForTag(tag);
  if (posts.length === 0) notFound();

  return (
    <Container>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: blog.title, path: '/blog' },
          { name: tag, path: `/blog/tags/${tag}` },
        ])}
      />

      <Breadcrumb parent={blog.title} href="/blog" current={`Tag: ${tag}`} />
      <PageIntro eyebrow="Tag" title={series[tag] ?? tag}>
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </PageIntro>

      <div className="border-line border-t">
        <PostList posts={posts} />
      </div>
    </Container>
  );
}
