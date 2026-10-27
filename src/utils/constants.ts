import { Geist, Geist_Mono } from 'next/font/google';

/**
 * Two faces, two roles:
 *   sans  everything you read: headings, body and UI
 *   mono  everything a machine would print: code, dates, tags and metadata
 * See design/figma-plugin (Typography page) for the type scale.
 */

export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-face',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono-face',
  // Not in the critical path. Headings and body are.
  preload: false,
});

export const fontVariables = `${geist.variable} ${geistMono.variable}`;
