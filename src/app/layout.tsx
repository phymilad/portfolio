import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { fontVariables } from '@/utils/constants';
import { footer, site } from '@/content/copy';
import { JsonLd } from '@/components/json-ld';
import { personSchema, webSiteSchema } from '@/utils/schema';
import { Container } from '@/components/ui/container';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <JsonLd schema={personSchema()} />
        <JsonLd schema={webSiteSchema()} />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          {/* Width is chosen per page via <Container>, not fixed here. */}
          <main className="w-full flex-1 px-6 py-10 sm:px-8">{children}</main>

          <footer className="border-line mt-24 border-t">
            <Container className="text-fg-subtle flex flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs sm:flex-row sm:px-8">
              <span>{footer.text}</span>
              <span className="flex items-center gap-4">
                <a href="/rss.xml" className="hover:text-accent transition-colors">
                  RSS
                </a>
                <a
                  href={site.social[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </span>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
