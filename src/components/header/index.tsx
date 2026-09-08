'use client';

import { site } from '@/content/copy';
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
    <header className="sticky top-0 z-50 border-b border-slate-200 backdrop-blur-lg shadow-sm ">
        <nav className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3">
            {/* Brand */}
            <Link
                href="/"
                className="text-lg font-bold tracking-tight transition-colors"
            >
                {site.brand}
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
                <li>
                    <button
                        onClick={toggleTheme}
                        className="rounded-md border border-slate-300 px-3 py-1 text-slate-600 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
                    >
                        {mounted ? resolvedTheme === 'light' ? '🌙' : '☀️' : null}
                    </button>
                </li>
            </ul>

            {/* Mobile: hamburger */}
            <button
                className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition dark:text-slate-300 dark:hover:bg-slate-800"
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 7h16M4 12h16M4 17h16"
                        />
                    )}
                </svg>
            </button>
        </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`${open?'block': 'hidden'} sm:hidden border-t border-slate-200  transition-all duration-200 dark:border-slate-700  ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-1 p-3 text-sm font-medium">
            <li>
                <button
                    onClick={toggleTheme}
                    className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-center transition hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
                >
                    {mounted ? resolvedTheme === 'light' ? '🌙 Dark' : '☀️ Light' : null}
                </button>
            </li>
        </ul>
      </div>
    </header>
  );
};
