import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/blog';
import { PostList } from '@/components/post-list';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';
import { blog } from '@/content/copy';

const yearOf = (iso: string) => iso.slice(0, 4);

export function generateStaticParams() {
  return [...new Set(getAllPosts().map((post) => yearOf(post.publishedAt)))].map((year) => ({
    year,
  }));
}

const postsForYear = (year: string) =>
  getAllPosts().filter((post) => yearOf(post.publishedAt) === year);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  const count = postsForYear(year).length;
  if (count === 0) return {};

  const title = `Archive: ${year}`;
  const description = `${count} ${count === 1 ? 'post' : 'posts'} published in ${year}.`;

  return {
    title,
    description,
    alternates: { canonical: `/blog/archive/${year}` },
    openGraph: { title, description, url: `/blog/archive/${year}` },
  };
}

export default async function ArchivePage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const posts = postsForYear(year);
  if (posts.length === 0) notFound();

  return (
    <Container width="default">
      <section>
        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: blog.title, path: '/blog' },
            { name: year, path: `/blog/archive/${year}` },
          ])}
        />

        <p className="text-fg-subtle pb-2 font-mono text-xs tracking-widest uppercase">Archive</p>
        <h1 className="font-display text-title pb-2">{year}</h1>
        <p className="text-fg-muted pb-10">
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
