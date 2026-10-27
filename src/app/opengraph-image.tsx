import { ImageResponse } from 'next/og';
import { site } from '@/content/copy';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${site.name} | ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#0b0f0b',
        color: '#f8fafc',
        padding: '80px',
      }}
    >
      <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: '-0.02em' }}>{site.name}</div>
      <div style={{ fontSize: 40, color: '#94a3b8', marginTop: 12 }}>{site.role}</div>
      <div style={{ fontSize: 26, color: '#64748b', marginTop: 40 }}>
        {site.url.replace('https://', '')}
      </div>
    </div>,
    size,
  );
}
