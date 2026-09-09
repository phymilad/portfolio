/**
 * All user-facing copy for the site.
 *
 * Kept in one typed module rather than inline in components so that copy edits
 * don't require touching layout, and so reintroducing translations later is a
 * mechanical change rather than a rewrite. See docs/decisions.md §1.
 */

export const site = {
  name: 'Milad Mohammadi',
  role: 'Software Engineer',
  brand: 'Milad Mohammadi — Software Engineer',
  url: 'https://phymilad.com',
  description:
    'Software engineer with 5+ years building fast, scalable web applications with React, Next.js, TypeScript and NestJS. Projects, writing, and how I work.',
  locale: 'en_US',
  /**
   * Profiles used for schema.org sameAs. Only verified URLs belong here —
   * a wrong sameAs actively harms entity resolution. Add GitHub etc. once
   * confirmed.
   */
  social: ['https://www.linkedin.com/in/phymilad/', 'https://github.com/phymilad'],
} as const;

export const nav = {
  home: 'Home',
  about: 'About',
  projects: 'Projects',
  blog: 'Blog',
} as const;

export const navLinks = [
  { href: '/projects', label: nav.projects },
  { href: '/blog', label: nav.blog },
  { href: '/about', label: nav.about },
] as const;

export const home = {
  tagline:
    'I build fast, scalable web applications with React, Next.js, TypeScript and NestJS — and write about what I learn doing it.',
  selectedWork: 'Selected work',
  allProjects: 'All projects',
  recentWriting: 'Recent writing',
  allPosts: 'All posts',
  moreAbout: 'More about me',

  aboutTitle: 'About me',
  intro:
    'I am a Software Engineer with over 5 years of experience building fast, scalable, and maintainable web applications. I love turning complex ideas into clean, efficient, and impactful digital products.',

  whatIDoTitle: 'What I Do',
  whatIDo:
    'I specialize in React.js, Next.js, TypeScript, and NestJS, crafting full-stack solutions that balance great user experience with solid architecture. My focus is always on building systems that scale, perform, and stand the test of time.',

  experienceTitle: 'Experience Highlights',
  experience: [
    'Build the front-end for Mdotcar, an automotive platform handling over 30,000+ successful services.',
    'Contribute to Rsoon, an investing consultant platform focused on smart financial growth.',
    'Develop an enterprise-scale DMS at Danesh-Hamara, built for large organizations.',
    'Deep hands-on experience with React.js/Next.js, TailwindCSS, responsive web design and clean Git workflows.',
  ],

  howIWorkTitle: 'How I Work',
  howIWork:
    'I care about clean architecture, collaboration, and continuous improvement. I enjoy building products that not only work beautifully but also deliver measurable business value. Whether I\u2019m working with a startup or a large organization, I aim to create systems that feel effortless yet powerful.',
} as const;

export const portrait = {
  src: '/images/milad-mohammadi.jpg',
  alt: 'Milad Mohammadi',
  width: 1200,
  height: 1200,
} as const;

export const aboutPage = {
  title: 'About',
  metaDescription:
    'Milad Mohammadi — software engineer with 5+ years building production web applications with React, Next.js, TypeScript and NestJS.',
  lead: 'I am a software engineer based in Tehran, working mostly on the web. Five years of building things that other people have to maintain has made me care about architecture, clarity and the boring parts that keep a product alive.',
  contactTitle: 'Get in touch',
  contactBody: 'The fastest way to reach me is LinkedIn. My code is on GitHub.',
} as const;

export const projectsPage = {
  title: 'Projects',
  metaDescription:
    'Production web applications I have built or contributed to — Mdotcar, Rsoon and Keydoc — with a walkthrough of each.',
  intro:
    'A selection of production work — platforms I have built or contributed to, with a short walkthrough of each.',
} as const;

export const notFoundPage = {
  title: 'Page not found',
  body: 'That page does not exist, or it has moved.',
  cta: 'Back to home',
} as const;

export const errorPage = {
  title: 'Something went wrong',
  body: 'An unexpected error occurred. Try again, or head back to the home page.',
  retry: 'Try again',
  cta: 'Back to home',
} as const;

export const blog = {
  title: 'Blog',
  empty: 'No posts yet.',
  metaDescription:
    'Notes on frontend engineering, React and Next.js, architecture, and the things I learn building for the web.',
  toc: 'On this page',
  related: 'Related posts',
} as const;

export const footer = {
  text: '\u00a9 Milad Mohammadi',
} as const;
