import { toEmbedUrl } from "@/utils/functions"
import { Project } from "../project-card/types"

export const ProjectVideo = ({project} : {project: Project}) => {
    return (
        <article className="not-prose">
            {/* Title + Description */}
            <h2 className="mb-6 text-2xl font-bold">
            {project.title}
            </h2>
            <div className="mb-4">
            {project.description.map((line, index) => {
                return <p key={index} className="mb-1 text-base leading-relaxed">
                {line}
                </p>
            })}
            </div>
            <a href={toEmbedUrl(project.youtubeUrl)} target='_blank'>
            {toEmbedUrl(project.youtubeUrl)}
            </a>
            {/* Video */}
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg mt-2">
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
    )
}