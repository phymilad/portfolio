import { ProjectVideo } from "@/components/project-video";
import { Locale } from "@/i18n/dict";
import { createProjectsBasedOnLocale } from "@/utils/functions";

export default function ProjectDetails({ params }: { params: { locale: Locale, id: string } }) {
    
    const project = createProjectsBasedOnLocale(params.locale).find(item => item.id === Number(params.id));
    
    return project ? <ProjectVideo project={project} /> : null;
}