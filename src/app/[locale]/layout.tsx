import type { Metadata } from 'next';
import Link from 'next/link';
import '../globals.css';
import { t, dirOf, type Locale } from '@/i18n/dict';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Milad Mohammadi — Frontend Developer',
  description: 'Portfolio, projects, and blog by Milad Mohammadi.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  const dir = dirOf(locale);
  const base = `/${locale}`;
  const switchHref = `/${locale === 'fa' ? 'en' : 'fa'}`;

  return (
    <html lang={locale} dir={dir}>
      <body className="flex flex-col min-h-dvh bg-white text-slate-800 antialiased">
        <Header locale={locale} />

        <main className="w-full flex-1 mx-auto max-w-screen-lg p-4">{children}</main>

        <footer className="w-full mx-auto max-w-screen-lg border-t p-4 text-xs text-slate-500">
          {t('footer_text', locale)}
        </footer>
      </body>
    </html>
  );
}
