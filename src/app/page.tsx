import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ProjectRow } from '@/components/project-row';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/blog';
import { formatDate, formatReadingTime } from '@/utils/format';
import { aboutPage, home, portrait, site } from '@/content/copy';

const SectionHeading = ({ title, href, cta }: { title: string; href: string; cta: string }) => (
  <div className="border-line flex items-baseline justify-between gap-4 border-b pb-3">
    <h2 className="font-display text-title">{title}</h2>
    <Link
      href={href}
      className="text-fg-subtle hover:text-accent decoration-line hover:decoration-accent font-mono text-xs whitespace-nowrap underline underline-offset-4 transition-colors"
    >
      {cta}
    </Link>
  </div>
);

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <Container width="wide">
      {/* Hero: who I am, next to what I look like. */}
      <section className="grid items-center gap-10 pb-20 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div>
          <p className="text-accent pb-4 font-mono text-xs tracking-[0.2em] uppercase">
            {site.role}
          </p>

          <h1 className="font-display text-display">{site.name}</h1>

          <p className="text-fg-muted max-w-[52ch] pt-6 text-lg leading-relaxed md:text-xl">
            {home.tagline}
          </p>

          <p className="text-fg-muted max-w-[52ch] pt-4 leading-relaxed">{aboutPage.lead}</p>

          <Link
            href="/about"
            className="text-accent hover:text-accent-hover decoration-accent/40 hover:decoration-accent mt-6 inline-block font-mono text-xs underline underline-offset-4 transition-colors"
          >
            {home.moreAbout}
          </Link>
        </div>

        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          // Hidden below md, so no mobile branch is needed here and `priority`
          // is dropped: a preload would make phones fetch an image they never
          // see, while display:none keeps the lazy default from firing.
          sizes="(min-width: 1024px) 18rem, 15rem"
          className="hidden h-auto w-full md:block"
        />
      </section>

      {/* Selected work as compact rows. /projects has the full cards. */}
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
        <section>
          <SectionHeading title={home.recentWriting} href="/blog" cta={home.allPosts} />
          <ul className="divide-line divide-y">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-visible:outline-accent group block py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <p className="text-fg-subtle pb-2 font-mono text-xs">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span aria-hidden="true"> · </span>
                    {formatReadingTime(post.readingMinutes)}
                  </p>
                  <h3 className="font-display text-heading group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-fg-muted max-w-[70ch] pt-2 text-sm leading-relaxed md:text-base">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
