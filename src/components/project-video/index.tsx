import { toEmbedUrl } from '@/utils/url';
import { Project, projects } from '@/content/projects';
import { projectsPage } from '@/content/copy';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { ChevronLink } from '@/components/ui/chevron-link';
import { Highlight } from '@/components/ui/highlight';
import { Pager } from '@/components/ui/pager';
import { Tag, TagList } from '@/components/ui/tag';

/**
 * Descriptions are written as: intro lines, a "Heading:" line, list items, and
 * one closing line. Rendering the items as a list (rather than one paragraph
 * each, as before) is what the data was always shaped for.
 */
const splitDescription = (lines: string[]) => {
  const at = lines.findIndex((line) => line.trim().endsWith(':'));
  if (at === -1) return { intro: lines, heading: undefined, items: [], outro: [] };
  return {
    intro: lines.slice(0, at),
    heading: lines[at].trim().replace(/:$/, ''),
    items: lines.slice(at + 1, -1),
    outro: lines.slice(-1),
  };
};

export const ProjectVideo = ({ project }: { project: Project }) => {
  const { intro, heading, items, outro } = splitDescription(project.description);
  const index = projects.findIndex((item) => item.id === project.id);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article>
      <Breadcrumb parent={projectsPage.title} href="/projects" current={project.title} />

      <h1 className="text-h1 max-w-[820px]">{project.title}</h1>
      <p className="text-fg-muted max-w-[760px] pt-5 text-lg">{project.shortDescription}</p>

      <div className="border-line bg-surface-inverse mt-10 aspect-video w-full overflow-hidden rounded-2xl border">
        <iframe
          className="h-full w-full"
          src={toEmbedUrl(project.youtubeUrl)}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="grid gap-12 pt-16 lg:grid-cols-[minmax(0,1fr)_21.25rem] lg:gap-16">
        <section aria-labelledby="overview" className="flex flex-col gap-5">
          <h2 id="overview" className="text-h2">
            Overview
          </h2>
          {intro.map((line, i) => (
            <p key={i} className="text-fg-muted leading-[1.75] md:text-lg">
              {line}
            </p>
          ))}
          {heading && <h3 className="text-h4 pt-2">{heading}</h3>}
          {items.length > 0 && (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <Highlight key={item}>{item}</Highlight>
              ))}
            </ul>
          )}
          {outro.map((line, i) => (
            <p key={i} className="text-fg-muted leading-[1.75] md:text-lg">
              {line}
            </p>
          ))}
        </section>

        <aside className="border-line bg-surface-raised flex h-fit flex-col gap-6 rounded-xl border p-6">
          <div className="flex flex-col gap-3">
            <h2 className="eyebrow text-fg-subtle">Stack</h2>
            <TagList>
              {project.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagList>
          </div>
          <div className="border-line flex flex-col gap-3 border-t pt-6">
            <h2 className="eyebrow text-fg-subtle">Links</h2>
            <ChevronLink href={project.youtubeUrl}>Watch on YouTube</ChevronLink>
            <ChevronLink href="/projects">All projects</ChevronLink>
          </div>
        </aside>
      </div>

      <div className="pt-16">
        <Pager
          label="More projects"
          prev={prev && { href: `/projects/${prev.id}`, title: prev.title }}
          next={next && { href: `/projects/${next.id}`, title: next.title }}
        />
      </div>
    </article>
  );
};
