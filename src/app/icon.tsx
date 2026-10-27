import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/** Generated favicon: an initial on the inverse surface colour. */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#121418',
        color: '#f5f6f8',
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
