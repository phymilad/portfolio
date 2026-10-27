import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/projects';
import { Icon } from '@/components/ui/icon';

/**
 * The Project row component, for the home page. /projects shows the full card;
 * showing the same card in both places would have made two pages of
 * near-identical content competing with each other.
 */
export const ProjectRow = ({ project }: { project: Project }) => (
  <li>
    <Link
      href={`/projects/${project.id}`}
      className="group grid gap-4 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-center sm:gap-8 lg:grid-cols-[12rem_minmax(0,1fr)_13.75rem_auto]"
    >
      {project.image.desktop && (
        <div className="border-line bg-surface-sunken relative aspect-[8/5] overflow-hidden rounded-lg border">
          <Image
            src={project.image.desktop}
            alt=""
            fill
            sizes="(min-width: 640px) 192px, 100vw"
            className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="min-w-0">
        <h3 className="text-h3 group-hover:text-accent-text transition-colors">{project.title}</h3>
        <p className="text-fg-muted line-clamp-2 pt-1.5 text-sm">{project.shortDescription}</p>
      </div>

      <p className="flex flex-wrap gap-1.5 lg:justify-end">
        {project.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="border-line text-fg-muted rounded-md border px-2.5 py-1 font-mono text-xs"
          >
            {skill}
          </span>
        ))}
      </p>

      <Icon
        name="chevron-right"
        size={20}
        className="text-fg-subtle group-hover:text-accent-text hidden transition-colors lg:block"
      />
    </Link>
  </li>
);
