import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { Card } from '@/components/ui/card';
import { projects } from '@/content/projects';
import { home, nav, site } from '@/content/copy';

export default function Home() {
  return (
    <>
      <section>
        <h1 className="font-display text-display pb-3">{site.name}</h1>
        <p className="font-mono text-sm uppercase tracking-widest text-accent pb-10">
          {site.role}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card interactive>
            <h2 className="font-display text-heading pb-2">{home.aboutTitle}</h2>
            <p className="text-fg-muted leading-relaxed">{home.intro}</p>
          </Card>

          <Card interactive>
            <h2 className="font-display text-heading pb-2">{home.whatIDoTitle}</h2>
            <p className="text-fg-muted leading-relaxed">{home.whatIDo}</p>
          </Card>

          <Card interactive>
            <h2 className="font-display text-heading pb-2">{home.experienceTitle}</h2>
            <ul className="list-disc ps-5 space-y-2 text-fg-muted leading-relaxed">
              {home.experience.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>

          <Card interactive>
            <h2 className="font-display text-heading pb-2">{home.howIWorkTitle}</h2>
            <p className="text-fg-muted leading-relaxed">{home.howIWork}</p>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 grid-cols-1 mt-14">
        <h2 className="font-display text-title">
          <Link href="/projects" className="hover:text-accent transition-colors">
            {nav.projects}
          </Link>
        </h2>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </>
  );
}
