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
  brand: 'Milad Mohammadi | Software Engineer',
  url: 'https://phymilad.vercel.app',
  description:
    'Software engineer with 5+ years building fast, scalable web applications with React, Next.js, TypeScript and NestJS. Projects, writing, and how I work.',
  locale: 'en_US',
  /**
   * Profiles used for schema.org sameAs. Only verified URLs belong here,
   * because a wrong sameAs hurts entity resolution. Add other profiles once
   * they are confirmed.
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
    'I build fast, scalable web applications with React, Next.js, TypeScript and NestJS, and I write about what I learn along the way.',
  selectedWork: 'Selected work',
  allProjects: 'All projects',
  recentWriting: 'Recent writing',
  allPosts: 'All posts',
  moreAbout: 'More about me',

  aboutTitle: 'About me',
  intro:
    'I am a software engineer with more than 5 years of experience building web applications that are fast, scale well and stay easy to maintain. I like taking a complicated idea and turning it into a product that is simple to use.',

  whatIDoTitle: 'What I Do',
  whatIDo:
    'I work mostly with React, Next.js, TypeScript and NestJS, on both the frontend and the backend. I try to give users a good experience without cutting corners on architecture, and I build things so they keep working as the traffic and the feature list grow.',

  experienceTitle: 'Experience Highlights',
  experience: [
    'Build the frontend for Mdotcar, an automotive platform that has handled more than 30,000 successful services.',
    'Contribute to Rsoon, an investment consulting platform for individuals and businesses.',
    'Develop a document management system (DMS) for large organizations at Danesh-Hamara.',
    'Daily work with React, Next.js, Tailwind CSS, responsive layouts and a clean Git history.',
  ],

  howIWorkTitle: 'How I Work',
  howIWork:
    'I care about clean architecture, working closely with the team, and making the product a bit better with every release. I want what I build to be pleasant to use and to show results the business can measure. That goes for a small startup as much as for a large organization.',
} as const;

export const portrait = {
  // Background removed, so the cutout sits directly on the page in either
  // theme. PNG for the alpha channel; next/image serves AVIF/WebP.
  src: '/images/milad-mohammadi.png',
  alt: 'Milad Mohammadi',
  width: 756,
  height: 794,
} as const;

export const aboutPage = {
  title: 'About',
  metaDescription:
    'Milad Mohammadi is a software engineer with 5+ years of experience building production web applications with React, Next.js, TypeScript and NestJS.',
  lead: 'I am a software engineer based in Tehran, working mostly on the web. Five years of building things that other people have to maintain has made me care about architecture, clarity and the boring parts that keep a product alive.',
  contactTitle: 'Get in touch',
  contactBody: 'The fastest way to reach me is LinkedIn. My code is on GitHub.',
} as const;

export const projectsPage = {
  title: 'Projects',
  metaDescription:
    'Production web applications I have built or contributed to, including Mdotcar, Rsoon and Keydoc, each with a video walkthrough.',
  intro:
    'Some of the production platforms I have built or worked on, each with a short video walkthrough.',
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
    'Notes on software engineering, React and Next.js, architecture, and the things I learn building for the web.',
  toc: 'On this page',
  related: 'Related posts',
} as const;

export const footer = {
  text: '\u00a9 Milad Mohammadi',
} as const;
