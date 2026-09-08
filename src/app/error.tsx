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
      <h1 className="text-3xl font-bold pb-3">{errorPage.title}</h1>
      <p className="text-slate-600 dark:text-slate-300 pb-6">{errorPage.body}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-md border border-slate-300 px-4 py-2 transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800 cursor-pointer"
        >
          {errorPage.retry}
        </button>
        <Link
          href="/"
          className="rounded-md border border-slate-300 px-4 py-2 transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
        >
          {errorPage.cta}
        </Link>
      </div>
    </section>
  );
}
