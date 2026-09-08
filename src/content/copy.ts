/**
 * All user-facing copy for the site.
 *
 * Kept in one typed module rather than inline in components so that copy edits
 * don't require touching layout, and so reintroducing translations later is a
 * mechanical change rather than a rewrite. See docs/decisions.md §1.
 */

export const site = {
  name: 'Milad Mohammadi',
  role: 'Software Developer',
  brand: 'Milad Mohammadi - Software Developer',
  url: 'https://phymilad.com',
} as const;

export const nav = {
  home: 'Home',
  projects: 'Projects',
  blog: 'Blog',
} as const;

export const home = {
  aboutTitle: 'About me',
  intro:
    'I am a Software Developer with over 5 years of experience building fast, scalable, and maintainable web applications. I love turning complex ideas into clean, efficient, and impactful digital products.',

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

export const blog = {
  title: 'Blog',
  empty: 'No posts yet.',
} as const;

export const footer = {
  text: '\u00a9 Milad Mohammadi',
} as const;
