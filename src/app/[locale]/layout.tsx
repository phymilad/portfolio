import type { Metadata } from 'next';
import Link from 'next/link';
import '../globals.css';
import { t, dirOf, type Locale } from '@/i18n/dict';

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
        <header className="sticky top-0 z-50 border-b bg-white/50 backdrop-blur">
          <nav className="mx-auto flex max-w-screen-lg items-center justify-between p-4">
            <Link href={base} className="font-semibold">{t('brand', locale)}</Link>
            <ul className="flex gap-4 text-sm">
              <li><Link href={`${base}/projects`}>{t('nav_projects', locale)}</Link></li>
              <li><Link href={`${base}/blog`}>{t('nav_blog', locale)}</Link></li>
              <li><Link href={`${base}/about`}>{t('nav_about', locale)}</Link></li>
              <li>
                <Link href={`${base}/contact`} className="rounded bg-slate-900 px-3 py-1 text-white">
                  {t('nav_contact', locale)}
                </Link>
              </li>
              <li><Link href={switchHref} className="rounded border px-2 py-1">{t('switch_locale', locale)}</Link></li>
            </ul>
          </nav>
        </header>

        <main className="w-full flex-1 mx-auto max-w-screen-lg p-4">{children}</main>

        <footer className="w-full mx-auto max-w-screen-lg border-t p-4 text-xs text-slate-500">
          {t('footer_text', locale)}
        </footer>
      </body>
    </html>
  );
}
