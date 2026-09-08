import Link from 'next/link';
import { toEmbedUrl } from '@/utils/url';
import { Project } from '@/content/projects';
import { projectsPage } from '@/content/copy';

export const ProjectVideo = ({ project }: { project: Project }) => {
  return (
    <article>
      <nav aria-label="Breadcrumb" className="font-mono text-xs text-fg-subtle pb-6">
        <Link href="/projects" className="hover:text-accent transition-colors">
          {projectsPage.title}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-fg-muted">{project.title}</span>
      </nav>

      <h1 className="font-display text-title max-w-[24ch]">{project.title}</h1>

      <p className="text-lg leading-relaxed text-fg-muted pt-5 max-w-[68ch]">
        {project.shortDescription}
      </p>

      <ul className="flex flex-wrap gap-2 pt-6">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-sunken text-fg-muted border border-line"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="aspect-video w-full overflow-hidden rounded-card border border-line mt-10">
        <iframe
          className="h-full w-full"
          src={toEmbedUrl(project.youtubeUrl)}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <a
        href={project.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-mono text-xs text-accent hover:text-accent-hover mt-3"
      >
        Watch on YouTube →
      </a>

      <div className="mt-14 max-w-[68ch] space-y-5 border-t border-line pt-10">
        {project.description.map((line, index) => (
          <p key={index} className="leading-[1.75] text-fg-muted">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
};
