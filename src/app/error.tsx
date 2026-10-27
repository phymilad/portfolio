'use client';

import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24">
      <Badge tone="warning">Error</Badge>
      <h1 className="text-display-lg font-semibold">{errorPage.title}</h1>
      <p className="text-fg-muted text-lg">{errorPage.body}</p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Button onClick={reset}>{errorPage.retry}</Button>
        <Button href="/" variant="secondary">
          {errorPage.cta}
        </Button>
      </div>
    </Container>
  );
}
