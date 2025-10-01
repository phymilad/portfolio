// src/i18n/bidict.ts
export type Locale = 'en' | 'fa' | 'de' | 'nl';

type Bi = { en: string; fa: string, de: string, nl: string };
type BiList = { en: string[]; fa: string[]; de: string[]; nl: string[] };

// the ONE object you asked for.
// strings use Bi; lists use BiList (for bullets, etc.)
export const dictionary = {
  brand: { 
    en: 'Milad Mohammadi - Software Developer', 
    fa: 'میلاد محمدی - توسعه دهنده نرم‌افزار', 
    de: 'Milad Mohammadi - Softwareentwickler', 
    nl: 'Milad Mohammadi - Softwareontwikkelaar' 
  } as Bi,

  nav_projects: { 
    en: 'Projects', 
    fa: 'پروژه‌ها', 
    de: 'Projekte', 
    nl: 'Projecten' 
  } as Bi,

  nav_blog: { 
    en: 'Blog', 
    fa: 'بلاگ', 
    de: 'Blog', 
    nl: 'Blog' 
  } as Bi,

  nav_about: { 
    en: 'About', 
    fa: 'درباره من', 
    de: 'Über mich', 
    nl: 'Over mij' 
  } as Bi,

  nav_contact: { 
    en: 'Contact me', 
    fa: 'تماس با من', 
    de: 'Kontaktiere mich', 
    nl: 'Neem contact op' 
  } as Bi,

  switch_locale: { 
    en: 'فا', 
    fa: 'EN', 
    de: 'EN', 
    nl: 'DE' 
  } as Bi,

  home_title: { 
    en: 'Software Developer', 
    fa: 'توسعه‌دهنده نرم‌افزار', 
    de: 'Softwareentwickler', 
    nl: 'Softwareontwikkelaar' 
  } as Bi,

  home_lead: { 
    en: 'I build fast and scalable applications using technologies like TypeScript, Next.js, React.js, and Nest.js.',
    fa: 'با استفاده از تکنولوژی‌هایی مثل TypeScript، Next.js، React.js و Nest.js اپلیکیشن‌های سریع و توسعه‌پذیر می‌سازم.',
    de: 'Ich entwickle schnelle und skalierbare Anwendungen mit Technologien wie TypeScript, Next.js, React.js und Nest.js.',
    nl: 'Ik bouw snelle en schaalbare applicaties met technologieën zoals TypeScript, Next.js, React.js en Nest.js.'
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
    de: [
      'Leitung der Entwicklung eines Dokumentenmanagementsystems (DMS) bei Danesh-Hamara von Grund auf bis hin zu einem nutzbaren Produkt.',
      'Frontend für M.car im Tafarda Startup Studio—jetzt aktiv von Experten, Kunden und Administratoren genutzt.',
      'Mitwirkung an Rsoon, einer Investitionsberatungssoftware (in Arbeit).',
      'Tiefgehende Erfahrung mit React/Next, Zustandsverwaltung mit Redux Toolkit, UI mit Material-UI und Teamarbeit mit Git.',
      'Offen für die Teilnahme an innovativen Projekten und kollaborativen Teams.'
    ],
    nl: [
      'Leidde de ontwikkeling van een Document Management System (DMS) bij Danesh-Hamara van nul tot een bruikbaar product.',
      'Frontend voor M.car bij Tafarda Startup Studio—nu actief gebruikt door experts, klanten en beheerders.',
      'Bijdragen aan Rsoon, een investeringsadviessoftware (in ontwikkeling).',
      'Diepe ervaring met React/Next, state management via Redux Toolkit, UI met Material-UI, en teamworkflows met Git.',
      'Open voor het deelnemen aan innovatieve projecten en samenwerkende teams.'
    ]
  } as BiList,

  home_cta_title: { 
    en: 'Want to see more?', 
    fa: 'دوست داری بیشتر بدونی؟', 
    de: 'Möchtest du mehr sehen?', 
    nl: 'Wil je meer zien?' 
  } as Bi,

  home_cta_desc: { 
    en: 'Check the About page for my background and approach, and the Projects page for real-world work.', 
    fa: 'توی «دربارهٔ من» مسیر حرفه‌ای و رویکرد کاری‌ام رو توضیح دادم و در «پروژه‌ها» نمونه‌کارهای واقعی را می‌بینی.', 
    de: 'Sieh dir die Seite „Über mich“ für meinen Hintergrund und Ansatz an und die Seite „Projekte“ für praktische Arbeiten.',
    nl: 'Bekijk de pagina „Over mij“ voor mijn achtergrond en aanpak, en de pagina „Projecten“ voor werk in de praktijk.'
  } as Bi,

  home_cta_projects: { 
    en: 'View Projects', 
    fa: 'مشاهدهٔ پروژه‌ها', 
    de: 'Projekte ansehen', 
    nl: 'Bekijk projecten' 
  } as Bi,

  home_cta_about: { 
    en: 'About Me', 
    fa: 'آشنایی با من', 
    de: 'Über mich', 
    nl: 'Over mij' 
  } as Bi,

  about_title: { 
    en: 'About', 
    fa: 'درباره من', 
    de: 'Über mich', 
    nl: 'Over mij' 
  } as Bi,

  about_body: { 
    en: 'A short bio about my professional path.', 
    fa: 'اینجا یک متن کوتاه درباره مسیر حرفه‌ای من می‌آید.', 
    de: 'Eine kurze Biografie über meinen beruflichen Werdegang.', 
    nl: 'Een korte bio over mijn professionele pad.' 
  } as Bi,

  projects_title: { 
    en: 'Projects', 
    fa: 'پروژه‌ها', 
    de: 'Projekte', 
    nl: 'Projecten' 
  } as Bi,

  projects_empty: { 
    en: 'Case studies coming soon…', 
    fa: 'نمونه کارها به زودی…', 
    de: 'Fallstudien kommen bald…', 
    nl: 'Case study’s komen binnenkort...' 
  } as Bi,

  project_mdotcar_admin_panel_title: {
    en: 'Mdotcar - Admin Panel',
    fa: 'امداتکار - ادمین پنل',
    de: 'Mdotcar - Admin Panel',
    nl: 'Mdotcar - Admin Paneel'
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
    de: [
      'In diesem Video nehmen wir dich mit in das Admin Panel von mdotcar, dem zentralen Hub, in dem alles zusammenkommt. Das Admin Panel wurde entwickelt, um vollständige Kontrolle und Transparenz darüber zu bieten, wie die Plattform funktioniert und gleichzeitig ein reibungsloses Erlebnis für Kunden und Experten zu gewährleisten.',
      '✨ Was du in diesem Video sehen wirst:',
      'Dashboard-Überblick mit wichtigen Erkenntnissen',
      'Verwaltung von Kunden- und Expertenkonten',
      'Überwachung und Nachverfolgung von Serviceanfragen',
      'Genehmigungen, Bewertungen und Konfliktlösung',
      'Analyse und Reporting für bessere Entscheidungen',
      'Einstellungen & Anpassungsoptionen und ...',
      'Mit dem Admin Panel stellt Mdotcar sicher, dass das gesamte Ökosystem effizient läuft – Kunden zufrieden, Experten unterstützt und der Betrieb reibungslos.',
    ],
    nl: [
      'In deze video nemen we je mee naar het Admin Panel van mdotcar, het centrale punt waar alles samenkomt. Het admin-paneel is ontworpen om volledige controle en inzicht te geven in hoe het platform werkt, en tegelijkertijd een soepelere ervaring voor zowel klanten als experts te waarborgen.',
      '✨ Wat je in deze video zult zien:',
      'Dashboard-overzicht met belangrijke inzichten',
      'Beheer van klant- en expertaccounts',
      'Monitoring en tracking van serviceaanvragen',
      'Goedkeuringen, beoordelingen en geschilbehandeling',
      'Analyse en rapportage voor betere besluitvorming',
      'Instellingen & aanpassingsopties en ...',
      'Met het admin-paneel zorgt Mdotcar ervoor dat het hele ecosysteem efficiënt werkt — klanten tevreden, experts ondersteund en operaties gestroomlijnd.',
    ]
  } as BiList,

  project_mdotcar_client_and_expert_title: {
    en: 'Mdotcar – Client & Expert Web App Demo | Real-Time Roadside Assistance',
    fa: 'امداتکار – دموی وب‌اپلیکیشن مشتری و کارشناس | امداد جاده‌ای در لحظه',
    de: 'Mdotcar – Client & Expert Web App Demo | Echtzeit Pechhulp',
    nl: 'Mdotcar – Demo Web App voor Klanten en Experts | Echt Tijdige Pechhulp',
  },

  project_mdotcar_client_and_expert_description: {
    en: [
      '🚗 Mdotcar is a smart roadside assistance web application that connects clients with experts in real time. In this video, we demonstrate the complete flow of a service request — from the client side to the expert side — showing how Mdotcar makes emergency support seamless and efficient.',
      '✨ What you’ll see in this video:',
      'How a client creates a roadside assistance request', 
      'Real-time updates powered by web sockets',
      'Expert workflow: receiving, managing, and completing the request',
      'Full demonstration of both client web app and expert web app', 
      'Smooth interaction between client and expert until the service is delivered',
      'With Mdotcar, clients get quick, reliable help on the road, while experts can manage requests with an intuitive, real-time platform.',
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
    de: [
      '🚗 Mdotcar ist eine intelligente Webanwendung für Pannenhilfe, die Kunden in Echtzeit mit Experten verbindet. In diesem Video zeigen wir den gesamten Ablauf einer Serviceanforderung — vom Kunden bis zum Experten — und demonstrieren, wie Mdotcar die Notfallhilfe nahtlos und effizient gestaltet.',
      '✨ Was du in diesem Video sehen wirst:',
      'Wie ein Kunde eine Pannenhilfeanfrage erstellt',
      'Echtzeit-Updates, die durch Websockets unterstützt werden',
      'Experten-Workflow: Empfang, Verwaltung und Erledigung der Anfrage',
      'Vollständige Demonstration der Webanwendung für Kunden und Experten',
      'Reibungslose Interaktion zwischen Kunde und Experten bis zur Lieferung des Services',
      'Mit Mdotcar erhalten Kunden schnelle, zuverlässige Hilfe auf der Straße, während Experten Anfragen über eine intuitive, Echtzeit-Plattform verwalten können.',
    ],
    nl: [
      '🚗 Mdotcar is een slimme webapplicatie voor pechhulp die klanten in realtime verbindt met experts. In deze video demonstreren we de complete stroom van een service-aanvraag — van de klantkant tot de expertkant — en laten we zien hoe Mdotcar noodhulp naadloos en efficiënt maakt.',
      '✨ Wat je in deze video zult zien:',
      'Hoe een klant een pechhulpaanvraag maakt',
      'Echt-time updates aangedreven door web sockets',
      'Expert workflow: ontvangen, beheren en voltooien van de aanvraag',
      'Volledige demonstratie van zowel de klant web-app als de expert web-app',
      'Vlotte interactie tussen klant en expert totdat de service wordt geleverd',
      'Met Mdotcar krijgen klanten snel, betrouwbare hulp op de weg, terwijl experts verzoeken kunnen beheren met een intuïtief, realtime platform.',
    ]
  } as BiList,

  project_rsoon_title: {
    en: 'Arson – Smart Investment Consulting Web Application | Grow Your Wealth with Confidence',
    fa: 'آرسون – وب‌اپلیکیشن هوشمند مشاوره سرمایه‌گذاری | با اطمینان سرمایه‌تان را رشد دهید',
    de: 'Arson – Smart Investment Consulting Web Application | Wachstum Ihres Vermögens mit Vertrauen',
    nl: 'Arson – Slimme Investering Advies Web Applicatie | Groei je Vermogen met Vertrouwen',
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
    de: [
      '💡 Arson ist eine moderne Webanwendung für Investitionsberatung, die darauf ausgelegt ist, Einzelpersonen und Unternehmen zu helfen, klügere finanzielle Entscheidungen zu treffen. Mit leistungsstarken Tools, Expertenberatung und Echtzeit-Insights vereinfacht Arson den Investitionsprozess und befähigt die Nutzer, ihr Vermögen mit Vertrauen zu wachsen.',
      '✨ Wichtige Funktionen von Arson: Personalisierte Investitionsberatung, die auf Ihre Ziele zugeschnitten ist',
      'Echtzeit-Markteinblicke und Portfolio-Tracking',
      'Benutzerfreundliches Dashboard zur Verwaltung von Investitionen',
      'Sicher, zuverlässig und für Anfänger sowie Profis geeignet',
      'Expertunterstützung für intelligentere Entscheidungen',
      'Egal, ob Sie gerade erst in Ihre Investitionsreise starten oder Ihr Portfolio optimieren möchten, Arson ist Ihr vertrauenswürdiger Partner für finanzielles Wachstum.'
    ],
    nl: [
      '💡 Arson is een moderne webapplicatie voor investeringsadvies, ontworpen om individuen en bedrijven te helpen slimmer financiële beslissingen te nemen. Met krachtige tools, expertadvies en realtime inzichten vereenvoudigt Arson het investeringsproces en stelt gebruikers in staat om hun vermogen met vertrouwen te laten groeien.',
      '✨ Belangrijke kenmerken van Arson: Persoonlijk investeringsadvies afgestemd op uw doelen',
      'Realtime marktinzichten en portefeuillestracering',
      'Eenvoudig te gebruiken dashboard voor het beheren van investeringen',
      'Veilig, betrouwbaar en geschikt voor zowel beginners als professionals',
      'Expertondersteuning voor slimmere besluitvorming',
      'Of je nu net begint met je investeringsreis of je portfolio wilt optimaliseren, Arson is je vertrouwde partner voor financieel groei.'
    ]
  } as BiList,

  contact_title: { 
    en: 'Contact me', 
    fa: 'تماس با من', 
    de: 'Kontaktiere mich', 
    nl: 'Neem contact op' 
  } as Bi,

  contact_email: { 
    en: 'Email', 
    fa: 'ایمیل', 
    de: 'E-Mail', 
    nl: 'E-mail' 
  } as Bi,

  contact_linkedin: { 
    en: 'Linkedin', 
    fa: 'لینکدین', 
    de: 'LinkedIn', 
    nl: 'LinkedIn' 
  } as Bi,

  blog_title: { 
    en: 'Blog', 
    fa: 'بلاگ', 
    de: 'Blog', 
    nl: 'Blog' 
  } as Bi,

  blog_empty: { 
    en: 'No posts yet.', 
    fa: 'فعلاً نوشته‌ای نیست.', 
    de: 'Noch keine Beiträge.', 
    nl: 'Nog geen berichten.' 
  } as Bi,

  footer_text: {
    en: `© Milad Mohammadi`,
    fa: `© میلاد محمدی`,
    de: `© Milad Mohammadi`,
    nl: `© Milad Mohammadi`
  },

  about_me_first_paragraph: {
    en: "Hi there! 👋 I’m Milad, a passionate Front-End Developer who has been exploring the world of coding since 2020. From day one, I’ve embraced this journey with dedication, curiosity, and the belief that growth never stops.",
    fa: "سلام! 👋 من میلاد هستم، یک توسعه‌دهنده فرانت‌اند که از سال ۲۰۲۰ وارد دنیای برنامه‌نویسی شدم و از همون ابتدا با اشتیاق، پشتکار و باور به یادگیری مداوم این مسیر رو ادامه دادم",
    de: "Hallo! 👋 Ich bin Milad, ein leidenschaftlicher Front-End-Entwickler, der die Welt des Programmierens seit 2020 erkundet. Vom ersten Tag an habe ich diese Reise mit Hingabe, Neugier und dem Glauben an kontinuierliches Wachstum begonnen.",
    nl: "Hallo! 👋 Ik ben Milad, een gepassioneerde Front-End-ontwikkelaar die sinds 2020 de wereld van coderen verkent. Vanaf dag één heb ik deze reis met toewijding, nieuwsgierigheid en de overtuiging om nooit te stoppen met leren omarmd.",
  },

  about_me_second_paragraph: {
    en: "My expertise is in developing modern web applications, mainly on the front-end with React.js and Next.js. I love creating clean, responsive, and user-friendly interfaces that bring ideas to life. At the same time, I’ve always been curious about the back-end — which led me to work with Express and NestJS, building personal full-stack projects and strengthening my understanding of the bigger picture. To support these projects, I’ve also worked with MySQL and PostgreSQL databases.",
    fa: "تخصص من توسعه وب‌اپلیکیشن‌های مدرن هست که بیشتر در بخش فرانت‌اند با React.js و Next.js انجامشون می‌دم. من عاشق خلق رابط‌های کاربری تمیز، واکنش‌گرا و کاربرپسند هستم که ایده‌ها رو به تجربه‌های واقعی تبدیل می‌کنن. در عین حال، همیشه به توسعه سمت بک علاقه‌مند بودم؛ همین علاقه باعث شد که با Express و NestJS کار کنم و چندین پروژه شخصی رو به صورت فول‌استک پیاده‌سازی کنم. برای پیشبرد این پروژه‌ها هم از دیتابیس‌های MySQL و PostgreSQL استفاده کردم.",
    de: "Meine Expertise liegt in der Entwicklung moderner Webanwendungen, hauptsächlich im Front-End mit React.js und Next.js. Ich liebe es, saubere, reaktionsschnelle und benutzerfreundliche Schnittstellen zu erstellen, die Ideen zum Leben erwecken. Gleichzeitig war ich immer neugierig auf das Backend – was mich dazu führte, mit Express und NestJS zu arbeiten, persönliche Full-Stack-Projekte zu erstellen und mein Verständnis des größeren Zusammenhangs zu stärken. Um diese Projekte zu unterstützen, habe ich auch mit MySQL- und PostgreSQL-Datenbanken gearbeitet.",
    nl: "Mijn expertise ligt in het ontwikkelen van moderne webapplicaties, voornamelijk aan de front-end met React.js en Next.js. Ik hou ervan om schone, responsieve en gebruiksvriendelijke interfaces te creëren die ideeën tot leven brengen. Tegelijkertijd ben ik altijd nieuwsgierig geweest naar de back-end — wat me ertoe leidde om met Express en NestJS te werken, persoonlijke full-stack-projecten te bouwen en mijn begrip van het grotere geheel te versterken. Om deze projecten te ondersteunen, heb ik ook gewerkt met MySQL- en PostgreSQL-databases.",
  },

  about_me_third_paragraph: {
    en: "Over the years, I’ve contributed to diverse projects — from building a Document Management System and Electronic Library at Danesh Hamara, to developing M.CAR, a platform that connects clients with mechanics, at TaFarda Studio. These experiences have sharpened both my technical expertise and my ability to deliver practical solutions that solve real problems. But for me, programming isn’t just about writing code. 🚀 It’s about crafting meaningful digital experiences that improve people’s lives. My colleagues often describe me as patient, reliable, and collaborative. I truly enjoy building positive team dynamics, continuously learning, and sharing knowledge with others.",
    fa: "تجربه‌هام شامل پروژه‌های متنوعی هست؛ از توسعه یک سیستم مدیریت اسناد و کتابخانه الکترونیکی در دانش‌هم‌آرا گرفته تا ساخت پلتفرم M.CAR در TaFarda Studio که ارتباط بین مشتری‌ها و مکانیک‌ها رو ساده‌تر و کارآمدتر کرده. این پروژه‌ها به من کمک کردن هم در زمینه فنی عمیق‌تر بشم و هم مهارت حل مسئله‌هام رو تقویت کنم. اما برای من، برنامه‌نویسی فقط کدنویسی نیست. 🚀 اینه که بشه تجربه‌های دیجیتال معناداری خلق کرد که واقعاً به زندگی آدم‌ها ارزش اضافه کنه. همکارانم منو فردی صبور، قابل‌اعتماد و اهل همکاری می‌شناسن. چیزی که همیشه برام مهمه، ایجاد فضای کاری مثبت، یادگیری مداوم و به اشتراک گذاشتن دانسته‌ها با دیگرانه.",
    de: "Im Laufe der Jahre habe ich zu verschiedenen Projekten beigetragen — von der Entwicklung eines Dokumentenmanagementsystems und einer elektronischen Bibliothek bei Danesh Hamara bis hin zur Entwicklung von M.CAR, einer Plattform, die Kunden mit Mechanikern verbindet, bei TaFarda Studio. Diese Erfahrungen haben sowohl meine technischen Fähigkeiten geschärft als auch meine Fähigkeit, praktische Lösungen zu liefern, die echte Probleme lösen. Aber für mich ist Programmieren nicht nur das Schreiben von Code. 🚀 Es geht darum, sinnvolle digitale Erlebnisse zu schaffen, die das Leben der Menschen verbessern. Meine Kollegen beschreiben mich oft als geduldig, zuverlässig und kooperativ. Ich genieße es wirklich, positive Teamdynamiken zu schaffen, kontinuierlich zu lernen und Wissen mit anderen zu teilen.",
    nl: "In de loop der jaren heb ik bijgedragen aan verschillende projecten — van het bouwen van een Document Management System en een elektronische bibliotheek bij Danesh Hamara, tot het ontwikkelen van M.CAR, een platform dat klanten verbindt met monteurs, bij TaFarda Studio. Deze ervaringen hebben zowel mijn technische expertise aangescherpt als mijn vermogen om praktische oplossingen te leveren die echte problemen oplossen. Maar voor mij is programmeren niet alleen maar code schrijven. 🚀 Het gaat om het creëren van betekenisvolle digitale ervaringen die het leven van mensen verbeteren. Mijn collega's beschrijven mij vaak als geduldig, betrouwbaar en samenwerkingsgericht. Ik geniet er echt van om positieve teamdynamiek te creëren, voortdurend te leren en kennis met anderen te delen.",
  },

  about_me_forth_paragraph: {
    en: "Interestingly, my academic background is in Neuroscience (Optogenetics), where I earned my Master’s degree. Before stepping into software development, I worked on intricate research projects — experiences that taught me analytical thinking, attention to detail, and creative problem-solving.",
    fa: "پیش‌زمینه علمی من هم جالبه! 🎓 من کارشناسی‌ارشد نوروساینس (اپتوژنتیک) دارم و قبل از ورود به دنیای نرم‌افزار، روی پروژه‌های تحقیقاتی پیچیده‌ای کار کردم. اون تجربه‌ها باعث شدن که مهارت‌های تفکر تحلیلی، دقت به جزئیات و حل خلاقانه مسئله در من تقویت بشه.",
    de: "Interessanterweise liegt mein akademischer Hintergrund in der Neurowissenschaft (Optogenetik), wo ich meinen Master-Abschluss gemacht habe. Bevor ich in die Softwareentwicklung einstieg, arbeitete ich an komplexen Forschungsprojekten — Erfahrungen, die mir analytisches Denken, Aufmerksamkeit für Details und kreatives Problemlösen beigebracht haben.",
    nl: "Interessant genoeg is mijn academische achtergrond in Neurowetenschappen (Optogenetica), waar ik mijn Masterdiploma behaalde. Voordat ik de softwareontwikkeling inging, werkte ik aan ingewikkelde onderzoeksprojecten — ervaringen die me analytisch denken, aandacht voor detail en creatief probleemoplossend vermogen bijbrachten.",
  },

  about_me_fifth_paragraph: {
    en: "I’m always eager to learn, grow, and take on new challenges in the ever-evolving tech landscape. Whether working on large-scale projects or in small, agile teams, what excites me most is turning ideas into real, impactful products through code. If you’re looking for a developer who combines strong technical skills with a positive, team-oriented attitude, I’d be thrilled to connect and explore how we can build something amazing together. 🌱",
    fa: "من همیشه دنبال یادگیری و تجربه‌های تازه در دنیای تکنولوژی هستم. چه روی پروژه‌های بزرگ و چالش‌برانگیز کار کنم، چه در تیم‌های کوچک و صمیمی، چیزی که بیش از همه منو هیجان‌زده می‌کنه اینه که بتونم با کد، ایده‌ها رو به محصولات واقعی و تأثیرگذار تبدیل کنم. اگر به دنبال توسعه‌دهنده‌ای هستید که هم از نظر فنی توانمند باشه و هم با انرژی مثبت و روحیه تیمی قوی وارد پروژه بشه، خوشحال می‌شم بیشتر با هم آشنا بشیم. 🌱",
    de: "Ich bin immer bestrebt, zu lernen, zu wachsen und neue Herausforderungen in der sich ständig weiterentwickelnden Technologiewelt anzunehmen. Ob bei großen Projekten oder in kleinen, agilen Teams, was mich am meisten begeistert, ist, Ideen durch Code in echte, wirkungsvolle Produkte umzuwandeln. Wenn du nach einem Entwickler suchst, der starke technische Fähigkeiten mit einer positiven, teamorientierten Haltung kombiniert, würde ich mich freuen, mich zu verbinden und zu erkunden, wie wir gemeinsam etwas Großartiges schaffen können. 🌱",
    nl: "Ik ben altijd enthousiast om te leren, te groeien en nieuwe uitdagingen aan te gaan in het voortdurend evoluerende technologische landschap. Of het nu gaat om grote projecten of kleine, wendbare teams, wat mij het meest opwindt is het omzetten van ideeën in echte, impactvolle producten via code. Als je op zoek bent naar een ontwikkelaar die sterke technische vaardigheden combineert met een positieve, teamgerichte houding, zou ik graag in contact komen en ontdekken hoe we samen iets geweldig kunnen bouwen. 🌱",
  },
} as const;


// helpers to read values based on locale
export function t(key: keyof typeof dictionary, locale: Locale): string {
  const v = dictionary[key] as Bi;
  // if (typeof v?.en === 'function') return v[locale](new Date().getFullYear());
  return v[locale] as string;
}

export function tList(key: keyof typeof dictionary, locale: Locale): string[] {
  const v = dictionary[key] as BiList;
  return (v?.[locale] as string[]) ?? [];
}

// utility
export const dirOf = (l: Locale) => (l === 'fa' ? 'rtl' : 'ltr');
