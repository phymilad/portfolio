'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { errorPage } from '@/content/copy';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-16 text-center">
      <h1 className="font-display text-title pb-3">{errorPage.title}</h1>
      <p className="text-fg-muted pb-6">{errorPage.body}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-md border border-line px-4 py-2 transition hover:bg-surface-sunken hover:border-line-strong cursor-pointer"
        >
          {errorPage.retry}
        </button>
        <Link
          href="/"
          className="rounded-md border border-line px-4 py-2 transition hover:bg-surface-sunken hover:border-line-strong"
        >
          {errorPage.cta}
        </Link>
      </div>
    </section>
  );
}
