import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ProjectRow } from '@/components/project-row';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';
import { aboutPage, home, nav, portrait, site } from '@/content/copy';

const SectionHeading = ({ title, href, cta }: { title: string; href: string; cta: string }) => (
  <div className="border-line flex items-baseline justify-between gap-4 border-b pb-3">
    <h2 className="font-display text-title">{title}</h2>
    <Link
      href={href}
      className="text-fg-subtle hover:text-accent font-mono text-xs whitespace-nowrap transition-colors"
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
      <section className="grid gap-8 pb-20 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="text-accent pb-4 font-mono text-xs tracking-[0.2em] uppercase">
            {site.role}
          </p>
          <h1 className="font-display text-display">{site.name}</h1>
        </div>

        <p className="text-fg-muted text-lg leading-relaxed lg:pb-2">{home.tagline}</p>
      </section>

      {/* Selected work — compact rows; /projects carries the full cards. */}
      <section className="pb-20">
        <SectionHeading title={home.selectedWork} href="/projects" cta={home.allProjects} />
        <ul className="divide-line divide-y">
          {projects.slice(0, 3).map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ul>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section className="pb-20">
          <SectionHeading title={home.recentWriting} href="/blog" cta={home.allPosts} />
          <ul className="divide-line divide-y">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group focus-visible:outline-accent block py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <p className="text-fg-subtle pb-2 font-mono text-xs">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span aria-hidden="true"> · </span>
                    {formatReadingTime(post.readingMinutes)}
                  </p>
                  <h3 className="font-display text-heading group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-fg-muted max-w-[70ch] pt-2 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* About — the detail lives on /about */}
      <section className="grid items-start gap-8 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-10">
        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          sizes="(min-width: 640px) 12rem, 100vw"
          className="border-line rounded-card h-auto w-full border object-cover"
        />

        <div>
          <div className="border-line flex items-baseline justify-between gap-4 border-b pb-3">
            <h2 className="font-display text-title">{nav.about}</h2>
            <Link
              href="/about"
              className="text-fg-subtle hover:text-accent font-mono text-xs whitespace-nowrap transition-colors"
            >
              {home.moreAbout} →
            </Link>
          </div>
          <p className="text-fg-muted max-w-[62ch] pt-6 leading-relaxed">{aboutPage.lead}</p>
          <p className="text-fg-muted max-w-[62ch] pt-4 leading-relaxed">{home.intro}</p>
        </div>
      </section>
    </Container>
  );
}
