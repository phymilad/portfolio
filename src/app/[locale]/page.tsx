// src/app/[locale]/page.tsx (یا هرجا Home تعریف شده)
import Link from 'next/link';
import { t, tList, type Locale } from '@/i18n/dict';

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const base = `/${locale}`;

  return (
    <section className="prose max-w-none">
      {/* Title & Lead */}
      {/* <h1 className="mb-2">{t('home_title', locale)}</h1> */}
      <p>{t('home_lead', locale)}</p>

      {/* Bullets */}
      <ul className="mb-8">
        {tList('home_bullets', locale).map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {/* CTA box */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-5 dark:border-slate-700 dark:bg-slate-900/40">
        <h2 className="mt-0">{t('home_cta_title', locale)}</h2>
        <p className="mb-4">{t('home_cta_desc', locale)}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`${base}/projects`}
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {t('home_cta_projects', locale)}
          </Link>
          <Link
            href={`${base}/about`}
            className="inline-block rounded-lg border border-slate-300 px-4 py-2 transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
          >
            {t('home_cta_about', locale)}
          </Link>
        </div>
      </div>
    </section>
  );
}
