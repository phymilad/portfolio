import { notFound } from 'next/navigation';
import { ProjectVideo } from '@/components/project-video';
import { projects } from '@/content/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));
  if (!project) notFound();

  return <ProjectVideo project={project} />;
}
