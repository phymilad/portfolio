import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { fontVariables } from '@/utils/constants';
import { footer, site } from '@/content/copy';
import { JsonLd } from '@/components/json-ld';
import { personSchema, webSiteSchema } from '@/utils/schema';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: '/',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="flex flex-col min-h-dvh font-sans antialiased">
        <JsonLd schema={personSchema()} />
        <JsonLd schema={webSiteSchema()} />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main className="w-full flex-1 mx-auto max-w-screen-lg px-6 py-4 md:p-4">{children}</main>

          <footer className="w-full mx-auto max-w-screen-lg border-t border-line p-4 text-center font-mono text-sm text-fg-subtle">
            {footer.text}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
