// src/app/[locale]/page.tsx (یا هرجا Home تعریف شده)
import { type Locale } from '@/i18n/dict';
import { ProjectCard } from '@/components/project-card';
import { createProjectsBasedOnLocale } from '@/utils/functions';

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const base = `/${locale}`;

  return (<>
    <section className="prose max-w-none">
      {/* Intro */}
      <p className="text-lg pb-2">
        I am a Software Developer with over 5 years of experience
        building fast, scalable, and maintainable web applications. I love turning
        complex ideas into clean, efficient, and impactful digital products.
      </p>

      {/* What I Do */}
      <h2 className="mt-6 text-xl font-semibold pb-2">What I Do</h2>
      <p>
        I specialize in React.js, Next.js,{" "}
        TypeScript, and NestJS, crafting
        full-stack solutions that balance great user experience with solid
        architecture. My focus is always on building systems that scale, perform,
        and stand the test of time.
      </p>

      {/* Experience Highlights */}
      <h2 className="mt-6 text-xl font-semibold pb-2">Experience Highlights</h2>
      <ul className="space-y-3">
        <li>
          Build the front-end for Mdotcar, an automotive platform
          handling over 30,000+ successful services.
        </li>
        <li>
          Contribute to Rsoon, an investing consultant
          platform focused on smart financial growth.
        </li>
        <li>
          Develop an enterprise-scale DMS at Danesh-Hamara, built for large organizations.
        </li>
        <li>
          Deep hands-on experience with React.js/Next.js, TailwindCSS, responsive web design and clean Git workflows.
        </li>
      </ul>

      {/* Philosophy */}
      <h2 className="mt-6 text-xl font-semibold pb-2">How I Work</h2>
      <p>
        I care about clean architecture,
        collaboration, and continuous improvement.
        I enjoy building products that not only work beautifully but also deliver
        measurable business value. Whether I’m working with a startup or a large
        organization, I aim to create systems that feel effortless yet powerful.
      </p>
    </section>

    <section className="grid gap-6 grid-cols-1 mt-4">
      {createProjectsBasedOnLocale(locale).map((p) => (
        <ProjectCard key={p.title} project={p} locale={locale} />
      ))}
    </section>
    </>
  );
}
