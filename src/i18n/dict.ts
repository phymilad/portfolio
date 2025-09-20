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
    en: [
      'Led development of a Document Management System (DMS) at Danesh-Hamara from zero to a usable product.',
      'Front-end for M.car at Tafarda Startup Studio—now actively used by experts, clients, and admins.',
      'Contributing to Rsoon, an investing consultant software (in progress).',
      'Deep experience with React/Next, state management via Redux Toolkit, UI with Material-UI, and team workflows with Git.',
      'Open to joining innovative projects and collaborative teams.'
    ],
    fa: [
      'رهبری توسعهٔ یک سامانه مدیریت اسناد (DMS) در دانش‌همارا از صفر تا محصول قابل استفاده.',
      'فرانت‌اند M.car در استودیو تافردا: نرم‌افزار درخواست خدمات خودرو؛ اکنون در حال استفاده توسط کارشناسان، مشتریان و ادمین‌ها.',
      'همکاری در توسعهٔ Rsoon: نرم‌افزار مشاورهٔ سرمایه‌گذاری (در حال توسعه).',
      'تسلط به React/Next، مدیریت حالت با Redux Toolkit، UI با Material-UI و گردش‌کار تیمی با Git.',
      'آمادهٔ همکاری روی پروژه‌های نوآورانه و تیم‌های پویا.'
    ],
  } as BiList,
  home_cta_title: { en: 'Want to see more?', fa: 'دوست داری بیشتر بدونی؟' } as Bi,
  home_cta_desc: { 
    en: 'Check the About page for my background and approach, and the Projects page for real-world work.', 
    fa: 'توی «دربارهٔ من» مسیر حرفه‌ای و رویکرد کاری‌ام رو توضیح دادم و در «پروژه‌ها» نمونه‌کارهای واقعی را می‌بینی.' 
  } as Bi,
  home_cta_projects: { en: 'View Projects', fa: 'مشاهدهٔ پروژه‌ها' } as Bi,
  home_cta_about: { en: 'About Me', fa: 'آشنایی با من' } as Bi,
  about_title: { en: 'About', fa: 'درباره من' } as Bi,
  about_body: {
    en: 'A short bio about my professional path.',
    fa: 'اینجا یک متن کوتاه درباره مسیر حرفه‌ای من می‌آید.',
  } as Bi,

  projects_title: { en: 'Projects', fa: 'پروژه‌ها' } as Bi,
  projects_empty: { en: 'Case studies coming soon…', fa: 'نمونه کارها به زودی…' } as Bi,
  
  project_mdotcar_admin_panel_title: {
    en: 'Mdotcar - Admin Panel',
    fa: 'امداتکار - ادمین پنل',
  },

  project_mdotcar_admin_panel_description: {
    en:[ 
      'In this video, we take you inside the Admin Panel of mdotcar, the central hub where everything comes together. The admin panel is designed to give full control and visibility into how the platform operates, ensuring a smooth experience for both clients and experts.',
      '✨ What you’ll see in this video:',
      'Dashboard overview with key insights',
      'Managing client and expert accounts',
      'Service requests monitoring and tracking',
      'Approvals, reviews, and dispute handling',
      'Analytics and reporting for better decision-making',
      'Settings & customization options and ...',
      'With the admin panel, Mdotcar ensures that the entire ecosystem runs efficiently — keeping clients satisfied, experts supported, and operations streamlined.',
    ],
    fa: [
      `در این ویدئو شما را به داخل پنل مدیریت Mdotcar می‌بریم؛ مرکز اصلی‌ای که همه چیز در آن به هم متصل می‌شود.
      پنل مدیریت به گونه‌ای طراحی شده است که کنترل و دید کاملی بر نحوه عملکرد پلتفرم ارائه دهد و تجربه‌ای روان و بی‌دغدغه را هم برای مشتریان و هم برای کارشناسان تضمین کند.`,
      `✨ آنچه در این ویدئو خواهید دید:`,
      `نمای کلی داشبورد همراه با بینش‌های کلیدی`,
      `مدیریت حساب‌های مشتریان و کارشناسان`,
      `پایش و ردیابی درخواست‌های خدمات`,
      `رسیدگی به تأییدها، بازبینی‌ها و اختلاف‌ها`,
      `تحلیل‌ها و گزارش‌گیری برای تصمیم‌گیری بهتر`,
      `تنظیمات و گزینه‌های سفارشی‌سازی و ...`,
      `با استفاده از پنل مدیریت، Mdotcar اطمینان می‌دهد که کل اکوسیستم به‌صورت کارآمد عمل کند — مشتریان راضی بمانند، کارشناسان پشتیبانی شوند و عملیات به شکلی روان پیش برود.`,
    ],
  } as BiList,

  project_mdotcar_client_and_expert_title: {
    en: 'Mdotcar – Client & Expert Web App Demo | Real-Time Roadside Assistance',
    fa: 'امداتکار – دموی وب‌اپلیکیشن مشتری و کارشناس | امداد جاده‌ای در لحظه',
  },
  project_mdotcar_client_and_expert_description: {
    en: [
      '🚗 Emdatkar is a smart roadside assistance web application that connects clients with experts in real time. In this video, we demonstrate the complete flow of a service request — from the client side to the expert side — showing how Emdatkar makes emergency support seamless and efficient.',
      '✨ What you’ll see in this video:',
      'How a client creates a roadside assistance request', 
      'Real-time updates powered by web sockets',
      'Expert workflow: receiving, managing, and completing the request',
      'Full demonstration of both client web app and expert web app', 
      'Smooth interaction between client and expert until the service is delivered',
      'With Emdatkar, clients get quick, reliable help on the road, while experts can manage requests with an intuitive, real-time platform.',
    ],
    fa: [
      '🚗 امدادکار یک وب‌اپلیکیشن هوشمند امداد جاده‌ای است که مشتریان را در لحظه به کارشناسان متصل می‌کند. در این ویدئو، کل فرآیند یک درخواست خدمات — از سمت مشتری تا سمت کارشناس — نمایش داده می‌شود و نشان می‌دهیم که چگونه امدادکار پشتیبانی اضطراری را روان و کارآمد می‌سازد.',
      '✨ آنچه در این ویدئو خواهید دید:',
      'نحوه ایجاد درخواست امداد جاده‌ای توسط مشتری',
      'به‌روزرسانی‌های لحظه‌ای با استفاده از وب‌سوکت‌ها',
      'روند کاری کارشناس: دریافت، مدیریت و تکمیل درخواست',
      'نمایش کامل وب‌اپلیکیشن مشتری و وب‌اپلیکیشن کارشناس',
      'تعامل روان میان مشتری و کارشناس تا تحویل خدمات',
      'با امدادکار، مشتریان به‌سرعت و با اطمینان در جاده کمک دریافت می‌کنند، در حالی که کارشناسان می‌توانند درخواست‌ها را از طریق یک پلتفرم شهودی و بلادرنگ مدیریت کنند.',
    ],
  } as BiList,
  
  project_rsoon_title: {
    en: 'Arson – Smart Investment Consulting Web Application | Grow Your Wealth with Confidence',
    fa: 'آرسون – وب‌اپلیکیشن هوشمند مشاوره سرمایه‌گذاری | با اطمینان سرمایه‌تان را رشد دهید',
  },
  project_rsoon_description: {
    en: [
      '💡 Arson is a modern web application for investment consulting, designed to help individuals and businesses make smarter financial decisions. With powerful tools, expert guidance, and real-time insights, Arson simplifies the investment process and empowers users to grow their wealth with confidence.',
      '✨ Key Features of Arson: Personalized investment consulting tailored to your goals',
      'Real-time market insights and portfolio tracking',
      'Easy-to-use dashboard for managing investments',
      'Secure, reliable, and built for both beginners & professionals',
      'Expert support for smarter decision-making',
      'Whether you’re just starting your investment journey or looking to optimize your portfolio, Arson is your trusted partner for financial growth.'
    ],
    fa: [
      '💡 آرسون یک وب‌اپلیکیشن مدرن برای مشاوره سرمایه‌گذاری است که به افراد و کسب‌وکارها کمک می‌کند تصمیمات مالی هوشمندانه‌تری بگیرند. با ابزارهای قدرتمند، راهنمایی کارشناسان و بینش‌های لحظه‌ای، آرسون فرآیند سرمایه‌گذاری را ساده کرده و به کاربران این امکان را می‌دهد که با اطمینان ثروت خود را رشد دهند.',
      '✨ ویژگی‌های کلیدی آرسون:',
      'مشاوره سرمایه‌گذاری شخصی‌سازی‌شده بر اساس اهداف شما',
      'بینش‌های لحظه‌ای بازار و پایش پرتفوی سرمایه‌گذاری',
      'داشبورد کاربرپسند برای مدیریت سرمایه‌گذاری‌ها',
      'امن، قابل‌اعتماد و مناسب برای تازه‌کارها و حرفه‌ای‌ها',
      'پشتیبانی کارشناسان برای تصمیم‌گیری‌های هوشمندانه‌تر',
      'چه در ابتدای مسیر سرمایه‌گذاری باشید و چه به دنبال بهینه‌سازی پرتفوی خود، آرسون شریک مطمئن شما برای رشد مالی است.'
    ],
  } as BiList,


  contact_title: { en: 'Contact me', fa: 'تماس با من' } as Bi,
  contact_email: { en: 'Email', fa: 'ایمیل' } as Bi,
  contact_linkedin: { en: 'Linkedin', fa: 'لینکدین' } as Bi,

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
