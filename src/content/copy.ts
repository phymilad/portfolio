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
    'Software engineer building fast, maintainable web applications from frontend to backend, with AI as part of the workflow. Projects, writing, and how I work.',
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
    'I turn complex ideas into fast, maintainable web applications, from frontend to backend, and bring AI into the work where it genuinely helps. I write about what I learn along the way.',
  selectedWork: 'Selected work',
  allProjects: 'All projects',
  recentWriting: 'Recent writing',
  allPosts: 'All posts',
  // Ordered by importance; the About page has the full list.
  stack: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'AI agents',
    'AI-assisted development',
  ],
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
    'Milad Mohammadi is a software engineer in the Netherlands building full-stack web applications with React, Next.js, Node.js and NestJS, and working with AI every day.',
  // No year counts or other figures that go stale: everything here should
  // still be true next year without an edit.
  lead: [
    'I am a software engineer based in the Netherlands, working across the stack: interfaces in React and Next.js, APIs in Node.js and NestJS, and the databases behind them. I like taking a complicated idea and turning it into a product that is simple to use.',
    'AI is part of how I work every day. I use coding assistants to move faster on the parts that are well understood, and I build agents and tool-calling workflows where they take real work off people’s hands.',
    'Building things that other people have to maintain has made me care about architecture, clarity and the boring parts that keep a product alive.',
  ],
  location: 'The Netherlands',
  focus: 'Full-stack web applications and AI workflows',

  whatIDoTitle: 'What I do',
  whatIDo:
    'I build web applications end to end: React and Next.js on the frontend, Node.js and NestJS on the backend, and PostgreSQL, MongoDB and Redis underneath. I try to give users a good experience without cutting corners on architecture, and I build things so they keep working as the traffic and the feature list grow.',

  howIWorkTitle: 'How I work',
  principles: [
    [
      'Architecture that lasts',
      'Code is read and changed far more often than it is written, so I structure it for the next person who has to touch it.',
    ],
    [
      'Close to the team',
      'I work closely with design, product and the rest of engineering. Most problems are cheaper to solve in a conversation than in a pull request.',
    ],
    [
      'Better with every release',
      'Small, steady improvements over big rewrites. Every release should leave the product a little better, in ways the business can measure.',
    ],
    [
      'AI with judgement',
      'I let AI speed up the work that is well understood and keep human judgement on what is not: architecture, review and anything users depend on.',
    ],
  ],

  workTitle: 'Work',
  workIntro:
    'Production platforms I have built or worked on. Each one has a short video walkthrough.',

  stackTitle: 'Stack',
  // Confirmed by Milad, October 2026.
  stack: [
    [
      'Frontend',
      ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Material-UI', 'Leaflet'],
    ],
    ['Backend', ['Node.js', 'NestJS', 'REST APIs', 'WebSockets']],
    ['Data', ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM']],
    ['AI', ['AI agents & tool use', 'AI-assisted development']],
    ['Quality', ['Jest', 'Vitest', 'Playwright', 'Storybook']],
    ['Delivery', ['Docker', 'GitHub Actions', 'Git']],
    ['Workflow', ['Jira', 'Confluence', 'Figma', 'Agile']],
  ],

  contactTitle: 'Get in touch',
  contactBody:
    'The fastest way to reach me is LinkedIn. You can also find some of my projects on GitHub.',
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
    'Writing on building software: frontend, backend, architecture, and working with AI.',
  toc: 'On this page',
  related: 'Related posts',
} as const;

export const footer = {
  text: '\u00a9 Milad Mohammadi',
  blurb:
    'Software engineer building web applications from frontend to backend, with AI in the workflow, and writing about what I learn along the way.',
  built: 'Built with Next.js \u00b7 Deployed on Vercel',
} as const;

/** Display names for the `series.id` values used in post frontmatter. */
export const series: Record<string, string> = {
  'nextjs-between-the-lines': 'Next.js Between the Lines',
};
