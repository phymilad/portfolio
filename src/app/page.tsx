import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { ProjectRow } from '@/components/project-row';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';
import { home, nav, site } from '@/content/copy';

const SectionHeading = ({ title, href, cta }: { title: string; href: string; cta: string }) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
    <h2 className="font-display text-title">{title}</h2>
    <Link
      href={href}
      className="font-mono text-xs text-fg-subtle hover:text-accent transition-colors whitespace-nowrap"
    >
      {cta} →
    </Link>
  </div>
);

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <Container width="wide">
      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:items-end pb-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent pb-4">
            {site.role}
          </p>
          <h1 className="font-display text-display">{site.name}</h1>
        </div>

        <p className="text-lg leading-relaxed text-fg-muted lg:pb-2">{home.tagline}</p>
      </section>

      {/* Selected work — compact rows; /projects carries the full cards. */}
      <section className="pb-20">
        <SectionHeading title={home.selectedWork} href="/projects" cta={home.allProjects} />
        <ul className="divide-y divide-line">
          {projects.slice(0, 3).map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ul>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section className="pb-20">
          <SectionHeading title={home.recentWriting} href="/blog" cta={home.allPosts} />
          <ul className="divide-y divide-line">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <p className="font-mono text-xs text-fg-subtle pb-2">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span aria-hidden="true"> · </span>
                    {formatReadingTime(post.readingMinutes)}
                  </p>
                  <h3 className="font-display text-heading group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed pt-2 max-w-[70ch]">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* About */}
      <section>
        <h2 className="font-display text-title border-b border-line pb-3">{nav.about}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
          <Card interactive>
            <h3 className="font-display text-heading pb-2">{home.aboutTitle}</h3>
            <p className="text-fg-muted leading-relaxed">{home.intro}</p>
          </Card>

          <Card interactive>
            <h3 className="font-display text-heading pb-2">{home.whatIDoTitle}</h3>
            <p className="text-fg-muted leading-relaxed">{home.whatIDo}</p>
          </Card>

          <Card interactive>
            <h3 className="font-display text-heading pb-2">{home.experienceTitle}</h3>
            <ul className="list-disc ps-5 space-y-2 text-fg-muted leading-relaxed">
              {home.experience.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>

          <Card interactive>
            <h3 className="font-display text-heading pb-2">{home.howIWorkTitle}</h3>
            <p className="text-fg-muted leading-relaxed">{home.howIWork}</p>
          </Card>
        </div>
      </section>
    </Container>
  );
}
