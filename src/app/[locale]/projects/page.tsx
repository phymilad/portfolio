import { t, type Locale } from '@/i18n/dict';

export default function Projects({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="prose">
      <h1>{t('projects_title', locale)}</h1>
      <p>{t('projects_empty', locale)}</p>
    </section>
  );
}
