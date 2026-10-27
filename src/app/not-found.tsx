import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { notFoundPage } from '@/content/copy';

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24">
      <Badge tone="warning">Error 404</Badge>
      <h1 className="text-display-lg font-semibold">{notFoundPage.title}</h1>
      <p className="text-fg-muted text-lg">{notFoundPage.body}</p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Button href="/" leadingIcon="chevron-left">
          {notFoundPage.cta}
        </Button>
        <Button href="/blog" variant="secondary">
          Read the blog
        </Button>
      </div>
    </Container>
  );
}
