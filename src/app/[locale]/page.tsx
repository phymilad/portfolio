import { t, tList, type Locale } from '@/i18n/dict';

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="prose">
      <h1 className="mb-2">{t('home_title', locale)}</h1>
      <p className="lead">{t('home_lead', locale)}</p>
      <ul>
        {tList('home_bullets', locale).map((b) => <li key={b}>{b}</li>)}
      </ul>
    </section>
  );
}
