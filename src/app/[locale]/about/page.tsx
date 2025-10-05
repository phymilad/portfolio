import { t, type Locale } from '@/i18n/dict';

export default function About({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <></>
    // <article className="prose">
    //   <h1>{t('about_title', locale)}</h1>
    //   <div className='flex flex-col gap-4'>
    //     <p>{t('about_me_first_paragraph', locale)}</p>
    //     <p>{t('about_me_second_paragraph', locale)}</p>
    //     <p>{t('about_me_third_paragraph', locale)}</p>
    //     <p>{t('about_me_forth_paragraph', locale)}</p>
    //     <p>{t('about_me_fifth_paragraph', locale)}</p>
    //   </div>
    // </article>
  );
}