import { toEmbedUrl } from "@/utils/url";
import { Project } from "@/content/projects";
import { Card } from "@/components/ui/card";

export const ProjectVideo = ({ project }: { project: Project }) => {
  return (
    <Card as="article" className="not-prose">
      <h1 className="font-display text-title mb-4">{project.title}</h1>

      <div className="mb-4 space-y-2 text-fg-muted">
        {project.description.map((line, index) => (
          <p key={index} className="leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      <a
        href={project.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4 font-mono text-sm text-accent hover:text-accent-hover hover:underline"
      >
        Watch on YouTube
      </a>

      <div className="aspect-video w-full overflow-hidden rounded-xl border border-line">
        <iframe
          className="h-full w-full"
          src={toEmbedUrl(project.youtubeUrl)}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Card>
  );
};
