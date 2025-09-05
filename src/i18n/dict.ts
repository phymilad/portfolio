// src/i18n/bidict.ts
export type Locale = 'en' | 'fa';

type Bi = { en: string; fa: string };
type BiList = { en: string[]; fa: string[] };

// the ONE object you asked for.
// strings use Bi; lists use BiList (for bullets, etc.)
export const dictionary = {
  brand: { en: 'Milad Mohammadi - Frontend developer', fa: 'میلاد محمدی - توسعه دهنده وب' } as Bi,
  nav_projects: { en: 'Projects', fa: 'پروژه‌ها' } as Bi,
  nav_blog: { en: 'Blog', fa: 'بلاگ' } as Bi,
  nav_about: { en: 'About', fa: 'درباره من' } as Bi,
  nav_contact: { en: 'Contact me', fa: ' تماس با من' } as Bi,
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
  about_me_first_paragraph: {
    en: "Hi there! 👋 I’m Milad, a passionate Front-End Developer who has been exploring the world of coding since 2020. From day one, I’ve embraced this journey with dedication, curiosity, and the belief that growth never stops.",
    fa: "سلام! 👋 من میلاد هستم، یک توسعه‌دهنده فرانت‌اند که از سال ۲۰۲۰ وارد دنیای برنامه‌نویسی شدم و از همون ابتدا با اشتیاق، پشتکار و باور به یادگیری مداوم این مسیر رو ادامه دادم",
  },
  about_me_second_paragraph: {
    en: "My expertise is in developing modern web applications, mainly on the front-end with React.js and Next.js. I love creating clean, responsive, and user-friendly interfaces that bring ideas to life. At the same time, I’ve always been curious about the back-end — which led me to work with Express and NestJS, building personal full-stack projects and strengthening my understanding of the bigger picture. To support these projects, I’ve also worked with MySQL and PostgreSQL databases.",
    fa: "تخصص من توسعه وب‌اپلیکیشن‌های مدرن هست که بیشتر در بخش فرانت‌اند با React.js و Next.js انجامشون می‌دم. من عاشق خلق رابط‌های کاربری تمیز، واکنش‌گرا و کاربرپسند هستم که ایده‌ها رو به تجربه‌های واقعی تبدیل می‌کنن. در عین حال، همیشه به توسعه سمت بک علاقه‌مند بودم؛ همین علاقه باعث شد که با Express و NestJS کار کنم و چندین پروژه شخصی رو به صورت فول‌استک پیاده‌سازی کنم. برای پیشبرد این پروژه‌ها هم از دیتابیس‌های MySQL و PostgreSQL استفاده کردم.",
  },
  about_me_third_paragraph: {
    en: "Over the years, I’ve contributed to diverse projects — from building a Document Management System and Electronic Library at Danesh Hamara, to developing M.CAR, a platform that connects clients with mechanics, at TaFarda Studio. These experiences have sharpened both my technical expertise and my ability to deliver practical solutions that solve real problems. But for me, programming isn’t just about writing code. 🚀 It’s about crafting meaningful digital experiences that improve people’s lives. My colleagues often describe me as patient, reliable, and collaborative. I truly enjoy building positive team dynamics, continuously learning, and sharing knowledge with others.",
    fa: "تجربه‌هام شامل پروژه‌های متنوعی هست؛ از توسعه یک سیستم مدیریت اسناد و کتابخانه الکترونیکی در دانش‌هم‌آرا گرفته تا ساخت پلتفرم M.CAR در TaFarda Studio که ارتباط بین مشتری‌ها و مکانیک‌ها رو ساده‌تر و کارآمدتر کرده. این پروژه‌ها به من کمک کردن هم در زمینه فنی عمیق‌تر بشم و هم مهارت حل مسئله‌هام رو تقویت کنم. اما برای من، برنامه‌نویسی فقط کدنویسی نیست. 🚀 اینه که بشه تجربه‌های دیجیتال معناداری خلق کرد که واقعاً به زندگی آدم‌ها ارزش اضافه کنه. همکارانم منو فردی صبور، قابل‌اعتماد و اهل همکاری می‌شناسن. چیزی که همیشه برام مهمه، ایجاد فضای کاری مثبت، یادگیری مداوم و به اشتراک گذاشتن دانسته‌ها با دیگرانه.",
  },
  about_me_forth_paragraph: {
    en: "Interestingly, my academic background is in Neuroscience (Optogenetics), where I earned my Master’s degree. Before stepping into software development, I worked on intricate research projects — experiences that taught me analytical thinking, attention to detail, and creative problem-solving.",
    fa: "پیش‌زمینه علمی من هم جالبه! 🎓 من کارشناسی‌ارشد نوروساینس (اپتوژنتیک) دارم و قبل از ورود به دنیای نرم‌افزار، روی پروژه‌های تحقیقاتی پیچیده‌ای کار کردم. اون تجربه‌ها باعث شدن که مهارت‌های تفکر تحلیلی، دقت به جزئیات و حل خلاقانه مسئله در من تقویت بشه.",
  },
  about_me_fifth_paragraph: {
    en: "I’m always eager to learn, grow, and take on new challenges in the ever-evolving tech landscape. Whether working on large-scale projects or in small, agile teams, what excites me most is turning ideas into real, impactful products through code. If you’re looking for a developer who combines strong technical skills with a positive, team-oriented attitude, I’d be thrilled to connect and explore how we can build something amazing together. 🌱",
    fa: "من همیشه دنبال یادگیری و تجربه‌های تازه در دنیای تکنولوژی هستم. چه روی پروژه‌های بزرگ و چالش‌برانگیز کار کنم، چه در تیم‌های کوچک و صمیمی، چیزی که بیش از همه منو هیجان‌زده می‌کنه اینه که بتونم با کد، ایده‌ها رو به محصولات واقعی و تأثیرگذار تبدیل کنم. اگر به دنبال توسعه‌دهنده‌ای هستید که هم از نظر فنی توانمند باشه و هم با انرژی مثبت و روحیه تیمی قوی وارد پروژه بشه، خوشحال می‌شم بیشتر با هم آشنا بشیم. 🌱",
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
