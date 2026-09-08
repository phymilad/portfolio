import { ProjectCard } from '@/components/project-card';
import { projects } from '@/content/projects';
import { home, nav, site } from '@/content/copy';
import Link from 'next/link';

const cardClass =
  'rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 border border-gray-400 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp';

export default function Home() {
  return (
    <>
      <section className="prose max-w-none">
        <h1 className="text-3xl font-bold tracking-tight pb-6">
          {site.name} <span className="font-normal text-slate-500 dark:text-slate-400">— {site.role}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={cardClass}>
            <h2 className="text-xl font-semibold pb-2">{home.aboutTitle}</h2>
            <p className="text-lg">{home.intro}</p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold pb-2">{home.whatIDoTitle}</h2>
            <p>{home.whatIDo}</p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold pb-2">{home.experienceTitle}</h2>
            <ul className="list-disc px-5 space-y-2">
              {home.experience.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold pb-2">{home.howIWorkTitle}</h2>
            <p>{home.howIWork}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 grid-cols-1 mt-4">
        <h2 className="mt-6 text-xl font-semibold pb-2">
          <Link href="/projects" className="hover:underline">{nav.projects}</Link>
        </h2>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </>
  );
}
