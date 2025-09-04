// src/i18n/bidict.ts
export type Locale = 'en' | 'fa';

type Bi = { en: string; fa: string };
type BiList = { en: string[]; fa: string[] };

// the ONE object you asked for.
// strings use Bi; lists use BiList (for bullets, etc.)
export const dictionary = {
  brand: { en: 'Milad Mohammadi', fa: 'میلاد محمدی' } as Bi,
  nav_projects: { en: 'Projects', fa: 'پروژه‌ها' } as Bi,
  nav_blog: { en: 'Blog', fa: 'بلاگ' } as Bi,
  nav_about: { en: 'About', fa: 'درباره من' } as Bi,
  nav_contact: { en: 'Contact', fa: 'تماس' } as Bi,
  switch_locale: { en: 'فا', fa: 'EN' } as Bi,

  home_title: { en: 'Frontend Developer', fa: 'توسعه‌دهنده فرانت‌اند' } as Bi,
  home_lead: {
    en: 'I build fast, accessible web apps with React & Next.js.',
    fa: 'اپ‌های وب سریع و در دسترس با React و Next.js می‌سازم.',
  } as Bi,
  home_bullets: {
    en: ['Performance-focused (LCP, CLS, TTI)', 'Design systems & accessible UI', 'Maps, data viz, real-time UX'],
    fa: ['تمرکز بر عملکرد (LCP, CLS, TTI)', 'طراحی سیستم‌ها و UI قابل دسترس', 'نقشه‌ها، مصورسازی داده، تجربهٔ Real-time'],
  } as BiList,

  about_title: { en: 'About', fa: 'درباره من' } as Bi,
  about_body: {
    en: 'A short bio about my professional path.',
    fa: 'اینجا یک متن کوتاه درباره مسیر حرفه‌ای من می‌آید.',
  } as Bi,

  projects_title: { en: 'Projects', fa: 'پروژه‌ها' } as Bi,
  projects_empty: { en: 'Case studies coming soon…', fa: 'نمونه کارها به زودی…' } as Bi,

  contact_title: { en: 'Contact', fa: 'تماس' } as Bi,
  contact_email: { en: 'Email', fa: 'ایمیل' } as Bi,

  blog_title: { en: 'Blog', fa: 'بلاگ' } as Bi,
  blog_empty: { en: 'No posts yet.', fa: 'فعلاً نوشته‌ای نیست.' } as Bi,

  footer_text: {
    en: (y: number) => `© ${y} Milad Mohammadi`,
    fa: (y: number) => `© ${y} میلاد محمدی`,
  },
} as const;

// helpers to read values based on locale
export function t(key: keyof typeof dictionary, locale: Locale): string {
  const v = dictionary[key] as any;
  if (typeof v?.en === 'function') return v[locale](new Date().getFullYear());
  return v[locale] as string;
}

export function tList(key: keyof typeof dictionary, locale: Locale): string[] {
  const v = dictionary[key] as any;
  return (v?.[locale] as string[]) ?? [];
}

// utility
export const dirOf = (l: Locale) => (l === 'fa' ? 'rtl' : 'ltr');
