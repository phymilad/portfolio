import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { Card } from "@/components/ui/card";

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
      className="block rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Card interactive className="overflow-hidden">
        <div className="pb-4">
          <h3 className="font-display text-heading">{project.title}</h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          {desktop && (
            <div className="relative w-full sm:w-3/4 rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src={desktop}
                alt={`${project.title} — desktop interface`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 700px, (min-width: 640px) 70vw, 100vw"
                priority={priority}
              />
            </div>
          )}

          {mobile && (
            <div className="relative w-1/2 sm:w-1/4 rounded-xl overflow-hidden aspect-[9/16]">
              <Image
                src={mobile}
                alt={`${project.title} — mobile interface`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 235px, (min-width: 640px) 25vw, 50vw"
              />
            </div>
          )}
        </div>

        <div className="py-4">
          <p className="text-sm text-fg-muted leading-relaxed">{project.shortDescription}</p>
        </div>

        <div className="border-t border-line"></div>

        <div className="pt-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-sunken text-fg-muted border border-line"
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
