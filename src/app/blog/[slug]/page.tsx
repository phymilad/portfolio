import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Step 2 will return real slugs from content/blog.
  return [{ slug: 'hello-world' }, { slug: 'second-post' }];
}

export default function PostPage({ params }: { params: { slug: string } }) {
  // Placeholder: real MDX rendering arrives in Step 2.
  if (!['hello-world', 'second-post'].includes(params.slug)) return notFound();
  return (
    <article className="prose">
      <h1>{params.slug.replace('-', ' ')}</h1>
      <p>Post content goes here. Next step: read MDX files and render.</p>
    </article>
  );
}
