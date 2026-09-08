import Link from 'next/link';
import type { Project } from '@/content/projects';

/**
 * Compact listing for the home page. /projects shows the full card with
 * screenshots; showing the same card in both places would have made two pages
 * of near-identical content competing with each other.
 */
export const ProjectRow = ({ project }: { project: Project }) => (
  <li>
    <Link
      href={`/projects/${project.id}`}
      className="group grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="min-w-0">
        <h3 className="font-display text-heading group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-fg-muted leading-relaxed pt-2">{project.shortDescription}</p>
      </div>

      <p className="flex flex-wrap gap-2 sm:max-w-[15rem] sm:justify-end">
        {project.skills.slice(0, 4).map((skill) => (
          <span key={skill} className="font-mono text-xs text-fg-subtle">
            {skill}
          </span>
        ))}
      </p>
    </Link>
  </li>
);
