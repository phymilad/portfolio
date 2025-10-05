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
      <h1 className="text-2xl font-bold">Hi, I’m Milad</h1>
      <p className="text-lg">
        I build fast and scalable applications using modern web technologies.
      </p>

      {/* Experience highlights */}
      <h2 className="mt-6 text-xl font-semibold">Experience Highlights</h2>
      <ul className="space-y-3">
        <li>Led development of a Document Management System (DMS) at Danesh-Hamara.</li>
        <li>Built the front-end for <strong>M.car</strong> at Tafarda Startup Studio.</li>
        <li>Contributing to <strong>Rsoon</strong>, an investing consultant software (in progress).</li>
        <li>Deep experience with <strong>React/Next</strong>, Redux Toolkit, Material-UI, Git workflows.</li>
      </ul>
    </section>
    <section className="grid gap-6 grid-cols-1 mt-4">
      {createProjectsBasedOnLocale(locale).map((p) => (
        <ProjectCard key={p.title} project={p} locale={locale} />
      ))}
    </section>
    </>
  );
}
