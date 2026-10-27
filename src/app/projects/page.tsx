import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
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
    <Container>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: projectsPage.title, path: '/projects' },
        ])}
      />

      <PageIntro eyebrow="Work" title={projectsPage.title}>
        {projectsPage.intro}
      </PageIntro>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {projects.map((p, index) => (
          <ProjectCard key={p.id} project={p} priority={index === 0} />
        ))}
      </section>
    </Container>
  );
}
