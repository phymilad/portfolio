import { t, type Locale } from '@/i18n/dict';

export default function About({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <article className="prose">
      <h1>{t('about_title', locale)}</h1>
      <p>{t('about_body', locale)}</p>
    </article>
  );
}