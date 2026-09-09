import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';
import { aboutPage, home, portrait, site } from '@/content/copy';

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.metaDescription,
  alternates: { canonical: '/about' },
  openGraph: {
    title: aboutPage.title,
    description: aboutPage.metaDescription,
    url: '/about',
  },
};

export default function About() {
  return (
    <Container>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: aboutPage.title, path: '/about' },
        ])}
      />

      <section className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_16rem] sm:items-start sm:gap-12">
        <div>
          <p className="text-accent pb-4 font-mono text-xs tracking-[0.2em] uppercase">
            {aboutPage.title}
          </p>
          <h1 className="font-display text-title">{site.name}</h1>
          <p className="text-fg-muted max-w-[60ch] pt-6 text-lg leading-relaxed">
            {aboutPage.lead}
          </p>
        </div>

        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          sizes="(min-width: 640px) 16rem, 100vw"
          priority
          className="h-auto w-full max-w-[13rem] sm:sticky sm:top-24 sm:max-w-none"
        />
      </section>

      <div className="grid grid-cols-1 gap-6 pt-16 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-heading pb-2">{home.whatIDoTitle}</h2>
          <p className="text-fg-muted leading-relaxed">{home.whatIDo}</p>
        </Card>

        <Card>
          <h2 className="font-display text-heading pb-2">{home.howIWorkTitle}</h2>
          <p className="text-fg-muted leading-relaxed">{home.howIWork}</p>
        </Card>

        <Card className="lg:col-span-2">
          <h2 className="font-display text-heading pb-2">{home.experienceTitle}</h2>
          <ul className="text-fg-muted list-disc space-y-2 ps-5 leading-relaxed">
            {home.experience.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Card>
      </div>

      <section className="border-line mt-16 border-t pt-10">
        <h2 className="font-display text-heading pb-2">{aboutPage.contactTitle}</h2>
        <p className="text-fg-muted pb-5 leading-relaxed">{aboutPage.contactBody}</p>
        <p className="flex flex-wrap gap-3">
          {site.social.map((href) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-line hover:border-accent hover:text-accent rounded-full border px-4 py-2 font-mono text-xs transition-colors"
            >
              {href.includes('linkedin') ? 'LinkedIn' : 'GitHub'} ↗
            </a>
          ))}
          <Link
            href="/projects"
            className="border-line hover:border-accent hover:text-accent rounded-full border px-4 py-2 font-mono text-xs transition-colors"
          >
            See my work
          </Link>
        </p>
      </section>
    </Container>
  );
}
