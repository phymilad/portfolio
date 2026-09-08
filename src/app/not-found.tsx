import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { notFoundPage } from '@/content/copy';

export default function NotFound() {
  return (
    <Container className="py-16 text-center">
      <h1 className="font-display text-title pb-3">{notFoundPage.title}</h1>
      <p className="text-fg-muted pb-6">{notFoundPage.body}</p>
      <Link
        href="/"
        className="inline-block rounded-md border border-line px-4 py-2 transition hover:bg-surface-sunken hover:border-line-strong"
      >
        {notFoundPage.cta}
      </Link>
    </Container>
  );
}
