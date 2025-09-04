'use client';

import { Locale, t } from '@/i18n/dict';
import { inter, vazir } from '@/utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = { locale: Locale };

export const Header = (params: Props) => {
  const { locale } = params;
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const [_, __, ...rest] = pathname.split("/")
  const isFa = locale === 'fa';
  
  const base = `/${locale}`;
  const switchHref = `/${locale === 'fa' ? `en/${rest.join("/")}` : `fa/${rest.join("/")}`}`;

  useEffect(() => setOpen(false), [pathname]);

  const items = [
    { href: `${base}/projects`, label: t('nav_projects', locale) },
    { href: `${base}/blog`, label: t('nav_blog', locale) },
    { href: `${base}/about`, label: t('nav_about', locale) },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b bg-white backdrop-blur-lg shadow-sm">
      <nav className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link
          href={base}
          className="text-lg font-bold tracking-tight text-slate-800 hover:text-slate-900 transition-colors"
        >
          {t('brand', locale)}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {items.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`transition-colors hover:text-blue-600 ${
                  isActive(i.href) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {i.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`${base}/contact`}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:bg-blue-700"
            >
              {t('nav_contact', locale)}
            </Link>
          </li>
          <li>
            <Link
              href={switchHref}
              className={`rounded-md border border-slate-300 px-3 py-1 text-slate-600 transition hover:bg-slate-100 ${isFa ? inter.className : vazir.className}`}
            >
              {t('switch_locale', locale)}
            </Link>
          </li>
        </ul>

        {/* Mobile: hamburger */}
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
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
        className={`sm:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-200 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 p-3 text-sm font-medium">
          {items.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`block rounded-md px-3 py-2 transition-colors hover:bg-slate-50 ${
                  isActive(i.href) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {i.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`${base}/contact`}
              className="mt-2 block rounded-lg bg-blue-600 px-3 py-2 text-center text-white shadow-sm transition hover:bg-blue-700"
            >
              {t('nav_contact', locale)}
            </Link>
          </li>
          <li>
            <Link
              href={switchHref}
              className="mt-2 block rounded-md border border-slate-300 px-3 py-2 text-center text-slate-600 transition hover:bg-slate-50"
            >
              {t('switch_locale', locale)}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
