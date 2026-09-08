import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { inter } from '@/utils/constants';
import { footer, site } from '@/content/copy';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: 'Portfolio, projects, and blog by Milad Mohammadi.',
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-dvh bg-white text-slate-800 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main className="w-full flex-1 mx-auto max-w-screen-lg px-6 py-4 md:p-4">{children}</main>

          <footer className="w-full mx-auto max-w-screen-lg border-t p-4 text-xs text-center">
            {footer.text}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
