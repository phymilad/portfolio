import { ImageResponse } from 'next/og';
import { site } from '@/content/copy';
import { getAllPosts, getPost } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Article cover';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0f0e0d',
          color: '#f5f3f0',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, color: '#f0a868', letterSpacing: '0.12em' }}>
          {post ? formatDate(post.publishedAt).toUpperCase() : ''}
          {post ? `  ·  ${formatReadingTime(post.readingMinutes).toUpperCase()}` : ''}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: post && post.title.length > 60 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
          }}
        >
          {post?.title ?? site.name}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#b5aca4' }}>
          <span>{site.name}</span>
          <span>{site.url.replace('https://', '')}</span>
        </div>
      </div>
    ),
    size,
  );
}
