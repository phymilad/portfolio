import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/** Generated so the mark stays in sync with the accent token. */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f0e0d',
        color: '#f0a868',
        fontSize: 22,
        fontWeight: 700,
        borderRadius: 6,
      }}
    >
      M
    </div>,
    size,
  );
}
