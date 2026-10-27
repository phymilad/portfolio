import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { fontVariables } from '@/utils/constants';
import { site } from '@/content/copy';
import { JsonLd } from '@/components/json-ld';
import { personSchema, webSiteSchema } from '@/utils/schema';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: '/',
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
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
          <main className="w-full flex-1 px-5 pt-12 sm:px-8 md:pt-20">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
