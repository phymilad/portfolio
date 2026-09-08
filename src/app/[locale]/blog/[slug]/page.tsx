import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Step 2 will return real slugs from content/blog.
  return [{ slug: 'hello-world' }, { slug: 'second-post' }];
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Placeholder: real MDX rendering arrives in Step 2.
  if (!['hello-world', 'second-post'].includes(slug)) return notFound();
  return (
    <article className="prose">
      <h1>{slug.replace('-', ' ')}</h1>
      <p>Post content goes here. Next step: read MDX files and render.</p>
    </article>
  );
}
