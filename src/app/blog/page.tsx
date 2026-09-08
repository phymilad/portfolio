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
    <article>
      <h1 className="font-display text-title pb-2">{blog.title}</h1>
      <p className="text-fg-muted">{blog.empty}</p>
    </article>
  );
}
