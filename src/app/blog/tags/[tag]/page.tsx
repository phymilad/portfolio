import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { PostList } from '@/components/post-list';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';
import { blog } from '@/content/copy';

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
    <Container width="default">
      <section>
        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: blog.title, path: '/blog' },
            { name: tag, path: `/blog/tags/${tag}` },
          ])}
        />

        <p className="text-fg-subtle pb-2 font-mono text-xs tracking-widest uppercase">Tag</p>
        <h1 className="font-display text-title pb-2">{tag}</h1>
        <p className="text-fg-muted pb-10 md:text-lg">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} ·{' '}
          <Link
            href="/blog"
            className="text-accent hover:text-accent-hover underline underline-offset-2"
          >
            all posts
          </Link>
        </p>

        <PostList posts={posts} />
      </section>
    </Container>
  );
}
