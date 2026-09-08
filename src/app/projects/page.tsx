import { ProjectCard } from '@/components/project-card';
import { projects } from '@/content/projects';
import { projectsPage } from '@/content/copy';

export default function Projects() {
  return (
    <section className="grid gap-6 grid-cols-1">
      <div>
        <h1 className="text-2xl font-semibold pb-2">{projectsPage.title}</h1>
        <p className="text-slate-600 dark:text-slate-300">{projectsPage.intro}</p>
      </div>

      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}
