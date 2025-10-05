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

  home: { 
    en: 'Home', 
    fa: 'خانه', 
    de: 'Startseite', 
    nl: 'Startpagina' 
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
    en: 'About me', 
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

  intro: {
    en: "I am a Software Developer with over 5 years of experience building fast, scalable, and maintainable web applications. I love turning complex ideas into clean, efficient, and impactful digital products.",
    fa: "من یک توسعه‌دهنده نرم‌افزار با بیش از ۵ سال تجربه در ساخت برنامه‌های وب سریع، مقیاس‌پذیر و قابل نگهداری هستم. من عاشق تبدیل ایده‌های پیچیده به محصولات دیجیتالی تمیز، کارآمد و تأثیرگذار هستم.",
    de: "Ich bin ein Softwareentwickler mit über 5 Jahren Erfahrung in der Entwicklung schneller, skalierbarer und wartbarer Webanwendungen. Ich liebe es, komplexe Ideen in saubere, effiziente und wirkungsvolle digitale Produkte zu verwandeln.",
    nl: "Ik ben een softwareontwikkelaar met meer dan 5 jaar ervaring in het bouwen van snelle, schaalbare en onderhoudbare webapplicaties. Ik vind het geweldig om complexe ideeën om te zetten in schone, efficiënte en impactvolle digitale producten."
  } as Bi,

  whatIDo: {
    en: "What I Do",
    fa: "کاری که انجام می‌دهم",
    de: "Was ich tue",
    nl: "Wat ik doe"
  },
  
  whatIDoDescription: {
    en: "I specialize in React.js, Next.js, TypeScript, and NestJS, crafting full-stack solutions that balance great user experience with solid architecture. My focus is always on building systems that scale, perform, and stand the test of time.",
    fa: "من در React.js، Next.js، TypeScript و NestJS تخصص دارم و راه‌حل‌های فول‌استک طراحی می‌کنم که بین تجربه کاربری عالی و معماری قوی تعادل برقرار می‌کنند. تمرکز من همیشه بر ساخت سیستم‌هایی است که مقیاس‌پذیر، کارآمد و ماندگار باشند.",
    de: "Ich bin auf React.js, Next.js, TypeScript und NestJS spezialisiert und entwickle Full-Stack-Lösungen, die ein großartiges Benutzererlebnis mit solider Architektur verbinden. Mein Fokus liegt stets darauf, Systeme zu bauen, die skalierbar, leistungsfähig und dauerhaft sind.",
    nl: "Ik ben gespecialiseerd in React.js, Next.js, TypeScript en NestJS, en ontwikkel full-stackoplossingen die een uitstekende gebruikerservaring combineren met een solide architectuur. Mijn focus ligt altijd op het bouwen van systemen die schaalbaar zijn, goed presteren en de tand des tijds doorstaan."
  },

  experiencehighlight: {
    en: "Experience Highlights",
    fa: "نکات برجسته تجربه",
    de: "Erfahrungs-Highlights",
    nl: "Ervaringshoogtepunten"
  },

  experienceHighlighPoints: {
    en: [
      "Build the front-end for Mdotcar, an automotive platform handling over 30,000+ successful services.",
      "Contribute to Rsoon, an investing consultant platform focused on smart financial growth.",
      "Develop an enterprise-scale DMS at Danesh-Hamara, built for large organizations.",
      "Deep hands-on experience with React.js/Next.js, TailwindCSS, responsive web design and clean Git workflows."
    ],

    fa: [
      "ساخت فرانت‌اند Mdotcar، یک پلتفرم خودرو که بیش از ۳۰٬۰۰۰ سرویس موفق را مدیریت می‌کند.",
      "همکاری در Rsoon، یک پلتفرم مشاوره سرمایه‌گذاری متمرکز بر رشد هوشمند مالی.",
      "توسعه یک سیستم مدیریت اسناد (DMS) در مقیاس سازمانی در Danesh-Hamara، ساخته شده برای سازمان‌های بزرگ.",
      "تجربه عملی عمیق با React.js/Next.js، TailwindCSS، طراحی وب واکنش‌گرا و گردش کاری تمیز Git."
    ],

    de: [
      "Entwicklung des Front-Ends für Mdotcar, eine Automotive-Plattform, die über 30.000 erfolgreiche Services abwickelt.",
      "Mitwirkung bei Rsoon, einer Investment-Consulting-Plattform mit Fokus auf intelligentes finanzielles Wachstum.",
      "Entwicklung eines unternehmensweiten DMS bei Danesh-Hamara, gebaut für große Organisationen.",
      "Tiefgehende praktische Erfahrung mit React.js/Next.js, TailwindCSS, responsivem Webdesign und sauberen Git-Workflows."
    ],

    nl: [
      "Bouw van de front-end voor Mdotcar, een automotive platform dat meer dan 30.000 succesvolle diensten afhandelt.",
      "Bijdragen aan Rsoon, een investeringsadviesplatform gericht op slimme financiële groei.",
      "Ontwikkelen van een enterprise-scale DMS bij Danesh-Hamara, gebouwd voor grote organisaties.",
      "Diepgaande hands-on ervaring met React.js/Next.js, TailwindCSS, responsief webdesign en nette Git-workflows."
    ]
  } as BiList,

  howIWork: {
    en: "How I Work",
    fa: "روش کاری من",
    de: "Wie ich arbeite",
    nl: "Hoe ik werk"
  },

  howIWorkDescription: {
    en: "I care about clean architecture, collaboration, and continuous improvement. I enjoy building products that not only work beautifully but also deliver measurable business value. Whether I’m working with a startup or a large organization, I aim to create systems that feel effortless yet powerful.",
    fa: "من به معماری تمیز، همکاری و بهبود مستمر اهمیت می‌دهم. از ساخت محصولاتی لذت می‌برم که نه تنها به‌خوبی کار می‌کنند بلکه ارزش تجاری قابل اندازه‌گیری نیز ارائه می‌دهند. چه با یک استارتاپ کار کنم و چه با یک سازمان بزرگ، هدفم ایجاد سیستم‌هایی است که هم آسان و هم قدرتمند باشند.",
    de: "Mir sind saubere Architektur, Zusammenarbeit und kontinuierliche Verbesserung wichtig. Ich baue gerne Produkte, die nicht nur gut funktionieren, sondern auch messbaren geschäftlichen Mehrwert liefern. Ob ich mit einem Startup oder einer großen Organisation arbeite, mein Ziel ist es, Systeme zu schaffen, die mühelos und gleichzeitig leistungsstark sind.",
    nl: "Ik hecht veel waarde aan een schone architectuur, samenwerking en continue verbetering. Ik geniet ervan om producten te bouwen die niet alleen goed werken, maar ook meetbare zakelijke waarde leveren. Of ik nu met een startup of een grote organisatie werk, mijn doel is om systemen te creëren die moeiteloos en krachtig aanvoelen."
  },

  project_mdotcar_admin_panel_title: {
    en: 'Mdotcar - Admin Panel',
    fa: 'امداتکار - ادمین پنل',
    de: 'Mdotcar - Admin Panel',
    nl: 'Mdotcar - Admin Paneel'
  },

  project_mdotcar_admin_panel_description: {
    en:[ 
      'In this video, we take you inside the Admin Panel of mdotcar, the central hub where everything comes together. The admin panel is designed to give full control and visibility into how the platform operates, ensuring a smooth experience for both clients and experts.',
      'What you’ll see in this video:',
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
      `آنچه در این ویدئو خواهید دید:`,
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
      'Was du in diesem Video sehen wirst:',
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
      'Wat je in deze video zult zien:',
      'Dashboard-overzicht met belangrijke inzichten',
      'Beheer van klant- en expertaccounts',
      'Monitoring en tracking van serviceaanvragen',
      'Goedkeuringen, beoordelingen en geschilbehandeling',
      'Analyse en rapportage voor betere besluitvorming',
      'Instellingen & aanpassingsopties en ...',
      'Met het admin-paneel zorgt Mdotcar ervoor dat het hele ecosysteem efficiënt werkt — klanten tevreden, experts ondersteund en operaties gestroomlijnd.',
    ]
  } as BiList,

  project_mdotcar_admin_panel_summarized_description: {
    en: 'The Mdotcar Admin Panel is the central hub for managing the entire roadside assistance platform. It provides comprehensive control over client and expert accounts, service requests, and analytics, ensuring smooth operations and a seamless experience for all users.',
    fa: 'پنل مدیریت Mdotcar مرکز اصلی مدیریت کل پلتفرم امداد جاده‌ای است. این پنل کنترل جامع بر حساب‌های مشتریان و کارشناسان، درخواست‌های خدمات و تحلیل‌ها را فراهم می‌کند و عملیات روان و تجربه‌ای بی‌دغدغه برای همه کاربران تضمین می‌کند.',
    de: 'Das Mdotcar Admin Panel ist das zentrale Hub zur Verwaltung der gesamten Pannenhilfe-Plattform. Es bietet umfassende Kontrolle über Kunden- und Expertenkonten, Serviceanfragen und Analysen und gewährleistet einen reibungslosen Betrieb und ein nahtloses Erlebnis für alle Nutzer.',
    nl: 'Het Mdotcar Admin Panel is het centrale punt voor het beheren van het gehele pechhulpplatform. Het biedt uitgebreide controle over klant- en expertaccounts, serviceaanvragen en analyses, waardoor soepele operaties en een naadloze ervaring voor alle gebruikers worden gegarandeerd.'
  },

  project_mdotcar_client_and_expert_title: {
    en: 'Mdotcar – Client & Expert Web App Demo | Real-Time Roadside Assistance',
    fa: 'امداتکار – دموی وب‌اپلیکیشن مشتری و کارشناس | امداد جاده‌ای در لحظه',
    de: 'Mdotcar – Client & Expert Web App Demo | Echtzeit Pechhulp',
    nl: 'Mdotcar – Demo Web App voor Klanten en Experts | Echt Tijdige Pechhulp',
  },

  project_mdotcar_client_and_expert_description: {
    en: [
      'Mdotcar is a smart roadside assistance web application that connects clients with experts in real time. In this video, we demonstrate the complete flow of a service request — from the client side to the expert side — showing how Mdotcar makes emergency support seamless and efficient.',
      'What you’ll see in this video:',
      'How a client creates a roadside assistance request', 
      'Real-time updates powered by web sockets',
      'Expert workflow: receiving, managing, and completing the request',
      'Full demonstration of both client web app and expert web app', 
      'Smooth interaction between client and expert until the service is delivered',
      'With Mdotcar, clients get quick, reliable help on the road, while experts can manage requests with an intuitive, real-time platform.',
    ],
    fa: [
      'امدادکار یک وب‌اپلیکیشن هوشمند امداد جاده‌ای است که مشتریان را در لحظه به کارشناسان متصل می‌کند. در این ویدئو، کل فرآیند یک درخواست خدمات — از سمت مشتری تا سمت کارشناس — نمایش داده می‌شود و نشان می‌دهیم که چگونه امدادکار پشتیبانی اضطراری را روان و کارآمد می‌سازد.',
      'آنچه در این ویدئو خواهید دید:',
      'نحوه ایجاد درخواست امداد جاده‌ای توسط مشتری',
      'به‌روزرسانی‌های لحظه‌ای با استفاده از وب‌سوکت‌ها',
      'روند کاری کارشناس: دریافت، مدیریت و تکمیل درخواست',
      'نمایش کامل وب‌اپلیکیشن مشتری و وب‌اپلیکیشن کارشناس',
      'تعامل روان میان مشتری و کارشناس تا تحویل خدمات',
      'با امدادکار، مشتریان به‌سرعت و با اطمینان در جاده کمک دریافت می‌کنند، در حالی که کارشناسان می‌توانند درخواست‌ها را از طریق یک پلتفرم شهودی و بلادرنگ مدیریت کنند.',
    ],
    de: [
      'Mdotcar ist eine intelligente Webanwendung für Pannenhilfe, die Kunden in Echtzeit mit Experten verbindet. In diesem Video zeigen wir den gesamten Ablauf einer Serviceanforderung — vom Kunden bis zum Experten — und demonstrieren, wie Mdotcar die Notfallhilfe nahtlos und effizient gestaltet.',
      ' Was du in diesem Video sehen wirst:',
      'Wie ein Kunde eine Pannenhilfeanfrage erstellt',
      'Echtzeit-Updates, die durch Websockets unterstützt werden',
      'Experten-Workflow: Empfang, Verwaltung und Erledigung der Anfrage',
      'Vollständige Demonstration der Webanwendung für Kunden und Experten',
      'Reibungslose Interaktion zwischen Kunde und Experten bis zur Lieferung des Services',
      'Mit Mdotcar erhalten Kunden schnelle, zuverlässige Hilfe auf der Straße, während Experten Anfragen über eine intuitive, Echtzeit-Plattform verwalten können.',
    ],
    nl: [
      'Mdotcar is een slimme webapplicatie voor pechhulp die klanten in realtime verbindt met experts. In deze video demonstreren we de complete stroom van een service-aanvraag — van de klantkant tot de expertkant — en laten we zien hoe Mdotcar noodhulp naadloos en efficiënt maakt.',
      'Wat je in deze video zult zien:',
      'Hoe een klant een pechhulpaanvraag maakt',
      'Echt-time updates aangedreven door web sockets',
      'Expert workflow: ontvangen, beheren en voltooien van de aanvraag',
      'Volledige demonstratie van zowel de klant web-app als de expert web-app',
      'Vlotte interactie tussen klant en expert totdat de service wordt geleverd',
      'Met Mdotcar krijgen klanten snel, betrouwbare hulp op de weg, terwijl experts verzoeken kunnen beheren met een intuïtief, realtime platform.',
    ]
  } as BiList,

  project_mdotcar_client_and_expert_summarized_description: {
    en: 'Mdotcar is an intelligent roadside assistance platform that connects clients and experts in real time. The video demonstrates the full process — from requesting help to completing the service — showcasing seamless, efficient communication and real-time management.',
    fa: 'امدادکار یک پلتفرم هوشمند امداد جاده‌ای است که مشتریان و کارشناسان را در لحظه به هم متصل می‌کند. این ویدئو کل فرآیند — از درخواست کمک تا تکمیل خدمات — را نشان می‌دهد و ارتباط روان، کارآمد و مدیریت لحظه‌ای را به نمایش می‌گذارد.',
    de: 'Mdotcar ist eine intelligente Plattform für Pannenhilfe, die Kunden und Experten in Echtzeit verbindet. Das Video zeigt den gesamten Prozess — von der Anforderung von Hilfe bis zur Erledigung des Services — und präsentiert nahtlose, effiziente Kommunikation und Echtzeit-Management.',
    nl: 'Mdotcar is een intelligent platform voor pechhulp dat klanten en experts in realtime verbindt. De video demonstreert het volledige proces — van het aanvragen van hulp tot het voltooien van de service — en toont naadloze, efficiënte communicatie en realtime beheer.'
  },

  project_rsoon_title: {
    en: 'Rsoon – Smart Investment Consulting Web Application | Grow Your Wealth with Confidence',
    fa: 'آرسون – وب‌اپلیکیشن هوشمند مشاوره سرمایه‌گذاری | با اطمینان سرمایه‌تان را رشد دهید',
    de: 'Rsoon – Smart Investment Consulting Web Application | Wachstum Ihres Vermögens mit Vertrauen',
    nl: 'Rsoon – Slimme Investering Advies Web Applicatie | Groei je Vermogen met Vertrouwen',
  },

  project_rsoon_description: {
    en: [
      'Rsoon is a modern web application for investment consulting, designed to help individuals and businesses make smarter financial decisions. With powerful tools, expert guidance, and real-time insights, Rsoon simplifies the investment process and empowers users to grow their wealth with confidence.',
      'Key Features of Rsoon: Personalized investment consulting tailored to your goals',
      'Real-time market insights and portfolio tracking',
      'Easy-to-use dashboard for managing investments',
      'Secure, reliable, and built for both beginners & professionals',
      'Expert support for smarter decision-making',
      'Whether you’re just starting your investment journey or looking to optimize your portfolio, Rsoon is your trusted partner for financial growth.'
    ],
    fa: [
      'آرسون یک وب‌اپلیکیشن مدرن برای مشاوره سرمایه‌گذاری است که به افراد و کسب‌وکارها کمک می‌کند تصمیمات مالی هوشمندانه‌تری بگیرند. با ابزارهای قدرتمند، راهنمایی کارشناسان و بینش‌های لحظه‌ای، آرسون فرآیند سرمایه‌گذاری را ساده کرده و به کاربران این امکان را می‌دهد که با اطمینان ثروت خود را رشد دهند.',
      'ویژگی‌های کلیدی آرسون:',
      'مشاوره سرمایه‌گذاری شخصی‌سازی‌شده بر اساس اهداف شما',
      'بینش‌های لحظه‌ای بازار و پایش پرتفوی سرمایه‌گذاری',
      'داشبورد کاربرپسند برای مدیریت سرمایه‌گذاری‌ها',
      'امن، قابل‌اعتماد و مناسب برای تازه‌کارها و حرفه‌ای‌ها',
      'پشتیبانی کارشناسان برای تصمیم‌گیری‌های هوشمندانه‌تر',
      'چه در ابتدای مسیر سرمایه‌گذاری باشید و چه به دنبال بهینه‌سازی پرتفوی خود، آرسون شریک مطمئن شما برای رشد مالی است.'
    ],
    de: [
      'Rsoon ist eine moderne Webanwendung für Investitionsberatung, die darauf ausgelegt ist, Einzelpersonen und Unternehmen zu helfen, klügere finanzielle Entscheidungen zu treffen. Mit leistungsstarken Tools, Expertenberatung und Echtzeit-Insights vereinfacht Rsoon den Investitionsprozess und befähigt die Nutzer, ihr Vermögen mit Vertrauen zu wachsen.',
      'Wichtige Funktionen von Rsoon: Personalisierte Investitionsberatung, die auf Ihre Ziele zugeschnitten ist',
      'Echtzeit-Markteinblicke und Portfolio-Tracking',
      'Benutzerfreundliches Dashboard zur Verwaltung von Investitionen',
      'Sicher, zuverlässig und für Anfänger sowie Profis geeignet',
      'Expertunterstützung für intelligentere Entscheidungen',
      'Egal, ob Sie gerade erst in Ihre Investitionsreise starten oder Ihr Portfolio optimieren möchten, Rsoon ist Ihr vertrauenswürdiger Partner für finanzielles Wachstum.'
    ],
    nl: [
      'Rsoon is een moderne webapplicatie voor investeringsadvies, ontworpen om individuen en bedrijven te helpen slimmer financiële beslissingen te nemen. Met krachtige tools, expertadvies en realtime inzichten vereenvoudigt Rsoon het investeringsproces en stelt gebruikers in staat om hun vermogen met vertrouwen te laten groeien.',
      'Belangrijke kenmerken van Rsoon: Persoonlijk investeringsadvies afgestemd op uw doelen',
      'Realtime marktinzichten en portefeuillestracering',
      'Eenvoudig te gebruiken dashboard voor het beheren van investeringen',
      'Veilig, betrouwbaar en geschikt voor zowel beginners als professionals',
      'Expertondersteuning voor slimmere besluitvorming',
      'Of je nu net begint met je investeringsreis of je portfolio wilt optimaliseren, Rsoon is je vertrouwde partner voor financieel groei.'
    ]
  } as BiList,

  project_rsoon_summarized_description: {
    en: 'Rsoon is a modern investment consulting platform that simplifies financial decision-making. It offers personalized guidance, real-time market insights, and secure tools to help both beginners and professionals manage and grow their investments confidently',
    fa: 'آرسون یک پلتفرم مدرن مشاوره سرمایه‌گذاری است که تصمیم‌گیری‌های مالی را ساده می‌کند. این پلتفرم راهنمایی شخصی‌سازی‌شده، بینش‌های لحظه‌ای بازار و ابزارهای امن را ارائه می‌دهد تا هم تازه‌کارها و هم حرفه‌ای‌ها بتوانند با اطمینان سرمایه‌گذاری‌ها و رشد خود را مدیریت کنند.',
    de: 'Rsoon ist eine moderne Plattform für Investitionsberatung, die die finanzielle Entscheidungsfindung vereinfacht. Sie bietet personalisierte Beratung, Echtzeit-Markteinblicke und sichere Tools, um sowohl Anfängern als auch Profis zu helfen, ihre Investitionen selbstbewusst zu verwalten und zu wachsen.',
    nl: 'Rsoon is een modern platform voor investeringsadvies dat financiële besluitvorming vereenvoudigt. Het biedt persoonlijk advies, realtime marktinzichten en veilige tools om zowel beginners als professionals te helpen hun investeringen met vertrouwen te beheren en te laten groeien.'
  },

  project_keydoc_title: {
    en: 'Keydoc – Document Management System',
    fa: 'کیداک – سیستم مدیریت اسناد',
    de: 'Keydoc – Dokumentenmanagementsystem',
    nl: 'Keydoc – Documentbeheer Systeem',
  },

  project_keydoc_description: {
    en: [
      'Keydoc is a powerful document management system designed to help businesses organize, manage, and collaborate on their documents more effectively.',
      'Key Features of Keydoc: Centralized document storage and organization',
      'Advanced search and filtering options',
      'Collaboration tools for teams',
      'Secure access controls and permissions',
      'Integration with popular productivity tools',
      'Whether you’re a small business or a large enterprise, Keydoc is your go-to solution for efficient document management.'
    ],
    fa: [
      'کی‌داک یک سیستم مدیریت اسناد قدرتمند است که به کسب‌وکارها کمک می‌کند تا اسناد خود را به‌طور مؤثرتر سازماندهی، مدیریت و همکاری کنند.',
      'ویژگی‌های کلیدی کی‌داک:',
      'ذخیره‌سازی و سازماندهی متمرکز اسناد',
      'گزینه‌های جستجو و فیلتر پیشرفته',
      'ابزارهای همکاری برای تیم‌ها',
      'کنترل‌های دسترسی و مجوزهای ایمن',
      'ادغام با ابزارهای محبوب بهره‌وری',
      'چه شما یک کسب‌وکار کوچک باشید و چه یک شرکت بزرگ، کی‌داک راه‌حل مناسب شما برای مدیریت مؤثر اسناد است.'
    ],
    de: [
      'Keydoc ist ein leistungsstarkes Dokumentenmanagementsystem, das Unternehmen dabei hilft, ihre Dokumente effektiver zu organisieren, zu verwalten und zusammenzuarbeiten.',
      'Wichtige Funktionen von Keydoc: Zentralisierte Dokumentenspeicherung und -organisation',
      'Erweiterte Such- und Filteroptionen',
      'Zusammenarbeitstools für Teams',
      'Sichere Zugriffssteuerungen und Berechtigungen',
      'Integration mit beliebten Produktivitätstools',
      'Egal, ob Sie ein kleines Unternehmen oder ein großes Unternehmen sind, Keydoc ist Ihre Lösung für effizientes Dokumentenmanagement.'
    ],
    nl: [
      'Keydoc is een krachtig documentbeheersysteem dat bedrijven helpt hun documenten effectiever te organiseren, beheren en samenwerken.',
      'Belangrijke kenmerken van Keydoc: Gecentraliseerde documentopslag en -organisatie',
      'Geavanceerde zoek- en filteropties',
      'Samenwerkingstools voor teams',
      'Veilige toegangscontroles en machtigingen',
      'Integratie met populaire productiviteitstools',
      'Of je nu een klein bedrijf bent of een grote onderneming, Keydoc is jouw oplossing voor efficiënt documentbeheer.'
    ]
  } as BiList,

  project_keydoc_summarized_description: {
    en: 'Keydoc is a robust document management system that centralizes storage, enhances collaboration, and provides secure access controls. It is designed to help businesses of all sizes manage their documents efficiently and effectively.',
    fa: 'کی‌داک یک سیستم مدیریت اسناد قوی است که ذخیره‌سازی متمرکز، همکاری بهبود یافته و کنترل‌های دسترسی ایمن را فراهم می‌کند. این سیستم برای کمک به کسب‌وکارها در هر اندازه‌ای طراحی شده است تا اسناد خود را به‌طور مؤثر و کارآمد مدیریت کنند.',
    de: 'Keydoc ist ein robustes Dokumentenmanagementsystem, das die Speicherung zentralisiert, die Zusammenarbeit verbessert und sichere Zugriffssteuerungen bietet. Es wurde entwickelt, um Unternehmen jeder Größe bei der effizienten und effektiven Verwaltung ihrer Dokumente zu unterstützen.',
    nl: 'Keydoc is een robuust documentbeheersysteem dat opslag centraliseert, samenwerking verbetert en veilige toegangscontroles biedt. Het is ontworpen om bedrijven van elke omvang te helpen hun documenten efficiënt en effectief te beheren.'
  },

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
