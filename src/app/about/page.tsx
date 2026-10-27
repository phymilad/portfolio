import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { Tag } from '@/components/ui/tag';
import { ContactBand } from '@/components/contact-band';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';
import { getAllPosts } from '@/lib/blog';
import { projects } from '@/content/projects';
import { aboutPage, series, site } from '@/content/copy';

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

const linkClass = 'hover:text-accent-text underline-offset-4 transition-colors hover:underline';

/** A titled band: the heading sits in its own column from lg up. */
const Section = ({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) => (
  <section className="border-line grid gap-6 border-t py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-16">
    <div className="flex flex-col gap-2 lg:sticky lg:top-24 lg:self-start">
      <h2 className="text-h3">{title}</h2>
      {intro && <p className="text-fg-muted text-sm">{intro}</p>}
    </div>
    <div className="min-w-0">{children}</div>
  </section>
);

export default function About() {
  // Same rule as the home badge: the newest series, so it never goes stale.
  const currentSeries = getAllPosts().find((post) => post.series && series[post.series.id])?.series;

  const facts: { label: string; value: ReactNode }[] = [
    {
      label: 'Based in',
      value: (
        <span className="inline-flex items-center gap-1.5">
          <Icon name="map-pin" size={14} className="text-fg-subtle" />
          {aboutPage.location}
        </span>
      ),
    },
    { label: 'Role', value: site.role },
    { label: 'Focus', value: aboutPage.focus },
    ...(currentSeries
      ? [
          {
            label: 'Writing',
            value: (
              <Link href={`/blog/tags/${currentSeries.id}`} className={linkClass}>
                {series[currentSeries.id]}
              </Link>
            ),
          },
        ]
      : []),
    {
      label: 'Elsewhere',
      value: (
        <span className="flex gap-4">
          {site.social.map((href) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {href.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
            </a>
          ))}
        </span>
      ),
    },
  ];

  return (
    <Container>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: aboutPage.title, path: '/about' },
        ])}
      />

      <header className="grid gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:pb-20">
        <div>
          <p className="eyebrow text-accent-text pb-4">{aboutPage.title}</p>
          <h1 className="text-display-lg font-semibold">{site.name}</h1>
          <div className="text-fg-muted flex max-w-[640px] flex-col gap-4 pt-6 text-lg">
            {aboutPage.lead.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl
          aria-label="At a glance"
          className="border-line bg-surface-raised divide-line divide-y self-start rounded-xl border lg:mt-2"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
              <dt className="eyebrow text-fg-subtle">{fact.label}</dt>
              <dd className="text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Section title={aboutPage.whatIDoTitle}>
        <p className="max-w-[720px] text-lg leading-relaxed md:text-xl">{aboutPage.whatIDo}</p>
      </Section>

      <Section title={aboutPage.howIWorkTitle}>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {aboutPage.principles.map(([title, body]) => (
            <li key={title} className="border-line flex flex-col gap-2 border-t pt-5">
              <h3 className="text-h4">{title}</h3>
              <p className="text-fg-muted leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={aboutPage.workTitle} intro={aboutPage.workIntro}>
        <ul className="divide-line border-line divide-y border-y">
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="group flex items-center justify-between gap-6 py-4"
              >
                <span className="min-w-0">
                  <span className="group-hover:text-accent-text block font-medium transition-colors">
                    {project.title}
                  </span>
                  <span className="text-fg-subtle block truncate pt-1 font-mono text-xs">
                    {project.skills.slice(0, 4).join(' · ')}
                  </span>
                </span>
                <Icon
                  name="chevron-right"
                  className="text-fg-subtle group-hover:text-accent-text transition-[color,transform] motion-safe:group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={aboutPage.stackTitle}>
        <dl className="divide-line border-line divide-y border-y">
          {aboutPage.stack.map(([group, items]) => (
            <div
              key={group}
              className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <dt className="eyebrow text-fg-subtle w-28 shrink-0">{group}</dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <div className="pt-4">
        <ContactBand />
      </div>
    </Container>
  );
}
