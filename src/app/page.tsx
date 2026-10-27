import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button, IconButton } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { Icon } from '@/components/ui/icon';
import { Tag } from '@/components/ui/tag';
import { ProjectRow } from '@/components/project-row';
import { PostList } from '@/components/post-list';
import { ContactBand } from '@/components/contact-band';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/blog';
import { aboutPage, home, portrait, series, site } from '@/content/copy';

export default function Home() {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 3);
  // The newest series gets the hero badge, so it follows whatever is current.
  const currentSeries = allPosts.find((post) => post.series && series[post.series.id])?.series;

  return (
    <Container>
      {/* Hero: who I am, next to what I look like. */}
      <section className="grid items-center gap-12 pb-20 md:grid-cols-[minmax(0,1fr)_17rem] lg:grid-cols-[minmax(0,1fr)_22.5rem] lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          {currentSeries && (
            <Badge href={`/blog/tags/${currentSeries.id}`}>
              New series · {series[currentSeries.id]}
            </Badge>
          )}

          <div>
            <p className="eyebrow text-accent-text pb-4">{site.role}</p>
            <h1 className="text-display-xl font-semibold">{site.name}</h1>
            <p className="text-fg-muted max-w-[600px] pt-5 text-lg">{home.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="/projects" trailingIcon="chevron-right">
              View projects
            </Button>
            <Button href="/blog" variant="secondary">
              Read the blog
            </Button>
            <span className="flex items-center gap-1 ps-1">
              <IconButton icon="github" label="GitHub" href={site.social[1]} />
              <IconButton icon="linkedin" label="LinkedIn" href={site.social[0]} />
            </span>
          </div>
        </div>

        {/* Hidden below md, so no mobile branch is needed and `priority` is
            dropped: a preload would make phones fetch an image they never see. */}
        <figure className="border-line bg-surface-sunken hidden overflow-hidden rounded-2xl border md:block">
          <div className="relative bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(min-width: 1024px) 22.5rem, 17rem"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="border-line bg-surface-raised flex items-center justify-between border-t px-4 py-3">
            <span className="text-[13px] font-medium">{site.name}</span>
            <span className="text-fg-subtle inline-flex items-center gap-1 font-mono text-xs">
              <Icon name="map-pin" size={12} />
              {aboutPage.location}
            </span>
          </figcaption>
        </figure>
      </section>

      <section
        aria-label="Core stack"
        className="border-line mb-24 flex flex-col gap-3 border-y py-6 sm:flex-row sm:items-center sm:gap-6"
      >
        <p className="eyebrow text-fg-subtle shrink-0">Core stack</p>
        <p className="flex flex-wrap gap-2">
          {home.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </p>
      </section>

      <section className="pb-24">
        <SectionHeader title={home.selectedWork} href="/projects" cta={home.allProjects} />
        <ul className="divide-line divide-y">
          {projects.slice(0, 3).map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ul>
      </section>

      {posts.length > 0 && (
        <section className="pb-24">
          <SectionHeader title={home.recentWriting} href="/blog" cta={home.allPosts} />
          <PostList posts={posts} headingLevel="h3" />
        </section>
      )}

      <ContactBand />
    </Container>
  );
}
