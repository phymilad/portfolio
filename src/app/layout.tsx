import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Milad Mohammadi — Frontend Developer',
  description: 'Portfolio, projects, and blog by Milad Mohammadi.',
  metadataBase: new URL('https://example.com'), // change later
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-dvh bg-white text-slate-800 antialiased">
        <header className="sticky top-0 z-50 border-b bg-white/50 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="font-semibold">Milad Mohammadi</Link>
            <ul className="flex gap-4 text-sm">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact" className="rounded bg-slate-900 px-3 py-1 text-white">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="w-full flex-1 mx-auto max-w-5xl p-4 border-2">{children}</main>

        <footer className="w-full mx-auto max-w-5xl border-t p-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Milad Mohammadi
        </footer>
      </body>
    </html>
  );
}
