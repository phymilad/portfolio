import type { Metadata } from 'next';
import '../globals.css';
import { t, dirOf, type Locale } from '@/i18n/dict';
import { Header } from '@/components/header';
import { inter, vazir } from '@/utils/constants';
import { ThemeProvider } from 'next-themes';

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
  const isFa = locale === 'fa';

  return (
    <html lang={locale} dir={dir} className={isFa ? vazir.className : inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-dvh bg-white text-slate-800 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header locale={locale} />

          <main className="w-full flex-1 mx-auto max-w-screen-lg px-6 py-4 md:p-4">{children}</main>

          <footer className="w-full mx-auto max-w-screen-lg border-t p-4 text-xs text-center">
            {t('footer_text', locale)}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
