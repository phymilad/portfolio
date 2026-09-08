import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Real slugs arrive with the content layer in phase 5.
  return [{ slug: 'hello-world' }, { slug: 'second-post' }];
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!['hello-world', 'second-post'].includes(slug)) return notFound();
  return (
    <article>
      <h1 className="font-display text-title">{slug.replace('-', ' ')}</h1>
    </article>
  );
}
