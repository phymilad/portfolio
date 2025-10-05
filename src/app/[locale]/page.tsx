// src/app/[locale]/page.tsx (یا هرجا Home تعریف شده)
import { t, tList, type Locale } from '@/i18n/dict';
import { ProjectCard } from '@/components/project-card';
import { createProjectsBasedOnLocale } from '@/utils/functions';

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const base = `/${locale}`;

  return (<>
    <section className="prose max-w-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Intro Card */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 border border-gray-400 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp">
          <h2 className="text-xl font-semibold pb-2">{t('nav_about', locale)}</h2>
          <p className="text-lg">{t('intro', locale)}</p>
        </div>

        {/* What I Do Card */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 border border-gray-400 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp">
          <h2 className="text-xl font-semibold pb-2">{t('whatIDo', locale)}</h2>
          <p>{t('whatIDoDescription', locale)}</p>
        </div>

        {/* Experience Highlights Card */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 border border-gray-400 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp">
          <h2 className="text-xl font-semibold pb-2">{t('experiencehighlight', locale)}</h2>
          <ul className="list-disc px-5 space-y-2">
            {tList('experienceHighlighPoints', locale).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Philosophy / How I Work Card */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 border border-gray-400 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp">
          <h2 className="text-xl font-semibold pb-2">{t('howIWork', locale)}</h2>
          <p>{t('howIWorkDescription', locale)}</p>
        </div>

      </div>
    </section>






    <section className="grid gap-6 grid-cols-1 mt-4">
      <h2 className="mt-6 text-xl font-semibold pb-2">{t('nav_projects', locale)}</h2>
      {createProjectsBasedOnLocale(locale).map((p) => (
        <ProjectCard key={p.title} project={p} locale={locale} />
      ))}
    </section>
    </>
  );
}
