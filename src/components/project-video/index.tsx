import Link from 'next/link';
import { toEmbedUrl } from '@/utils/url';
import { Project } from '@/content/projects';
import { projectsPage } from '@/content/copy';

export const ProjectVideo = ({ project }: { project: Project }) => {
  return (
    <article>
      <nav aria-label="Breadcrumb" className="text-fg-subtle pb-6 font-mono text-xs">
        <Link href="/projects" className="hover:text-accent transition-colors">
          {projectsPage.title}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-fg-muted">{project.title}</span>
      </nav>

      <h1 className="font-display text-title max-w-[24ch]">{project.title}</h1>

      <p className="text-fg-muted max-w-[68ch] pt-5 text-lg leading-relaxed">
        {project.shortDescription}
      </p>

      <ul className="flex flex-wrap gap-2 pt-6">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="bg-surface-sunken text-fg-muted border-line rounded-full border px-2.5 py-1 font-mono text-xs"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="rounded-card border-line mt-10 aspect-video w-full overflow-hidden border">
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
        className="text-accent hover:text-accent-hover decoration-accent/40 hover:decoration-accent mt-3 inline-block font-mono text-xs underline underline-offset-4"
      >
        Watch on YouTube
      </a>

      <div className="border-line mt-14 max-w-[68ch] space-y-5 border-t pt-10">
        {project.description.map((line, index) => (
          <p key={index} className="text-fg-muted leading-[1.75]">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
};
