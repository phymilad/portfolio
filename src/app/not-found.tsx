import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { notFoundPage } from '@/content/copy';

export default function NotFound() {
  return (
    <Container className="py-16 text-center">
      <h1 className="font-display text-title pb-3">{notFoundPage.title}</h1>
      <p className="text-fg-muted pb-6 md:text-lg">{notFoundPage.body}</p>
      <Link
        href="/"
        className="border-line hover:bg-surface-sunken hover:border-line-strong inline-block rounded-md border px-4 py-2 transition"
      >
        {notFoundPage.cta}
      </Link>
    </Container>
  );
}
