'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
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
    <Container className="py-16 text-center">
      <h1 className="font-display text-title pb-3">{errorPage.title}</h1>
      <p className="text-fg-muted pb-6">{errorPage.body}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="border-line hover:bg-surface-sunken hover:border-line-strong cursor-pointer rounded-md border px-4 py-2 transition"
        >
          {errorPage.retry}
        </button>
        <Link
          href="/"
          className="border-line hover:bg-surface-sunken hover:border-line-strong rounded-md border px-4 py-2 transition"
        >
          {errorPage.cta}
        </Link>
      </div>
    </Container>
  );
}
