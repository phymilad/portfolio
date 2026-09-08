import { ProjectVideo } from "@/components/project-video";
import { Locale } from "@/i18n/dict";
import { createProjectsBasedOnLocale } from "@/utils/functions";

export default async function ProjectDetails({ params }: { params: Promise<{ locale: Locale, id: string }> }) {
    const { locale, id } = await params;

    const project = createProjectsBasedOnLocale(locale).find(item => item.id === Number(id));

    return project ? <ProjectVideo project={project} /> : null;
}