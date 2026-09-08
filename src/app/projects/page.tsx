import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/content/projects';
import { projectsPage } from '@/content/copy';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/utils/schema';

export const metadata: Metadata = {
  title: projectsPage.title,
  description: projectsPage.metaDescription,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: projectsPage.title,
    description: projectsPage.metaDescription,
    url: '/projects',
  },
};

export default function Projects() {
  return (
    <section className="grid gap-6 grid-cols-1">
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: projectsPage.title, path: '/projects' },
        ])}
      />

      <div>
        <h1 className="font-display text-title pb-2">{projectsPage.title}</h1>
        <p className="text-fg-muted leading-relaxed">{projectsPage.intro}</p>
      </div>

      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}
