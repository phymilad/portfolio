import { t, type Locale } from '@/i18n/dict';

export default function Contact({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="prose">
      <h1>{t('contact_title', locale)}</h1>
      <p>
        {t('contact_email', locale)}: <a href="mailto:you@example.com">you@example.com</a>
      </p>
    </section>
  );
}
