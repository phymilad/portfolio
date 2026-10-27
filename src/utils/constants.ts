import { Inter, Fraunces, IBM_Plex_Mono } from 'next/font/google';

/**
 * Three roles, three faces:
 *   sans    body copy and UI
 *   display headings, the editorial half of the identity
 *   mono    code, tags, dates and metadata, the technical accent
 * See docs/decisions.md §4.
 */

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-face',
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-face',
});

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono-face',
  // Not in the critical path. Headings and body are.
  preload: false,
});

export const fontVariables = `${inter.variable} ${fraunces.variable} ${plexMono.variable}`;
