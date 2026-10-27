import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/content/projects';
import { Icon } from '@/components/ui/icon';

/**
 * The Project card component. Server component and a real anchor: this was
 * once a div with an onClick that called router.push, which meant crawlers
 * could not follow it and keyboard users could not reach it at all.
 */
export const ProjectCard = ({
  project,
  /** Only the first card above the fold should preload its image. */
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) => {
  const shown = project.skills.slice(0, 4);
  const rest = project.skills.length - shown.length;

  return (
    <Link href={`/projects/${project.id}`} className="group block rounded-xl">
      <article className="border-line bg-surface-raised group-hover:border-line-strong motion-safe:animate-fade-in-up flex h-full flex-col overflow-hidden rounded-xl border transition-[border-color,box-shadow] duration-300 group-hover:shadow-md">
        <div className="bg-surface-sunken px-6 pt-6">
          {project.image.desktop && (
            <div className="border-line bg-surface relative aspect-[16/10] overflow-hidden rounded-t-lg border border-b-0">
              <Image
                src={project.image.desktop}
                alt={`${project.title}, desktop view`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 510px, (min-width: 640px) 45vw, 100vw"
                priority={priority}
              />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h2 className="text-h3 group-hover:text-accent-text transition-colors">
            {project.title}
          </h2>
          <p className="text-fg-muted text-sm">{project.shortDescription}</p>
          <p className="flex flex-wrap gap-1.5 pt-1">
            {shown.map((skill) => (
              <span
                key={skill}
                className="border-line bg-surface-sunken text-fg-muted rounded-md border px-2.5 py-1 font-mono text-xs"
              >
                {skill}
              </span>
            ))}
            {rest > 0 && (
              <span className="border-line text-fg-subtle rounded-md border px-2.5 py-1 font-mono text-xs">
                +{rest}
              </span>
            )}
          </p>
        </div>

        <div className="border-line flex items-center justify-between border-t px-6 py-4">
          <span className="group-hover:text-accent-text inline-flex items-center gap-1.5 text-sm font-medium transition-colors">
            View project
            <Icon
              name="chevron-right"
              className="transition-transform motion-safe:group-hover:translate-x-0.5"
            />
          </span>
          <span className="text-fg-subtle inline-flex items-center gap-1.5 font-mono text-xs">
            <Icon name="play" size={14} />
            Video walkthrough
          </span>
        </div>
      </article>
    </Link>
  );
};
