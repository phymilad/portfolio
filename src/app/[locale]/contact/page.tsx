import { t, type Locale } from '@/i18n/dict';

export default function Contact({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="flex flex-col gap-1.5">
      <h1>{t('contact_title', locale)}</h1>
      <p>
        {t('contact_email', locale)}: <a href="mailto:phy.milad@gmail.com">phy.milad@gmail.com</a>
      </p>
      <p>
        {t('contact_linkedin', locale)}: <a target='_blank' href="https://www.linkedin.com/in/phymilad/">linkedin.com/in/phymilad</a>
      </p>
    </section>
  );
}
