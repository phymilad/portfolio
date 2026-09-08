import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectVideo } from '@/components/project-video';
import { projects } from '@/content/projects';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, videoSchema } from '@/utils/schema';
import { projectsPage } from '@/content/copy';

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

const findProject = (id: string) => projects.find((item) => item.id === Number(id));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);
  if (!project) return {};

  const url = `/projects/${project.id}`;
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: project.title,
      description: project.shortDescription,
      url,
      images: project.image.desktop ? [{ url: project.image.desktop }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: project.image.desktop ? [project.image.desktop] : undefined,
    },
  };
}

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const project = findProject(id);
  if (!project) notFound();

  return (
    <>
      <JsonLd schema={videoSchema(project)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: projectsPage.title, path: '/projects' },
          { name: project.title, path: `/projects/${project.id}` },
        ])}
      />
      <ProjectVideo project={project} />
    </>
  );
}
