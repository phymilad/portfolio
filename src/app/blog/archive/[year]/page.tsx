import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { PageIntro } from '@/components/ui/page-intro';
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
    <Container>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: blog.title, path: '/blog' },
          { name: year, path: `/blog/archive/${year}` },
        ])}
      />

      <Breadcrumb parent={blog.title} href="/blog" current={`Archive: ${year}`} />
      <PageIntro eyebrow="Archive" title={year}>
        {posts.length} {posts.length === 1 ? 'post' : 'posts'} published in {year}
      </PageIntro>

      <div className="border-line border-t">
        <PostList posts={posts} />
      </div>
    </Container>
  );
}
