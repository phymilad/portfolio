import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/content/projects';
import { Card } from '@/components/ui/card';

/**
 * Server component. This was previously a div with an onClick that called
 * router.push, which meant crawlers could not follow it to the project pages
 * and keyboard users could not reach it at all. A real anchor fixes both.
 */
export const ProjectCard = ({
  project,
  /** Only the first card above the fold should preload its image. */
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) => {
  const { desktop, mobile } = project.image;

  return (
    <Link
      href={`/projects/${project.id}`}
      className="rounded-card focus-visible:outline-accent block focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <Card interactive className="overflow-hidden">
        <div className="pb-4">
          <h3 className="font-display text-heading">{project.title}</h3>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          {desktop && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:w-3/4">
              <Image
                src={desktop}
                alt={`${project.title}, desktop view`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 700px, (min-width: 640px) 70vw, 100vw"
                priority={priority}
              />
            </div>
          )}

          {mobile && (
            <div className="relative aspect-[9/16] w-1/2 overflow-hidden rounded-xl sm:w-1/4">
              <Image
                src={mobile}
                alt={`${project.title}, mobile view`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 235px, (min-width: 640px) 25vw, 50vw"
              />
            </div>
          )}
        </div>

        <div className="py-4">
          <p className="text-fg-muted text-sm leading-relaxed md:text-base">
            {project.shortDescription}
          </p>
        </div>

        <div className="border-line border-t"></div>

        <div className="pt-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="bg-surface-sunken text-fg-muted border-line rounded-full border px-2.5 py-1 font-mono text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};
