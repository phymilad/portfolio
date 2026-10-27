'use client';

import { navLinks, site } from '@/content/copy';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconButton } from '@/components/ui/button';

/** The Nav link component: muted, hover fill, sunken pill when active. */
const navClass = (active: boolean) =>
  [
    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
    active ? 'bg-surface-sunken text-fg' : 'text-fg-muted hover:bg-surface-hover hover:text-fg',
  ].join(' ');

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => setOpen(false), [pathname]);
  const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  // Falls back to a neutral label before hydration, when the theme is unknown.
  const themeLabel = mounted
    ? `Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`
    : 'Switch theme';
  const themeIcon = mounted && resolvedTheme === 'dark' ? 'sun' : 'moon';
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="border-line bg-surface/80 sticky top-0 z-50 border-b px-5 backdrop-blur-lg sm:px-8">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl items-center justify-between py-3"
      >
        <Link
          href="/"
          className="hover:text-accent-text min-w-0 truncate text-base font-semibold tracking-tight transition-colors"
        >
          {site.name}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 sm:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={navClass(isActive(link.href))}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="bg-line mx-2 h-5 w-px" />
          <IconButton icon="github" label="GitHub" href={site.social[1]} />
          <IconButton icon={themeIcon} label={themeLabel} onClick={toggleTheme} />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 sm:hidden">
          <IconButton icon={themeIcon} label={themeLabel} onClick={toggleTheme} />
          <IconButton
            icon={open ? 'x' : 'menu'}
            label={open ? 'Close menu' : 'Open menu'}
            variant="secondary"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          />
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} border-line border-t sm:hidden`}
      >
        <ul className="flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`block ${navClass(isActive(link.href))}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
