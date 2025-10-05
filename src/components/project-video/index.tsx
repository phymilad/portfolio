import { toEmbedUrl } from "@/utils/functions";
import { Project } from "../project-card/types";

export const ProjectVideo = ({ project }: { project: Project }) => {
  return (
    <article className="not-prose rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out transform  motion-safe:animate-fadeInUp">

      {/* Title */}
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {project.title}
      </h2>

      {/* Description */}
      <div className="mb-4 space-y-2 text-slate-700 dark:text-slate-300">
        {project.description.map((line, index) => (
          <p key={index} className="text-base leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Link to video */}
      <a 
        href={toEmbedUrl(project.youtubeUrl)} 
        target="_blank" 
        className="inline-block mb-4 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
      >
        Watch on YouTube
      </a>

      {/* Video iframe */}
      <div className="aspect-video w-full overflow-hidden rounded-xl shadow-md">
        <iframe
          className="h-full w-full"
          src={toEmbedUrl(project.youtubeUrl)}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </article>
  );
};
