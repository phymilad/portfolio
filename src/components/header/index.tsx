'use client';

import { navLinks, site } from '@/content/copy';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => setOpen(false), [pathname]);
  const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <header className="border-line bg-surface/80 sticky top-0 z-50 border-b backdrop-blur-lg">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3"
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-display hover:text-accent min-w-0 truncate text-lg tracking-tight transition-colors"
        >
          <span className="sm:hidden">{site.name}</span>
          <span className="hidden sm:inline">{site.brand}</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                className={`hover:text-accent transition-colors ${
                  pathname.startsWith(link.href) ? 'text-accent' : 'text-fg-muted'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="border-line text-fg-muted hover:bg-surface-sunken hover:border-line-strong cursor-pointer rounded-md border px-3 py-1 transition"
            >
              {mounted ? (resolvedTheme === 'light' ? '🌙' : '☀️') : null}
            </button>
          </li>
        </ul>

        {/* Mobile: hamburger */}
        <button
          className="text-fg-muted hover:bg-surface-sunken hover:text-fg inline-flex items-center justify-center rounded-md p-2 transition sm:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} border-line border-t sm:hidden`}
      >
        <ul className="flex flex-col gap-1 p-3 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                className={`hover:bg-surface-sunken block rounded-md px-3 py-2 transition-colors ${
                  pathname.startsWith(link.href) ? 'text-accent' : 'text-fg-muted'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="border-line hover:bg-surface-sunken mt-2 block w-full cursor-pointer rounded-md border px-3 py-2 text-center transition"
            >
              {mounted ? (resolvedTheme === 'light' ? '🌙 Dark' : '☀️ Light') : null}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
