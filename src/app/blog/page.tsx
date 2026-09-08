import type { Metadata } from 'next';
import { blog } from '@/content/copy';

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
  return (
    <article className="prose">
      <h1>{blog.title}</h1>
      <p>{blog.empty}</p>
    </article>
  );
}
