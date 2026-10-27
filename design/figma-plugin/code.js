/**
 * Portfolio Design System builder.
 *
 * Builds the whole design system into the open Figma file: variables, text,
 * effect and grid styles, icons, components, documentation and page
 * templates. Re-running it deletes what a previous run created (matched by
 * exact page, collection and style names) and builds everything again, so the
 * file always mirrors this script.
 *
 * Token values mirror src/app/globals.css. Change both together.
 */

const SITE = 'https://phymilad.vercel.app';
const DESKTOP = 1440;
const MOBILE = 390;
const CONTAINER = 1152;
const GUTTER = (DESKTOP - CONTAINER) / 2;
const MOBILE_SIDE = '5';
const PROSE = 720;

/* ------------------------------------------------------------------------ */
/* Tokens                                                                    */
/* ------------------------------------------------------------------------ */

const PRIMITIVES = {
  'neutral/0': '#FFFFFF',
  'neutral/25': '#FAFAFB',
  'neutral/50': '#F5F6F8',
  'neutral/100': '#EEF0F3',
  'neutral/200': '#E2E5EA',
  'neutral/300': '#CDD2DA',
  'neutral/400': '#9AA2AF',
  'neutral/500': '#6B7380',
  'neutral/600': '#4B5260',
  'neutral/700': '#343943',
  'neutral/800': '#22262D',
  'neutral/850': '#191C22',
  'neutral/900': '#121418',
  'neutral/950': '#0B0C0F',
  'cobalt/50': '#EEF2FF',
  'cobalt/100': '#DDE5FF',
  'cobalt/200': '#BCCBFF',
  'cobalt/300': '#91A9FF',
  'cobalt/400': '#6684FA',
  'cobalt/500': '#3E5FF0',
  'cobalt/600': '#2F4BDB',
  'cobalt/700': '#2539B3',
  'cobalt/800': '#1F2F8C',
  'cobalt/900': '#1B2869',
  'cobalt/950': '#121A42',
  'green/100': '#DDF7E8',
  'green/400': '#3CCB7F',
  'green/500': '#12A150',
  'green/600': '#0E7F3F',
  'green/900': '#0B3A20',
  'amber/100': '#FDF1D6',
  'amber/400': '#F5B83D',
  'amber/500': '#E59A0B',
  'amber/600': '#A86A04',
  'amber/900': '#4A3104',
  'red/100': '#FDE4E4',
  'red/400': '#F2777B',
  'red/500': '#E5484D',
  'red/600': '#C6303A',
  'red/900': '#4F1517',
};

const BG = ['FRAME_FILL', 'SHAPE_FILL'];
const TX = ['TEXT_FILL'];
const BD = ['STROKE_COLOR'];
const IC = ['SHAPE_FILL', 'STROKE_COLOR'];

// [figma name, css custom property, scopes, light primitive, dark primitive]
const SEMANTIC = [
  ['color/bg/surface', 'surface', BG, 'neutral/0', 'neutral/950'],
  ['color/bg/raised', 'surface-raised', BG, 'neutral/0', 'neutral/900'],
  ['color/bg/sunken', 'surface-sunken', BG, 'neutral/50', 'neutral/850'],
  ['color/bg/hover', 'surface-hover', BG, 'neutral/100', 'neutral/800'],
  ['color/bg/inverse', 'surface-inverse', BG, 'neutral/900', 'neutral/50'],
  ['color/bg/accent', 'accent', BG, 'cobalt/600', 'cobalt/400'],
  ['color/bg/accent-hover', 'accent-hover', BG, 'cobalt/700', 'cobalt/300'],
  ['color/bg/accent-subtle', 'accent-subtle', BG, 'cobalt/50', 'cobalt/950'],
  ['color/bg/success-subtle', 'success-subtle', BG, 'green/100', 'green/900'],
  ['color/bg/warning-subtle', 'warning-subtle', BG, 'amber/100', 'amber/900'],
  ['color/bg/danger-subtle', 'danger-subtle', BG, 'red/100', 'red/900'],
  ['color/text/default', 'fg', TX, 'neutral/900', 'neutral/50'],
  ['color/text/muted', 'fg-muted', TX, 'neutral/600', 'neutral/300'],
  ['color/text/subtle', 'fg-subtle', TX, 'neutral/500', 'neutral/400'],
  ['color/text/accent', 'accent-text', TX, 'cobalt/600', 'cobalt/300'],
  ['color/text/accent-strong', 'accent-text-strong', TX, 'cobalt/700', 'cobalt/200'],
  ['color/text/on-accent', 'accent-fg', TX, 'neutral/0', 'neutral/950'],
  ['color/text/inverse', 'fg-inverse', TX, 'neutral/50', 'neutral/900'],
  ['color/text/success', 'success', TX, 'green/600', 'green/400'],
  ['color/text/warning', 'warning', TX, 'amber/600', 'amber/400'],
  ['color/text/danger', 'danger', TX, 'red/600', 'red/400'],
  ['color/border/default', 'border', BD, 'neutral/200', 'neutral/800'],
  ['color/border/strong', 'border-strong', BD, 'neutral/300', 'neutral/700'],
  ['color/border/accent', 'border-accent', BD, 'cobalt/600', 'cobalt/400'],
  ['color/border/focus', 'focus-ring', BD, 'cobalt/500', 'cobalt/400'],
  ['color/icon/default', 'fg', IC, 'neutral/900', 'neutral/50'],
  ['color/icon/muted', 'fg-subtle', IC, 'neutral/500', 'neutral/400'],
  ['color/icon/accent', 'accent-text', IC, 'cobalt/600', 'cobalt/300'],
  ['color/icon/on-accent', 'accent-fg', IC, 'neutral/0', 'neutral/950'],
  ['color/icon/success', 'success', IC, 'green/500', 'green/400'],
  ['color/icon/warning', 'warning', IC, 'amber/500', 'amber/400'],
  ['color/icon/danger', 'danger', IC, 'red/500', 'red/400'],
];

// Keys follow Tailwind's spacing scale (n x 4px), so space/4 is p-4 / gap-4.
const SPACE = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
};
// Tailwind v4 default radius scale.
const RADIUS = { none: 0, sm: 4, md: 6, lg: 8, xl: 12, '2xl': 16, full: 9999 };

const FONTS = [
  { family: 'Inter', style: 'Regular' },
  { family: 'Geist', style: 'Regular' },
  { family: 'Geist', style: 'Medium' },
  { family: 'Geist', style: 'SemiBold' },
  { family: 'Geist Mono', style: 'Regular' },
  { family: 'Geist Mono', style: 'Medium' },
];

// [name, family, style, size, line height px, letter spacing %, code utility, text case]
const TEXT_STYLES = [
  ['Display/XL', 'Geist', 'SemiBold', 64, 68, -3, 'text-display-xl'],
  ['Display/LG', 'Geist', 'SemiBold', 48, 54, -2.5, 'text-display-lg'],
  ['Heading/H1', 'Geist', 'SemiBold', 40, 48, -2, 'text-h1'],
  ['Heading/H2', 'Geist', 'SemiBold', 30, 38, -1.5, 'text-h2'],
  ['Heading/H3', 'Geist', 'SemiBold', 22, 30, -1, 'text-h3'],
  ['Heading/H4', 'Geist', 'SemiBold', 18, 26, -0.5, 'text-h4'],
  ['Body/LG', 'Geist', 'Regular', 18, 30, 0, 'text-lg'],
  ['Body/MD', 'Geist', 'Regular', 16, 26, 0, 'text-base'],
  ['Body/SM', 'Geist', 'Regular', 14, 22, 0, 'text-sm'],
  ['Wordmark', 'Geist', 'SemiBold', 16, 24, -2.5, 'text-base font-semibold tracking-tight'],
  ['Label/MD', 'Geist', 'Medium', 14, 20, 0, 'text-sm font-medium'],
  ['Label/SM', 'Geist', 'Medium', 13, 18, 0, 'text-[13px] font-medium'],
  ['Mono/MD', 'Geist Mono', 'Regular', 14, 22, 0, 'font-mono text-sm'],
  ['Mono/SM', 'Geist Mono', 'Regular', 13, 20, 0, 'font-mono text-[13px]'],
  ['Mono/XS', 'Geist Mono', 'Regular', 12, 16, 0, 'font-mono text-xs'],
  ['Eyebrow', 'Geist Mono', 'Medium', 12, 16, 8, 'eyebrow', 'UPPER'],
];

// [name, layers of [x, y, blur, spread, alpha]] in neutral/950
const SHADOWS = [
  ['Shadow/XS', [[0, 1, 2, 0, 0.05]]],
  [
    'Shadow/SM',
    [
      [0, 1, 3, 0, 0.08],
      [0, 1, 2, -1, 0.06],
    ],
  ],
  [
    'Shadow/MD',
    [
      [0, 4, 12, -2, 0.08],
      [0, 2, 4, -2, 0.05],
    ],
  ],
  [
    'Shadow/LG',
    [
      [0, 16, 32, -8, 0.14],
      [0, 4, 8, -4, 0.06],
    ],
  ],
];

const COLLECTIONS = ['Primitives', 'Theme · Light', 'Theme · Dark', 'Spacing & Radius'];
const GRID_STYLES = ['Grid/Desktop', 'Grid/Mobile'];

const PAGES = [
  'Cover',
  'Getting started',
  '——— Foundations',
  'Colors',
  'Typography',
  'Spacing & Radius',
  'Elevation & Grid',
  'Icons',
  '——— Components',
  'Buttons & Links',
  'Tags & Badges',
  'Navigation',
  'Cards & Lists',
  'Content',
  '——— Templates',
  'Templates · Desktop',
  'Templates · Mobile',
];

/* Lucide icons (ISC licence), 24px grid, 2px stroke. */
const ICON_SVGS = {
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  rss: '<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  calendar:
    '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'map-pin':
    '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><path d="M12 19h8"/>',
  'file-text':
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  hash: '<path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3 8 21"/><path d="M16 3l-2 18"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  lightbulb:
    '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  'triangle-alert':
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
};

/* ------------------------------------------------------------------------ */
/* Content, taken from src/content and content/blog                          */
/* ------------------------------------------------------------------------ */

const COPY = {
  name: 'Milad Mohammadi',
  role: 'Software Engineer',
  tagline:
    'I turn complex ideas into fast, maintainable web applications, from frontend to backend, and bring AI into the work where it genuinely helps. I write about what I learn along the way.',
  lead: [
    'I am a software engineer based in the Netherlands, working across the stack: interfaces in React and Next.js, APIs in Node.js and NestJS, and the databases behind them. I like taking a complicated idea and turning it into a product that is simple to use.',
    'AI is part of how I work every day. I use coding assistants to move faster on the parts that are well understood, and I build agents and tool-calling workflows where they take real work off people’s hands.',
    'Building things that other people have to maintain has made me care about architecture, clarity and the boring parts that keep a product alive.',
  ],
  location: 'The Netherlands',
  focus: 'Full-stack web applications and AI workflows',
  whatIDo:
    'I build web applications end to end: React and Next.js on the frontend, Node.js and NestJS on the backend, and PostgreSQL, MongoDB and Redis underneath. I try to give users a good experience without cutting corners on architecture, and I build things so they keep working as the traffic and the feature list grow.',
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
  workIntro:
    'Production platforms I have built or worked on. Each one has a short video walkthrough.',
  contactTitle: 'Get in touch',
  contactBody:
    'The fastest way to reach me is LinkedIn. You can also find some of my projects on GitHub.',
  projectsIntro:
    'Some of the production platforms I have built or worked on, each with a short video walkthrough.',
  blogIntro: 'Writing on building software: frontend, backend, architecture, and working with AI.',
  footer:
    'Software engineer building web applications from frontend to backend, with AI in the workflow, and writing about what I learn along the way.',
};

const STACK = [
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
];

const PROJECTS = [
  {
    title: 'Mdotcar: Real-Time Roadside Assistance',
    short:
      'Mdotcar is a roadside assistance platform that connects clients with experts in real time. The video follows one request from start to finish.',
    image: 'mdotcarClient',
    skills: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Material-UI',
      'Leaflet',
      'Storybook',
      'Vitest',
      'Figma',
    ],
  },
  {
    title: 'Mdotcar: Admin Panel',
    short:
      'The Mdotcar admin panel is where the whole platform is run from. Admins manage client and expert accounts, follow service requests and check the analytics.',
    image: 'mdotcarAdmin',
    skills: ['React.js', 'TypeScript', 'Redux Toolkit', 'Material-UI', 'Chart.js', 'Storybook'],
  },
  {
    title: 'Rsoon: Investment Consulting Platform',
    short:
      'Rsoon is an investment consulting platform. It gives users personal advice, live market data and tools to track and manage their portfolio.',
    image: 'rsoon',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Storybook', 'Jira'],
  },
  {
    title: 'Keydoc: Document Management System',
    short:
      "Keydoc is a document management system. It keeps a company's documents in one place, makes them easy to find and controls who can access what.",
    image: 'keydoc',
    skills: ['React.js', 'Javascript', 'styled-components', 'Redux', 'Material-UI', 'Git'],
  },
];

const POSTS = [
  [
    '27 October 2026',
    '9 min read',
    'Part 20',
    'Next.js Is Being Designed for Agents Too',
    'A managed AGENTS.md block that opens with "This is NOT the Next.js you know", error pages written for agents, and a fix menu that encodes product decisions.',
    ['nextjs', 'ai'],
  ],
  [
    '23 October 2026',
    '8 min read',
    'Part 19',
    'Upgrading Next.js Without a Big Bang',
    'Codemods, version skew and the order of operations that keeps a large App Router upgrade boring.',
    ['nextjs', 'production'],
  ],
  [
    '9 October 2026',
    '8 min read',
    'Part 15',
    'Auth Belongs Next to the Data, Not the Layout',
    'Layouts do not re-render on client navigation, so an auth check there is not re-run. The Data Access Layer pattern puts the check where it cannot be skipped.',
    ['nextjs', 'security'],
  ],
  [
    '8 September 2026',
    '8 min read',
    'Part 6',
    'The Mental Model Behind use cache in Next.js 16',
    'Next.js 16 made caching explicit. What use cache actually stores, where it lives, how long it survives, and why revalidateTag and updateTag are not interchangeable.',
    ['nextjs', 'caching'],
  ],
  [
    '25 August 2026',
    '8 min read',
    'Part 2',
    'Data Fetching in Next.js Without Hidden Waterfalls',
    'Two awaits in a row can double the wait for your data. The patterns the Next.js docs give you to start requests early and share them safely.',
    ['nextjs', 'fundamentals'],
  ],
  [
    '26 October 2026',
    '8 min read',
    'Part 1',
    "Why 'use client' Is a Boundary, Not a Label",
    'Where code runs in the App Router, and why the directive marks an edge in the module graph rather than a property of one component.',
    ['nextjs', 'fundamentals'],
  ],
];

const IMAGES = {
  portrait: '/images/milad-mohammadi.png',
  mdotcarClient: '/images/projects/mdotcar-client-desktop.png',
  mdotcarAdmin: '/images/projects/mdotcar-admin-desktop.png',
  rsoon: '/images/projects/rsoon-desktop.png',
  keydoc: '/images/projects/keydoc-desktop.png',
};

/* ------------------------------------------------------------------------ */
/* Registries                                                                */
/* ------------------------------------------------------------------------ */

const V = { prim: {}, light: {}, dark: {}, space: {}, byId: {} };
const S = { text: {}, effect: {}, grid: {} };
const R = {}; // component name -> { set | comp, keys: { prop: key } }
const ICONS = {};
const IMG = {};
const errors = [];

/* ------------------------------------------------------------------------ */
/* Helpers                                                                   */
/* ------------------------------------------------------------------------ */

function hex(h) {
  const c = h.replace('#', '');
  return {
    r: parseInt(c.slice(0, 2), 16) / 255,
    g: parseInt(c.slice(2, 4), 16) / 255,
    b: parseInt(c.slice(4, 6), 16) / 255,
  };
}

function rgba(h, a) {
  return Object.assign(hex(h), { a: a });
}

/** A solid paint bound to a theme colour token. */
function p(name, theme) {
  const v = (theme === 'dark' ? V.dark : V.light)[name];
  if (!v) throw new Error('Unknown colour token: ' + name);
  return figma.variables.setBoundVariableForPaint(
    { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
    'color',
    v,
  );
}

function primPaint(name) {
  const v = V.prim[name];
  if (!v) throw new Error('Unknown primitive: ' + name);
  return figma.variables.setBoundVariableForPaint(
    { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
    'color',
    v,
  );
}

function sp(key) {
  const v = V.space['space/' + key];
  if (!v) throw new Error('Unknown space token: ' + key);
  return v;
}

function bindPad(n, t, r, b, l) {
  if (r === undefined) r = t;
  if (b === undefined) b = t;
  if (l === undefined) l = r;
  const set = (field, k) => {
    if (typeof k === 'number') n[field] = k;
    else n.setBoundVariable(field, sp(k));
  };
  set('paddingTop', t);
  set('paddingRight', r);
  set('paddingBottom', b);
  set('paddingLeft', l);
}

function bindGap(n, k, field) {
  field = field || 'itemSpacing';
  if (typeof k === 'number') n[field] = k;
  else n.setBoundVariable(field, sp(k));
}

function bindRadius(n, k) {
  const v = V.space['radius/' + k];
  if (!v) throw new Error('Unknown radius token: ' + k);
  for (const f of ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius']) {
    n.setBoundVariable(f, v);
  }
}

/** sides: any of 't', 'r', 'b', 'l'. Omitted means all four. */
function setStroke(n, color, sides, weight) {
  weight = weight || 1;
  n.strokes = [p(color)];
  n.strokeAlign = 'INSIDE';
  if (!sides) {
    n.strokeWeight = weight;
    return;
  }
  n.strokeTopWeight = sides.indexOf('t') !== -1 ? weight : 0;
  n.strokeRightWeight = sides.indexOf('r') !== -1 ? weight : 0;
  n.strokeBottomWeight = sides.indexOf('b') !== -1 ? weight : 0;
  n.strokeLeftWeight = sides.indexOf('l') !== -1 ? weight : 0;
}

function layout(n, dir, o) {
  o = o || {};
  n.layoutMode = dir;
  n.primaryAxisSizingMode = 'AUTO';
  n.counterAxisSizingMode = 'AUTO';
  n.fills = o.fill ? [p(o.fill)] : [];
  n.clipsContent = !!o.clip;
  if (o.gap !== undefined) bindGap(n, o.gap);
  if (o.pad) bindPad(n, o.pad[0], o.pad[1], o.pad[2], o.pad[3]);
  if (o.stroke) setStroke(n, o.stroke, o.sides, o.strokeWeight);
  if (o.radius) bindRadius(n, o.radius);
  if (o.align) n.counterAxisAlignItems = o.align;
  if (o.justify) n.primaryAxisAlignItems = o.justify;
  return n;
}

function frame(name, dir, o) {
  const f = figma.createFrame();
  f.name = name;
  return layout(f, dir, o);
}

function component(name, dir, o) {
  const c = figma.createComponent();
  c.name = name;
  return layout(c, dir, o);
}

/** A plain (non auto-layout) frame. */
function box(name, w, h, o) {
  o = o || {};
  const f = figma.createFrame();
  f.name = name;
  f.resize(w, h);
  f.fills = o.fill ? [p(o.fill)] : [];
  f.clipsContent = o.clip !== false;
  if (o.stroke) setStroke(f, o.stroke, o.sides);
  if (o.radius) bindRadius(f, o.radius);
  return f;
}

function add(parent, child, o) {
  parent.appendChild(child);
  o = o || {};
  if (child.type === 'TEXT' && o.w === 'FILL') child.textAutoResize = 'HEIGHT';
  if (o.w) child.layoutSizingHorizontal = o.w;
  if (o.h) child.layoutSizingVertical = o.h;
  return child;
}

/** Fixed width, hugging height. */
function fixW(n, w) {
  n.resize(w, Math.max(1, n.height));
  n.layoutSizingHorizontal = 'FIXED';
  if (n.layoutMode && n.layoutMode !== 'NONE') n.layoutSizingVertical = 'HUG';
  return n;
}

function fixSize(n, w, h) {
  n.resize(w, h);
  n.layoutSizingHorizontal = 'FIXED';
  n.layoutSizingVertical = 'FIXED';
  return n;
}

/** Wrapping rows need a fixed or filled width first. */
function wrap(n, rowGap) {
  n.layoutWrap = 'WRAP';
  bindGap(n, rowGap || '2', 'counterAxisSpacing');
  return n;
}

async function text(chars, style, color, o) {
  o = o || {};
  const st = S.text[style];
  if (!st) throw new Error('Unknown text style: ' + style);
  const t = figma.createText();
  await t.setTextStyleIdAsync(st.id);
  t.characters = chars;
  if (color) t.fills = [p(color)];
  t.name = o.name || chars.slice(0, 40);
  if (o.align) t.textAlignHorizontal = o.align;
  if (o.underline) t.textDecoration = 'UNDERLINE';
  if (o.width) {
    t.resize(o.width, t.height);
    t.textAutoResize = 'HEIGHT';
  }
  return t;
}

async function addText(parent, chars, style, color, o) {
  o = o || {};
  const t = await text(chars, style, color, o);
  add(parent, t, o.fill ? { w: 'FILL' } : undefined);
  return t;
}

function divider(parent, color) {
  const r = figma.createRectangle();
  r.name = 'divider';
  r.resize(100, 1);
  r.fills = [p(color || 'color/border/default')];
  add(parent, r, { w: 'FILL' });
  return r;
}

function vline(parent, h) {
  const r = figma.createRectangle();
  r.name = 'divider';
  r.resize(1, h);
  r.fills = [p('color/border/default')];
  parent.appendChild(r);
  return r;
}

function parseVariant(name) {
  const out = {};
  for (const part of name.split(', ')) {
    const kv = part.split('=');
    out[kv[0]] = kv[1];
  }
  return out;
}

function cartesian(axes) {
  let out = [{}];
  for (const axis of axes) {
    const next = [];
    for (const o of out) {
      for (const v of axis[1]) {
        const copy = Object.assign({}, o);
        copy[axis[0]] = v;
        next.push(copy);
      }
    }
    out = next;
  }
  return out;
}

function step(msg) {
  figma.notify('Design system · ' + msg, { timeout: 1500 });
}

async function phase(name, fn) {
  step(name);
  try {
    await fn();
  } catch (e) {
    errors.push(name + ': ' + (e && e.message ? e.message : String(e)));
    console.error(name, e);
  }
}

/* ------------------------------------------------------------------------ */
/* Icons                                                                     */
/* ------------------------------------------------------------------------ */

/** Stroke attributes go on every shape: Figma's importer does not reliably inherit them from <svg>. */
function svg(inner) {
  const shapes = inner.replace(
    /<(path|circle|rect|polyline|polygon|line)\b/g,
    '<$1 fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"',
  );
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
    shapes +
    '</svg>'
  );
}

function recolorIcon(root, color) {
  for (const n of root.findAll((c) => 'strokes' in c)) {
    if (n.type === 'FRAME' || n.type === 'GROUP' || n.type === 'INSTANCE') continue;
    if (n.strokes.length) n.strokes = [p(color)];
    if (Array.isArray(n.fills) && n.fills.length) n.fills = [p(color)];
  }
}

function buildIcon(name) {
  const node = figma.createNodeFromSvg(svg(ICON_SVGS[name]));
  const c = figma.createComponent();
  c.name = 'Icon/' + name;
  c.resize(24, 24);
  c.fills = [];
  c.clipsContent = false;
  for (const child of node.children.slice()) c.appendChild(child);
  node.remove();
  recolorIcon(c, 'color/icon/default');
  c.description =
    'Lucide "' + name + '". Swap through the icon properties of Button, Icon button and friends.';
  ICONS[name] = c;
  return c;
}

/** An icon instance. Icons are drawn at 24px and rescaled so strokes scale with them. */
function icon(name, size, color) {
  const c = ICONS[name];
  if (!c) throw new Error('Unknown icon: ' + name);
  const i = c.createInstance();
  if (size && size !== 24) i.rescale(size / 24);
  if (color && color !== 'color/icon/default') recolorIcon(i, color);
  i.name = 'icon';
  return i;
}

/* ------------------------------------------------------------------------ */
/* Component plumbing                                                        */
/* ------------------------------------------------------------------------ */

function variantName(o) {
  return Object.keys(o)
    .map((k) => k + '=' + o[k])
    .join(', ');
}

function styleSet(set) {
  set.fills = [p('color/bg/sunken')];
  set.strokes = [p('color/border/strong')];
  set.strokeWeight = 1;
  set.dashPattern = [4, 4];
  set.cornerRadius = 16;
}

/** Lays variants out as a grid: last axis across, the other axes down. */
function layoutVariants(set, axes) {
  const colAxis = axes[axes.length - 1];
  const rows = cartesian(axes.slice(0, -1));
  const GAP = 24;
  const PAD = 32;
  const colW = colAxis[1].map(() => 0);
  const rowH = rows.map(() => 0);
  const placed = [];
  for (const child of set.children) {
    const props = parseVariant(child.name);
    const ci = colAxis[1].indexOf(props[colAxis[0]]);
    const ri = rows.findIndex((r) => Object.keys(r).every((k) => r[k] === props[k]));
    colW[ci] = Math.max(colW[ci], child.width);
    rowH[ri] = Math.max(rowH[ri], child.height);
    placed.push([child, ci, ri]);
  }
  const colX = [];
  const rowY = [];
  let acc = PAD;
  for (const w of colW) {
    colX.push(acc);
    acc += w + GAP;
  }
  acc = PAD;
  for (const h of rowH) {
    rowY.push(acc);
    acc += h + GAP;
  }
  for (const entry of placed) {
    entry[0].x = colX[entry[1]];
    entry[0].y = rowY[entry[2]];
  }
  set.resizeWithoutConstraints(
    colX[colX.length - 1] + colW[colW.length - 1] + PAD,
    rowY[rowY.length - 1] + rowH[rowH.length - 1] + PAD,
  );
  return { colAxis: colAxis, rows: rows, colX: colX, rowY: rowY, rowH: rowH };
}

async function makeSet(name, axes, build, description) {
  const comps = [];
  for (const combo of cartesian(axes)) {
    const c = await build(combo);
    c.name = variantName(combo);
    comps.push(c);
  }
  const set = figma.combineAsVariants(comps, figma.currentPage);
  set.name = name;
  if (description) set.description = description;
  const info = layoutVariants(set, axes);
  styleSet(set);
  R[name] = { set: set, keys: {} };
  return { node: set, info: info };
}

async function single(name, build, description) {
  const c = await build();
  c.name = name;
  if (description) c.description = description;
  R[name] = { comp: c, keys: {} };
  return { node: c, info: null };
}

/** Child layers with the given name, not descending into nested instances. */
function layersNamed(root, name) {
  const out = [];
  const walk = (n) => {
    for (const c of n.children || []) {
      if (c.name === name) out.push(c);
      if (c.type !== 'INSTANCE' && 'children' in c) walk(c);
    }
  };
  walk(root);
  return out;
}

/** defs: [property, type, default, layer name]. TEXT defaults come from the layer itself. */
function wire(name, defs) {
  const reg = R[name];
  const owner = reg.set || reg.comp;
  const variants = reg.set ? reg.set.children : [reg.comp];
  for (const d of defs) {
    let def = d[2];
    if (d[1] === 'TEXT') {
      const first = layersNamed(variants[0], d[3])[0];
      if (first && first.type === 'TEXT') def = first.characters;
    }
    const key = owner.addComponentProperty(d[0], d[1], def);
    reg.keys[d[0]] = key;
    const field = d[1] === 'TEXT' ? 'characters' : d[1] === 'BOOLEAN' ? 'visible' : 'mainComponent';
    for (const v of variants) {
      for (const layer of layersNamed(v, d[3])) {
        const refs = Object.assign({}, layer.componentPropertyReferences || {});
        refs[field] = key;
        layer.componentPropertyReferences = refs;
      }
    }
  }
}

function inst(name, variant, props) {
  const reg = R[name];
  if (!reg) throw new Error('Unknown component: ' + name);
  let comp = reg.comp;
  if (reg.set) {
    const want = variant || {};
    comp = reg.set.children.find((c) => {
      const got = parseVariant(c.name);
      return Object.keys(want).every((k) => got[k] === want[k]);
    });
    if (!comp) throw new Error('No variant ' + JSON.stringify(want) + ' in ' + name);
  }
  const i = comp.createInstance();
  if (props) setProps(i, name, props);
  return i;
}

function setProps(instance, name, props) {
  const reg = R[name];
  const out = {};
  for (const k of Object.keys(props)) {
    if (!reg.keys[k]) throw new Error(name + ' has no property "' + k + '"');
    out[reg.keys[k]] = props[k];
  }
  instance.setProperties(out);
}

function nested(instance, layerName) {
  const n = instance.findOne((c) => c.name === layerName);
  if (!n) throw new Error('No layer "' + layerName + '" in ' + instance.name);
  return n;
}

function setTags(instance, tags, max) {
  for (let i = 1; i <= max; i++) {
    const t = nested(instance, 'tag-' + i);
    if (tags[i - 1]) setProps(t, 'Tag', { Label: tags[i - 1] });
    else t.visible = false;
  }
}

function imageFill(node, key, mode) {
  if (IMG[key]) node.fills = [{ type: 'IMAGE', imageHash: IMG[key], scaleMode: mode || 'FILL' }];
}

/* ------------------------------------------------------------------------ */
/* Reset                                                                     */
/* ------------------------------------------------------------------------ */

async function resetFile() {
  const builder = figma.createPage();
  builder.name = '__building';
  await figma.setCurrentPageAsync(builder);

  for (const pg of figma.root.children.slice()) {
    if (pg === builder) continue;
    await pg.loadAsync();
    const ours = PAGES.indexOf(pg.name) !== -1;
    const emptyDefault = /^Page \d+$/.test(pg.name) && pg.children.length === 0;
    if (ours || emptyDefault) pg.remove();
  }

  for (const c of await figma.variables.getLocalVariableCollectionsAsync()) {
    if (COLLECTIONS.indexOf(c.name) !== -1) c.remove();
  }

  const styleNames = TEXT_STYLES.map((s) => s[0])
    .concat(SHADOWS.map((s) => s[0]))
    .concat(['Focus/Ring'])
    .concat(GRID_STYLES);
  const styles = []
    .concat(await figma.getLocalTextStylesAsync())
    .concat(await figma.getLocalEffectStylesAsync())
    .concat(await figma.getLocalGridStylesAsync());
  for (const s of styles) if (styleNames.indexOf(s.name) !== -1) s.remove();

  const pages = {};
  for (const name of PAGES) {
    const pg = figma.createPage();
    pg.name = name;
    pages[name] = pg;
  }
  return { pages: pages, builder: builder };
}

/* ------------------------------------------------------------------------ */
/* Foundations: variables and styles                                         */
/* ------------------------------------------------------------------------ */

async function buildVariables() {
  const coll = (name, mode) => {
    const c = figma.variables.createVariableCollection(name);
    c.renameMode(c.modes[0].modeId, mode);
    return c;
  };
  const prim = coll('Primitives', 'Value');
  const light = coll('Theme · Light', 'Light');
  const dark = coll('Theme · Dark', 'Dark');
  const spacing = coll('Spacing & Radius', 'Value');

  for (const name of Object.keys(PRIMITIVES)) {
    const v = figma.variables.createVariable(name, prim, 'COLOR');
    v.setValueForMode(prim.modes[0].modeId, hex(PRIMITIVES[name]));
    v.scopes = [];
    v.setVariableCodeSyntax('WEB', 'var(--' + name.replace('/', '-') + ')');
    V.prim[name] = v;
    V.byId[v.id] = { name: name, theme: 'prim' };
  }

  for (const row of SEMANTIC) {
    const name = row[0];
    const css = row[1];
    const pairs = [
      [light, row[3], V.light, 'light'],
      [dark, row[4], V.dark, 'dark'],
    ];
    for (const pair of pairs) {
      const v = figma.variables.createVariable(name, pair[0], 'COLOR');
      v.setValueForMode(
        pair[0].modes[0].modeId,
        figma.variables.createVariableAlias(V.prim[pair[1]]),
      );
      v.scopes = row[2];
      v.setVariableCodeSyntax('WEB', 'var(--' + css + ')');
      v.description = '--' + css + ' · light ' + row[3] + ' · dark ' + row[4];
      pair[2][name] = v;
      V.byId[v.id] = { name: name, theme: pair[3] };
    }
  }

  const mode = spacing.modes[0].modeId;
  for (const k of Object.keys(SPACE)) {
    const v = figma.variables.createVariable('space/' + k, spacing, 'FLOAT');
    v.setValueForMode(mode, SPACE[k]);
    v.scopes = ['GAP'];
    v.setVariableCodeSyntax('WEB', 'calc(var(--spacing) * ' + k + ')');
    V.space['space/' + k] = v;
  }
  for (const k of Object.keys(RADIUS)) {
    const v = figma.variables.createVariable('radius/' + k, spacing, 'FLOAT');
    v.setValueForMode(mode, RADIUS[k]);
    v.scopes = ['CORNER_RADIUS'];
    v.setVariableCodeSyntax('WEB', 'var(--radius-' + k + ')');
    V.space['radius/' + k] = v;
  }
}

async function buildStyles() {
  for (const s of TEXT_STYLES) {
    const ts = figma.createTextStyle();
    ts.name = s[0];
    ts.fontName = { family: s[1], style: s[2] };
    ts.fontSize = s[3];
    ts.lineHeight = { value: s[4], unit: 'PIXELS' };
    ts.letterSpacing = { value: s[5], unit: 'PERCENT' };
    if (s[7]) ts.textCase = s[7];
    ts.description =
      s[1] + ' ' + s[2] + ' · ' + s[3] + '/' + s[4] + ' · ' + s[5] + '% · code: ' + s[6];
    S.text[s[0]] = ts;
  }

  for (const s of SHADOWS) {
    const es = figma.createEffectStyle();
    es.name = s[0];
    es.effects = s[1].map((l) => ({
      type: 'DROP_SHADOW',
      color: rgba(PRIMITIVES['neutral/950'], l[4]),
      offset: { x: l[0], y: l[1] },
      radius: l[2],
      spread: l[3],
      visible: true,
      blendMode: 'NORMAL',
      showShadowBehindNode: false,
    }));
    es.description = 'code: shadow-' + s[0].split('/')[1].toLowerCase();
    S.effect[s[0]] = es;
  }

  const focus = figma.createEffectStyle();
  focus.name = 'Focus/Ring';
  focus.effects = [
    {
      type: 'DROP_SHADOW',
      color: rgba(PRIMITIVES['cobalt/500'], 0.35),
      offset: { x: 0, y: 0 },
      radius: 0,
      spread: 3,
      visible: true,
      blendMode: 'NORMAL',
      showShadowBehindNode: false,
    },
  ];
  focus.description = 'Keyboard focus. code: :focus-visible outline in globals.css';
  S.effect['Focus/Ring'] = focus;

  const desktop = figma.createGridStyle();
  desktop.name = 'Grid/Desktop';
  desktop.layoutGrids = [
    {
      pattern: 'COLUMNS',
      alignment: 'CENTER',
      count: 12,
      gutterSize: 24,
      sectionSize: (CONTAINER - 11 * 24) / 12,
      visible: false,
      color: rgba(PRIMITIVES['cobalt/500'], 0.08),
    },
  ];
  desktop.description = '12 columns in a 1152px container (max-w-6xl), 24px gutters.';
  S.grid['Grid/Desktop'] = desktop;

  const mobile = figma.createGridStyle();
  mobile.name = 'Grid/Mobile';
  mobile.layoutGrids = [
    {
      pattern: 'COLUMNS',
      alignment: 'STRETCH',
      count: 4,
      gutterSize: 16,
      offset: 20,
      visible: false,
      color: rgba(PRIMITIVES['cobalt/500'], 0.08),
    },
  ];
  mobile.description = '4 columns, 20px margins, 16px gutters.';
  S.grid['Grid/Mobile'] = mobile;
}

/* ------------------------------------------------------------------------ */
/* Documentation scaffolding                                                 */
/* ------------------------------------------------------------------------ */

async function docFrame(eyebrow, title, intro, width) {
  width = width || DESKTOP;
  const f = frame(title, 'VERTICAL', {
    gap: '16',
    pad: ['20', '20'],
    fill: 'color/bg/surface',
    radius: '2xl',
  });
  fixW(f, width);
  const head = frame('header', 'VERTICAL', { gap: '4' });
  add(f, head, { w: 'FILL' });
  await addText(head, eyebrow, 'Eyebrow', 'color/text/accent');
  await addText(head, title, 'Display/LG', 'color/text/default');
  if (intro) await addText(head, intro, 'Body/LG', 'color/text/muted', { width: 760 });
  divider(f);
  return f;
}

async function docSection(parent, title, desc) {
  const s = frame(title, 'VERTICAL', { gap: '6' });
  add(parent, s, { w: 'FILL' });
  const head = frame('heading', 'VERTICAL', { gap: '2' });
  add(s, head, { w: 'FILL' });
  await addText(head, title, 'Heading/H3', 'color/text/default');
  if (desc) await addText(head, desc, 'Body/SM', 'color/text/muted', { width: 720 });
  return s;
}

/** Places component sets on a component page, one block under the other. */
async function componentPage(title, intro) {
  const head = await docFrame('Components', title, intro, 1600);
  head.x = 0;
  head.y = 0;
  const cursor = { x: 80, y: head.height + 96 };
  return {
    block: async (built, desc) => {
      const node = built.node;
      const info = built.info;
      const label = frame(node.name + ' / docs', 'VERTICAL', { gap: '2' });
      await addText(label, node.name, 'Heading/H2', 'color/text/default');
      if (desc) await addText(label, desc, 'Body/SM', 'color/text/muted', { width: 720 });
      label.x = cursor.x;
      label.y = cursor.y;
      const rowLabels = info && info.rows.length > 1;
      const gutter = rowLabels ? 200 : 0;
      node.x = cursor.x + gutter;
      node.y = cursor.y + label.height + 56;
      if (info) {
        for (let i = 0; i < info.colAxis[1].length; i++) {
          const t = await text(
            info.colAxis[0] + ' · ' + info.colAxis[1][i],
            'Mono/XS',
            'color/text/subtle',
          );
          t.x = node.x + info.colX[i];
          t.y = node.y - 24;
        }
        if (rowLabels) {
          for (let j = 0; j < info.rows.length; j++) {
            const r = info.rows[j];
            const t = await text(
              Object.keys(r)
                .map((k) => r[k])
                .join(' / '),
              'Mono/XS',
              'color/text/subtle',
              { width: gutter - 24 },
            );
            t.x = cursor.x;
            t.y = node.y + info.rowY[j] + info.rowH[j] / 2 - 8;
          }
        }
      }
      cursor.y = node.y + node.height + 120;
    },
  };
}

/* ------------------------------------------------------------------------ */
/* Components                                                                */
/* ------------------------------------------------------------------------ */

async function buildIconsPage() {
  const doc = await docFrame(
    'Foundations',
    'Icons',
    'Lucide icons on a 24px grid with a 2px stroke. Instances are rescaled to 14, 16 or 20px, which scales the stroke with them. Icon colour comes from the color/icon tokens.',
  );
  const grid = frame('grid', 'HORIZONTAL', { gap: '4' });
  add(doc, grid, { w: 'FILL' });
  wrap(grid, '4');
  for (const name of Object.keys(ICON_SVGS)) {
    const cell = frame(name, 'VERTICAL', {
      gap: '3',
      pad: ['5', '3'],
      align: 'CENTER',
      stroke: 'color/border/default',
      radius: 'lg',
      fill: 'color/bg/raised',
    });
    fixW(cell, 140);
    grid.appendChild(cell);
    cell.appendChild(buildIcon(name));
    await addText(cell, name, 'Mono/XS', 'color/text/muted');
  }
}

async function buildButtonsPage() {
  const page = await componentPage(
    'Buttons & Links',
    'Actions. One primary button per view at most; secondary and ghost carry everything else. Links are for navigation, buttons are for actions.',
  );

  const button = await makeSet(
    'Button',
    [
      ['Variant', ['Primary', 'Secondary', 'Ghost']],
      ['Size', ['SM', 'MD']],
      ['State', ['Default', 'Hover', 'Focus', 'Disabled']],
    ],
    async (v) => {
      const hover = v.State === 'Hover';
      const sm = v.Size === 'SM';
      const c = component('Button', 'HORIZONTAL', {
        gap: sm ? '1.5' : '2',
        pad: sm ? ['1.5', '3'] : ['2.5', '4'],
        radius: 'lg',
        align: 'CENTER',
        justify: 'CENTER',
      });
      let fg = 'default';
      if (v.Variant === 'Primary') {
        c.fills = [p(hover ? 'color/bg/accent-hover' : 'color/bg/accent')];
        fg = 'on-accent';
      } else if (v.Variant === 'Secondary') {
        c.fills = [p(hover ? 'color/bg/hover' : 'color/bg/raised')];
        setStroke(c, 'color/border/strong');
      } else {
        c.fills = hover ? [p('color/bg/hover')] : [];
        fg = hover ? 'default' : 'muted';
      }
      const iconColor = 'color/icon/' + fg;
      const lead = icon('chevron-right', 16, iconColor);
      lead.name = 'icon-leading';
      lead.visible = false;
      c.appendChild(lead);
      await addText(c, 'Button', sm ? 'Label/SM' : 'Label/MD', 'color/text/' + fg, {
        name: 'label',
      });
      const trail = icon('chevron-right', 16, iconColor);
      trail.name = 'icon-trailing';
      trail.visible = false;
      c.appendChild(trail);
      if (v.State === 'Focus') await c.setEffectStyleIdAsync(S.effect['Focus/Ring'].id);
      if (v.State === 'Disabled') c.opacity = 0.45;
      return c;
    },
    'Primary for the one main action in a view, Secondary for alternatives, Ghost for low-emphasis actions in toolbars. Code: <Button variant size>.',
  );
  wire('Button', [
    ['Label', 'TEXT', 'Button', 'label'],
    ['Leading icon', 'BOOLEAN', false, 'icon-leading'],
    ['Trailing icon', 'BOOLEAN', false, 'icon-trailing'],
    ['Leading', 'INSTANCE_SWAP', ICONS['chevron-right'].id, 'icon-leading'],
    ['Trailing', 'INSTANCE_SWAP', ICONS['chevron-right'].id, 'icon-trailing'],
  ]);
  await page.block(
    button,
    'Variant × Size × State. Label and both icons are component properties.',
  );

  const iconButton = await makeSet(
    'Icon button',
    [
      ['Variant', ['Secondary', 'Ghost']],
      ['State', ['Default', 'Hover', 'Focus']],
    ],
    async (v) => {
      const hover = v.State === 'Hover';
      const c = component('Icon button', 'HORIZONTAL', {
        pad: ['2'],
        radius: 'lg',
        align: 'CENTER',
        justify: 'CENTER',
      });
      if (v.Variant === 'Secondary') {
        c.fills = [p(hover ? 'color/bg/hover' : 'color/bg/raised')];
        setStroke(c, 'color/border/default');
      } else {
        c.fills = hover ? [p('color/bg/hover')] : [];
      }
      c.appendChild(icon('github', 20, hover ? 'color/icon/default' : 'color/icon/muted'));
      if (v.State === 'Focus') await c.setEffectStyleIdAsync(S.effect['Focus/Ring'].id);
      return c;
    },
    'Square 36px button for icon-only actions (theme toggle, menu, social). Always give it an aria-label in code.',
  );
  wire('Icon button', [['Icon', 'INSTANCE_SWAP', ICONS.github.id, 'icon']]);
  await page.block(iconButton, 'The icon is an instance-swap property.');

  const link = await makeSet(
    'Link',
    [
      ['Variant', ['Inline', 'Chevron']],
      ['State', ['Default', 'Hover']],
    ],
    async (v) => {
      const hover = v.State === 'Hover';
      const c = component('Link', 'HORIZONTAL', { gap: '1', align: 'CENTER' });
      if (v.Variant === 'Inline') {
        await addText(
          c,
          'Inline link',
          'Body/MD',
          hover ? 'color/text/accent-strong' : 'color/text/accent',
          {
            name: 'label',
            underline: true,
          },
        );
      } else {
        await addText(
          c,
          'View all',
          'Label/MD',
          hover ? 'color/text/accent' : 'color/text/default',
          { name: 'label' },
        );
        c.appendChild(icon('chevron-right', 16, hover ? 'color/icon/accent' : 'color/icon/muted'));
      }
      return c;
    },
    'Inline sits in running text. Chevron leads somewhere else: another page here, or another site in a new tab. Code: <ChevronLink>.',
  );
  wire('Link', [['Label', 'TEXT', 'Link', 'label']]);
  await page.block(link);
}

async function buildTagsPage() {
  const page = await componentPage(
    'Tags & Badges',
    'Small mono labels for machine-ish data: skills, topics, years, status. Tags can be links, badges never are.',
  );

  const tag = await makeSet(
    'Tag',
    [
      ['Variant', ['Neutral', 'Accent', 'Outline']],
      ['State', ['Default', 'Hover']],
    ],
    async (v) => {
      const hover = v.State === 'Hover';
      const c = component('Tag', 'HORIZONTAL', {
        gap: '1.5',
        pad: ['1', '2.5'],
        radius: 'md',
        align: 'CENTER',
      });
      let fg = hover ? 'color/text/default' : 'color/text/muted';
      if (v.Variant === 'Neutral') {
        c.fills = [p('color/bg/sunken')];
        setStroke(c, hover ? 'color/border/strong' : 'color/border/default');
      } else if (v.Variant === 'Accent') {
        c.fills = [p('color/bg/accent-subtle')];
        if (hover) setStroke(c, 'color/border/accent');
        fg = 'color/text/accent';
      } else {
        setStroke(c, hover ? 'color/border/accent' : 'color/border/default');
        if (hover) fg = 'color/text/accent';
      }
      await addText(c, 'Tag', 'Mono/XS', fg, { name: 'label' });
      const count = await addText(c, '12', 'Mono/XS', 'color/text/subtle', { name: 'count' });
      count.visible = false;
      return c;
    },
    'Neutral for skills, Accent for the active filter or a feed link, Outline for quieter lists. Code: <Tag variant>.',
  );
  wire('Tag', [
    ['Label', 'TEXT', 'Tag', 'label'],
    ['Show count', 'BOOLEAN', false, 'count'],
    ['Count', 'TEXT', '12', 'count'],
  ]);
  await page.block(tag);

  const tones = {
    Accent: ['color/bg/accent-subtle', 'color/text/accent', 'color/icon/accent'],
    Success: ['color/bg/success-subtle', 'color/text/success', 'color/icon/success'],
    Warning: ['color/bg/warning-subtle', 'color/text/warning', 'color/icon/warning'],
    Neutral: ['color/bg/sunken', 'color/text/muted', 'color/icon/muted'],
  };
  const badge = await makeSet(
    'Badge',
    [['Tone', ['Accent', 'Success', 'Warning', 'Neutral']]],
    async (v) => {
      const t = tones[v.Tone];
      const c = component('Badge', 'HORIZONTAL', {
        gap: '2',
        pad: ['1', '2.5'],
        radius: 'full',
        align: 'CENTER',
        fill: t[0],
      });
      if (v.Tone === 'Neutral') setStroke(c, 'color/border/default');
      const dot = figma.createEllipse();
      dot.name = 'dot';
      dot.resize(6, 6);
      dot.fills = [p(t[2])];
      c.appendChild(dot);
      await addText(c, 'Badge', 'Mono/XS', t[1], { name: 'label' });
      return c;
    },
    'Status pills: a series announcement, a draft, an error code. Usually static; a series badge may link to its tag page. Code: <Badge tone href?>.',
  );
  wire('Badge', [
    ['Label', 'TEXT', 'Badge', 'label'],
    ['Dot', 'BOOLEAN', true, 'dot'],
  ]);
  await page.block(badge);
}

async function buildNavigationPage() {
  const page = await componentPage(
    'Navigation',
    'Wayfinding: header, footer, breadcrumb, table of contents and the previous/next pager. There is no logo mark; the name set in the Wordmark style is the brand.',
  );

  const navLink = await makeSet(
    'Nav link',
    [['State', ['Default', 'Hover', 'Active']]],
    async (v) => {
      const c = component('Nav link', 'HORIZONTAL', {
        pad: ['1.5', '3'],
        radius: 'md',
        align: 'CENTER',
      });
      if (v.State === 'Hover') c.fills = [p('color/bg/hover')];
      if (v.State === 'Active') c.fills = [p('color/bg/sunken')];
      await addText(
        c,
        'Projects',
        'Label/MD',
        v.State === 'Default' ? 'color/text/muted' : 'color/text/default',
        {
          name: 'label',
        },
      );
      return c;
    },
    'Active marks the current section with aria-current="page".',
  );
  wire('Nav link', [['Label', 'TEXT', 'Projects', 'label']]);
  await page.block(navLink);

  const header = await makeSet(
    'Header',
    [['Breakpoint', ['Desktop', 'Mobile', 'Mobile open']]],
    async (v) => {
      const bar = async (width, side) => {
        const b = frame('bar', 'HORIZONTAL', {
          pad: ['3', side],
          justify: 'SPACE_BETWEEN',
          align: 'CENTER',
        });
        await addText(b, COPY.name, 'Wordmark', 'color/text/default', { name: 'name' });
        return b;
      };
      if (v.Breakpoint === 'Desktop') {
        const c = component('Header', 'HORIZONTAL', {
          pad: ['3', GUTTER],
          justify: 'SPACE_BETWEEN',
          align: 'CENTER',
          fill: 'color/bg/surface',
          stroke: 'color/border/default',
          sides: 'b',
        });
        fixW(c, DESKTOP);
        await addText(c, COPY.name, 'Wordmark', 'color/text/default', { name: 'name' });
        const nav = frame('nav', 'HORIZONTAL', { gap: '1', align: 'CENTER' });
        c.appendChild(nav);
        for (const label of ['Projects', 'Blog', 'About']) {
          const n = inst('Nav link', { State: 'Default' }, { Label: label });
          n.name = 'nav-' + label.toLowerCase();
          nav.appendChild(n);
        }
        const spacer = frame('spacer', 'HORIZONTAL', { pad: ['0', '2'] });
        nav.appendChild(spacer);
        vline(spacer, 20);
        const gh = inst(
          'Icon button',
          { Variant: 'Ghost', State: 'Default' },
          { Icon: ICONS.github.id },
        );
        gh.name = 'github';
        nav.appendChild(gh);
        const theme = inst(
          'Icon button',
          { Variant: 'Ghost', State: 'Default' },
          { Icon: ICONS.moon.id },
        );
        theme.name = 'theme';
        nav.appendChild(theme);
        return c;
      }
      const open = v.Breakpoint === 'Mobile open';
      const c = component('Header', 'VERTICAL', {
        fill: 'color/bg/surface',
        stroke: 'color/border/default',
        sides: 'b',
      });
      fixW(c, MOBILE);
      const top = await bar(MOBILE, MOBILE_SIDE);
      add(c, top, { w: 'FILL' });
      const actions = frame('actions', 'HORIZONTAL', { gap: '1', align: 'CENTER' });
      top.appendChild(actions);
      const theme = inst(
        'Icon button',
        { Variant: 'Ghost', State: 'Default' },
        { Icon: ICONS.moon.id },
      );
      theme.name = 'theme';
      actions.appendChild(theme);
      const menu = inst(
        'Icon button',
        { Variant: 'Secondary', State: 'Default' },
        { Icon: (open ? ICONS.x : ICONS.menu).id },
      );
      menu.name = 'menu';
      actions.appendChild(menu);
      if (open) {
        const list = frame('menu', 'VERTICAL', {
          gap: '1',
          pad: ['2', MOBILE_SIDE, '5', MOBILE_SIDE],
          stroke: 'color/border/default',
          sides: 't',
        });
        add(c, list, { w: 'FILL' });
        for (const label of ['Projects', 'Blog', 'About']) {
          const n = inst(
            'Nav link',
            { State: label === 'Blog' ? 'Active' : 'Default' },
            { Label: label },
          );
          n.name = 'nav-' + label.toLowerCase();
          add(list, n, { w: 'FILL' });
        }
      }
      return c;
    },
    'Sticky, 60px, translucent surface with a bottom border. Mobile collapses the nav behind a menu button.',
  );
  await page.block(header);

  const footer = await makeSet(
    'Footer',
    [['Breakpoint', ['Desktop', 'Mobile']]],
    async (v) => {
      const desktop = v.Breakpoint === 'Desktop';
      const side = desktop ? GUTTER : MOBILE_SIDE;
      const c = component('Footer', 'VERTICAL', {
        gap: desktop ? '10' : '8',
        pad: [desktop ? '12' : '10', side, desktop ? '10' : '8', side],
        fill: 'color/bg/surface',
        stroke: 'color/border/default',
        sides: 't',
      });
      fixW(c, desktop ? DESKTOP : MOBILE);
      const top = frame('top', desktop ? 'HORIZONTAL' : 'VERTICAL', {
        gap: '8',
        justify: 'SPACE_BETWEEN',
      });
      add(c, top, { w: 'FILL' });
      const brand = frame('brand', 'VERTICAL', { gap: '3' });
      top.appendChild(brand);
      await addText(brand, COPY.name, 'Wordmark', 'color/text/default');
      await addText(brand, COPY.footer, 'Body/SM', 'color/text/muted', {
        width: desktop ? 340 : 350,
      });
      const cols = frame('columns', 'HORIZONTAL', { gap: desktop ? '16' : '12' });
      top.appendChild(cols);
      const columns = [
        ['Site', ['Projects', 'Blog', 'About']],
        ['Elsewhere', ['GitHub', 'LinkedIn', 'RSS']],
      ];
      for (const col of columns) {
        const f = frame(col[0], 'VERTICAL', { gap: '3' });
        cols.appendChild(f);
        await addText(f, col[0], 'Eyebrow', 'color/text/subtle');
        for (const l of col[1]) await addText(f, l, 'Body/SM', 'color/text/muted');
      }
      divider(c);
      const bottom = frame('bottom', desktop ? 'HORIZONTAL' : 'VERTICAL', {
        gap: '2',
        justify: 'SPACE_BETWEEN',
      });
      add(c, bottom, { w: 'FILL' });
      await addText(bottom, '© 2026 ' + COPY.name, 'Mono/XS', 'color/text/subtle');
      await addText(
        bottom,
        'Built with Next.js · Deployed on Vercel',
        'Mono/XS',
        'color/text/subtle',
      );
      return c;
    },
    'Brand, two link columns, then the copyright line. All metadata in mono.',
  );
  await page.block(footer);

  const breadcrumb = await single(
    'Breadcrumb',
    async () => {
      const c = component('Breadcrumb', 'HORIZONTAL', { gap: '2', align: 'CENTER' });
      await addText(c, 'Projects', 'Mono/XS', 'color/text/subtle', { name: 'parent' });
      await addText(c, '/', 'Mono/XS', 'color/text/subtle', { name: 'sep' });
      await addText(c, 'Current page', 'Mono/XS', 'color/text/muted', { name: 'current' });
      return c;
    },
    'One level is enough on this site: section / page.',
  );
  wire('Breadcrumb', [
    ['Parent', 'TEXT', 'Projects', 'parent'],
    ['Current', 'TEXT', 'Current page', 'current'],
  ]);
  await page.block(breadcrumb);

  const toc = await makeSet(
    'TOC item',
    [
      ['Level', ['H2', 'H3']],
      ['State', ['Default', 'Hover', 'Active']],
    ],
    async (v) => {
      const active = v.State === 'Active';
      const c = component('TOC item', 'HORIZONTAL', {
        pad: ['1', '0', '1', v.Level === 'H2' ? '4' : '8'],
      });
      fixW(c, 240);
      setStroke(c, active ? 'color/border/accent' : 'color/border/default', 'l', active ? 2 : 1);
      const color = active
        ? 'color/text/accent'
        : v.State === 'Hover'
          ? 'color/text/default'
          : 'color/text/muted';
      await addText(c, 'Section heading', 'Body/SM', color, { name: 'label', fill: true });
      return c;
    },
    'Right rail on articles from lg up. The active item follows the heading in view.',
  );
  wire('TOC item', [['Label', 'TEXT', 'Section heading', 'label']]);
  await page.block(toc);

  const pager = await makeSet(
    'Pager',
    [['Direction', ['Previous', 'Next']]],
    async (v) => {
      const next = v.Direction === 'Next';
      const c = component('Pager', 'VERTICAL', {
        gap: '1.5',
        pad: ['5'],
        radius: 'xl',
        stroke: 'color/border/default',
        fill: 'color/bg/raised',
        align: next ? 'MAX' : 'MIN',
      });
      fixW(c, 556);
      const label = frame('label', 'HORIZONTAL', { gap: '1', align: 'CENTER' });
      c.appendChild(label);
      if (!next) label.appendChild(icon('chevron-left', 14, 'color/icon/muted'));
      await addText(label, next ? 'Next' : 'Previous', 'Mono/XS', 'color/text/subtle');
      if (next) label.appendChild(icon('chevron-right', 14, 'color/icon/muted'));
      await addText(c, 'Post title', 'Heading/H4', 'color/text/default', {
        name: 'title',
        fill: true,
        align: next ? 'RIGHT' : 'LEFT',
      });
      return c;
    },
    'Previous / next inside a series.',
  );
  wire('Pager', [['Title', 'TEXT', 'Post title', 'title']]);
  await page.block(pager);
}

async function buildCardsPage() {
  const page = await componentPage(
    'Cards & Lists',
    'Containers and list rows. Lists are separated by hairlines rather than boxed; cards are reserved for things you can click into.',
  );

  const card = await makeSet(
    'Card',
    [['State', ['Default', 'Hover']]],
    async (v) => {
      const hover = v.State === 'Hover';
      const c = component('Card', 'VERTICAL', {
        gap: '2',
        pad: ['6'],
        radius: 'xl',
        fill: 'color/bg/raised',
        stroke: hover ? 'color/border/strong' : 'color/border/default',
      });
      fixW(c, 360);
      await addText(c, 'Card title', 'Heading/H4', 'color/text/default', {
        name: 'title',
        fill: true,
      });
      await addText(
        c,
        'Supporting text that explains the card in a sentence or two.',
        'Body/SM',
        'color/text/muted',
        {
          name: 'body',
          fill: true,
        },
      );
      if (hover) await c.setEffectStyleIdAsync(S.effect['Shadow/MD'].id);
      return c;
    },
    'Base surface: raised, hairline border, 12px radius. Hover adds Shadow/MD and a stronger border.',
  );
  wire('Card', [
    ['Title', 'TEXT', 'Card title', 'title'],
    ['Body', 'TEXT', 'Supporting text.', 'body'],
  ]);
  await page.block(card);

  const fact = await single(
    'Fact',
    async () => {
      const c = component('Fact', 'VERTICAL', { gap: '1', pad: ['4', '5'] });
      fixW(c, 320);
      await addText(c, 'Based in', 'Eyebrow', 'color/text/subtle', { name: 'label' });
      await addText(c, COPY.location, 'Label/MD', 'color/text/default', {
        name: 'value',
        fill: true,
      });
      return c;
    },
    'A label and a short fact, stacked in the About panel. Words, not counts: nothing here should need an edit next year.',
  );
  wire('Fact', [
    ['Label', 'TEXT', 'Based in', 'label'],
    ['Value', 'TEXT', COPY.location, 'value'],
  ]);
  await page.block(fact);

  const highlight = await single(
    'Highlight',
    async () => {
      const c = component('Highlight', 'HORIZONTAL', { gap: '3', align: 'MIN' });
      fixW(c, 560);
      const bullet = frame('bullet', 'HORIZONTAL', {
        align: 'CENTER',
        justify: 'CENTER',
        fill: 'color/bg/accent-subtle',
        radius: 'full',
      });
      c.appendChild(bullet);
      fixSize(bullet, 24, 24);
      bullet.appendChild(icon('check', 14, 'color/icon/accent'));
      await addText(c, 'Real-time updates over WebSockets', 'Body/MD', 'color/text/muted', {
        name: 'text',
        fill: true,
      });
      return c;
    },
    'Checked list item for feature lists, such as what a project video shows.',
  );
  wire('Highlight', [['Text', 'TEXT', 'Highlight', 'text']]);
  await page.block(highlight);

  const sectionHeader = await single(
    'Section header',
    async () => {
      const c = component('Section header', 'VERTICAL', { gap: '4' });
      fixW(c, CONTAINER);
      const row = frame('row', 'HORIZONTAL', { justify: 'SPACE_BETWEEN', align: 'CENTER' });
      add(c, row, { w: 'FILL' });
      await addText(row, 'Section title', 'Heading/H2', 'color/text/default', { name: 'title' });
      const action = inst('Link', { Variant: 'Chevron', State: 'Default' }, { Label: 'View all' });
      action.name = 'action';
      row.appendChild(action);
      divider(c);
      return c;
    },
    'Section title with an optional "view all" link and a hairline.',
  );
  wire('Section header', [
    ['Title', 'TEXT', 'Section title', 'title'],
    ['Show action', 'BOOLEAN', true, 'action'],
  ]);
  await page.block(sectionHeader);

  const tagRow = (parent, n, variant) => {
    const tags = frame('tags', 'HORIZONTAL', { gap: '1.5' });
    for (let i = 1; i <= n; i++) {
      const t = inst('Tag', { Variant: variant || 'Outline', State: 'Default' }, { Label: 'Tag' });
      t.name = 'tag-' + i;
      tags.appendChild(t);
    }
    return tags;
  };

  const projectRow = await makeSet(
    'Project row',
    [
      ['Layout', ['Wide', 'Compact']],
      ['State', ['Default', 'Hover']],
    ],
    async (v) => {
      const hover = v.State === 'Hover';
      const wide = v.Layout === 'Wide';
      const c = component('Project row', wide ? 'HORIZONTAL' : 'VERTICAL', {
        gap: wide ? '8' : '4',
        pad: ['6', '0'],
        align: wide ? 'CENTER' : 'MIN',
        stroke: 'color/border/default',
        sides: 'b',
      });
      fixW(c, wide ? CONTAINER : MOBILE - 40);
      const thumb = box('thumbnail', wide ? 192 : 350, wide ? 120 : 200, {
        fill: 'color/bg/sunken',
        stroke: 'color/border/default',
        radius: 'lg',
      });
      add(c, thumb, wide ? undefined : { w: 'FILL' });
      const main = frame('content', 'VERTICAL', { gap: '1.5' });
      add(c, main, { w: 'FILL' });
      await addText(
        main,
        'Project title',
        'Heading/H3',
        hover ? 'color/text/accent' : 'color/text/default',
        {
          name: 'title',
          fill: true,
        },
      );
      await addText(
        main,
        'One or two sentences about what the project is and who it is for.',
        'Body/SM',
        'color/text/muted',
        {
          name: 'description',
          fill: true,
        },
      );
      const tags = tagRow(main, 3);
      if (wide) {
        c.appendChild(tags);
        fixW(tags, 220);
        tags.primaryAxisAlignItems = 'MAX';
        wrap(tags, '1.5');
        tags.counterAxisAlignContent = 'AUTO';
        c.appendChild(icon('chevron-right', 20, hover ? 'color/icon/accent' : 'color/icon/muted'));
      } else {
        add(main, tags, { w: 'FILL' });
        wrap(tags, '1.5');
      }
      return c;
    },
    'Compact project listing for the home page: thumbnail, title, one line, three skills. The whole row is the link.',
  );
  wire('Project row', [
    ['Title', 'TEXT', 'Project title', 'title'],
    ['Description', 'TEXT', 'Description', 'description'],
  ]);
  await page.block(projectRow);

  const projectCard = await makeSet(
    'Project card',
    [['State', ['Default', 'Hover']]],
    async (v) => {
      const hover = v.State === 'Hover';
      const c = component('Project card', 'VERTICAL', {
        radius: 'xl',
        fill: 'color/bg/raised',
        stroke: hover ? 'color/border/strong' : 'color/border/default',
        clip: true,
      });
      fixW(c, 556);
      const media = frame('media', 'VERTICAL', {
        pad: ['6', '6', '0', '6'],
        fill: 'color/bg/sunken',
      });
      add(c, media, { w: 'FILL' });
      const shot = box('screenshot', 508, 300, {
        fill: 'color/bg/surface',
        stroke: 'color/border/default',
        radius: 'lg',
      });
      add(media, shot, { w: 'FILL' });
      const body = frame('body', 'VERTICAL', { gap: '3', pad: ['6'] });
      add(c, body, { w: 'FILL' });
      await addText(
        body,
        'Project title',
        'Heading/H3',
        hover ? 'color/text/accent' : 'color/text/default',
        {
          name: 'title',
          fill: true,
        },
      );
      await addText(
        body,
        'What the project is, who uses it and what the walkthrough video shows.',
        'Body/SM',
        'color/text/muted',
        {
          name: 'description',
          fill: true,
        },
      );
      const tags = tagRow(body, 4, 'Neutral');
      add(body, tags, { w: 'FILL' });
      wrap(tags, '1.5');
      const more = inst('Tag', { Variant: 'Outline', State: 'Default' }, { Label: '+4' });
      more.name = 'tag-more';
      tags.appendChild(more);
      const foot = frame('footer', 'HORIZONTAL', {
        pad: ['4', '6'],
        justify: 'SPACE_BETWEEN',
        align: 'CENTER',
        stroke: 'color/border/default',
        sides: 't',
      });
      add(c, foot, { w: 'FILL' });
      const cta = inst(
        'Link',
        { Variant: 'Chevron', State: hover ? 'Hover' : 'Default' },
        { Label: 'View project' },
      );
      cta.name = 'cta';
      foot.appendChild(cta);
      const video = frame('video', 'HORIZONTAL', { gap: '1.5', align: 'CENTER' });
      foot.appendChild(video);
      video.appendChild(icon('play', 14, 'color/icon/muted'));
      await addText(video, 'Video walkthrough', 'Mono/XS', 'color/text/subtle');
      if (hover) await c.setEffectStyleIdAsync(S.effect['Shadow/MD'].id);
      return c;
    },
    'Full project card for /projects: screenshot, title, summary, skills and the walkthrough link.',
  );
  wire('Project card', [
    ['Title', 'TEXT', 'Project title', 'title'],
    ['Description', 'TEXT', 'Description', 'description'],
  ]);
  await page.block(projectCard);

  const postItem = await makeSet(
    'Post item',
    [
      ['Layout', ['Wide', 'Compact']],
      ['State', ['Default', 'Hover']],
    ],
    async (v) => {
      const hover = v.State === 'Hover';
      const wide = v.Layout === 'Wide';
      const c = component('Post item', wide ? 'HORIZONTAL' : 'VERTICAL', {
        gap: wide ? '8' : '2',
        pad: [wide ? '6' : '5', '0'],
        align: 'MIN',
        stroke: 'color/border/default',
        sides: 'b',
      });
      fixW(c, wide ? CONTAINER : MOBILE - 40);
      const meta = frame('meta', wide ? 'VERTICAL' : 'HORIZONTAL', { gap: wide ? '1' : '2' });
      add(c, meta, wide ? undefined : { w: 'FILL' });
      if (wide) fixW(meta, 160);
      await addText(meta, '25 August 2026', 'Mono/XS', 'color/text/subtle', { name: 'date' });
      if (!wide) await addText(meta, '·', 'Mono/XS', 'color/text/subtle', { name: 'sep' });
      await addText(meta, '8 min read', 'Mono/XS', 'color/text/subtle', { name: 'reading' });
      const main = frame('content', 'VERTICAL', { gap: '2' });
      add(c, main, { w: 'FILL' });
      await addText(main, 'Next.js Between the Lines · Part 2', 'Mono/XS', 'color/text/accent', {
        name: 'series',
      });
      await addText(
        main,
        'Post title',
        wide ? 'Heading/H3' : 'Heading/H4',
        hover ? 'color/text/accent' : 'color/text/default',
        {
          name: 'title',
          fill: true,
        },
      );
      await addText(
        main,
        'The post description, one or two sentences.',
        wide ? 'Body/MD' : 'Body/SM',
        'color/text/muted',
        {
          name: 'description',
          fill: true,
        },
      );
      const tags = tagRow(main, 2);
      add(main, tags, { w: 'FILL' });
      wrap(tags, '1.5');
      if (wide)
        c.appendChild(icon('chevron-right', 20, hover ? 'color/icon/accent' : 'color/icon/muted'));
      return c;
    },
    'Blog listing row. Dates and reading time in mono, the series line in accent.',
  );
  wire('Post item', [
    ['Date', 'TEXT', '25 August 2026', 'date'],
    ['Reading time', 'TEXT', '8 min read', 'reading'],
    ['Series', 'TEXT', 'Next.js Between the Lines · Part 2', 'series'],
    ['Show series', 'BOOLEAN', true, 'series'],
    ['Title', 'TEXT', 'Post title', 'title'],
    ['Description', 'TEXT', 'Description', 'description'],
    ['Show tags', 'BOOLEAN', true, 'tags'],
  ]);
  await page.block(postItem);
}

const CODE_SAMPLE = [
  '// Both requests start here',
  'const artistData = getArtist(username);',
  'const albumsData = getAlbums(username);',
  '',
  'const [artist, albums] = await Promise.all([artistData, albumsData]);',
].join('\n');

function highlight(t) {
  const src = t.characters;
  const paint = (re, color) => {
    let m;
    while ((m = re.exec(src))) t.setRangeFills(m.index, m.index + m[0].length, [p(color)]);
  };
  paint(/\b(const|await|return|export|default|async|function)\b/g, 'color/text/accent');
  paint(/\b(getArtist|getAlbums|all)\b/g, 'color/text/warning');
  paint(/\/\/.*$/gm, 'color/text/subtle');
}

async function buildContentPage() {
  const page = await componentPage(
    'Content',
    'Long-form building blocks for MDX articles. The reading measure is 720px.',
  );

  const code = await single(
    'Code block',
    async () => {
      const c = component('Code block', 'VERTICAL', {
        radius: 'lg',
        stroke: 'color/border/default',
        fill: 'color/bg/sunken',
        clip: true,
      });
      fixW(c, PROSE);
      const head = frame('header', 'HORIZONTAL', {
        pad: ['2', '4'],
        justify: 'SPACE_BETWEEN',
        align: 'CENTER',
        stroke: 'color/border/default',
        sides: 'b',
      });
      add(c, head, { w: 'FILL' });
      const file = frame('file', 'HORIZONTAL', { gap: '2', align: 'CENTER' });
      head.appendChild(file);
      file.appendChild(icon('file-text', 14, 'color/icon/muted'));
      await addText(file, 'app/artist/[username]/page.tsx', 'Mono/XS', 'color/text/muted', {
        name: 'filename',
      });
      head.appendChild(icon('copy', 14, 'color/icon/muted'));
      const body = frame('body', 'VERTICAL', { pad: ['4'] });
      add(c, body, { w: 'FILL' });
      const t = await addText(body, CODE_SAMPLE, 'Mono/SM', 'color/text/default', { name: 'code' });
      highlight(t);
      return c;
    },
    'Shiki output in code: github-light / github-dark themes on the sunken surface.',
  );
  wire('Code block', [
    ['Filename', 'TEXT', 'app/page.tsx', 'filename'],
    ['Show header', 'BOOLEAN', true, 'header'],
  ]);
  await page.block(code);

  const inline = await single(
    'Inline code',
    async () => {
      const c = component('Inline code', 'HORIZONTAL', {
        pad: ['0.5', '1.5'],
        radius: 'sm',
        fill: 'color/bg/sunken',
        stroke: 'color/border/default',
      });
      await addText(c, 'use cache', 'Mono/SM', 'color/text/default', { name: 'code' });
      return c;
    },
    'Code inside a sentence.',
  );
  wire('Inline code', [['Code', 'TEXT', 'use cache', 'code']]);
  await page.block(inline);

  const tones = {
    Note: ['color/bg/accent-subtle', 'color/icon/accent', 'info'],
    Tip: ['color/bg/success-subtle', 'color/icon/success', 'lightbulb'],
    Warning: ['color/bg/warning-subtle', 'color/icon/warning', 'triangle-alert'],
  };
  const callout = await makeSet(
    'Callout',
    [['Tone', ['Note', 'Tip', 'Warning']]],
    async (v) => {
      const t = tones[v.Tone];
      const c = component('Callout', 'HORIZONTAL', {
        gap: '3',
        pad: ['4'],
        radius: 'lg',
        fill: t[0],
      });
      fixW(c, PROSE);
      c.appendChild(icon(t[2], 18, t[1]));
      const content = frame('content', 'VERTICAL', { gap: '1' });
      add(c, content, { w: 'FILL' });
      await addText(content, 'Good to know', 'Label/MD', 'color/text/default', { name: 'title' });
      await addText(
        content,
        'A short aside that the reader should not miss.',
        'Body/SM',
        'color/text/muted',
        {
          name: 'body',
          fill: true,
        },
      );
      return c;
    },
    'Asides in articles. Markdown blockquotes render as Note.',
  );
  wire('Callout', [
    ['Title', 'TEXT', 'Note', 'title'],
    ['Body', 'TEXT', 'Body', 'body'],
  ]);
  await page.block(callout);
}

/* ------------------------------------------------------------------------ */
/* Foundation documentation pages                                            */
/* ------------------------------------------------------------------------ */

async function buildColorsPage() {
  const doc = await docFrame(
    'Foundations',
    'Colors',
    'Cool neutrals and a single cobalt accent. Components only use the semantic tokens; primitives exist to be aliased. Light and Dark are separate collections with identical names because the file is on a one-mode plan.',
  );

  const prims = await docSection(
    doc,
    'Primitives',
    'Raw values. Hidden from pickers; alias them, never apply them.',
  );
  const families = {};
  for (const name of Object.keys(PRIMITIVES)) {
    const fam = name.split('/')[0];
    (families[fam] = families[fam] || []).push(name);
  }
  for (const fam of Object.keys(families)) {
    const row = frame(fam, 'VERTICAL', { gap: '3' });
    add(prims, row, { w: 'FILL' });
    await addText(row, fam, 'Label/MD', 'color/text/default');
    const swatches = frame('swatches', 'HORIZONTAL', { gap: '2' });
    add(row, swatches, { w: 'FILL' });
    for (const name of families[fam]) {
      const cell = frame(name, 'VERTICAL', { gap: '1.5' });
      swatches.appendChild(cell);
      const chip = box('chip', 80, 56, { stroke: 'color/border/default', radius: 'md' });
      chip.fills = [primPaint(name)];
      cell.appendChild(chip);
      await addText(cell, name.split('/')[1], 'Mono/XS', 'color/text/default');
      await addText(cell, PRIMITIVES[name], 'Mono/XS', 'color/text/subtle');
    }
  }

  const sem = await docSection(
    doc,
    'Semantic tokens',
    'What components bind to. The CSS column is the custom property in globals.css, which Tailwind exposes as utilities (bg-surface, text-fg-muted, border-line…).',
  );
  const groups = ['bg', 'text', 'border', 'icon'];
  for (const g of groups) {
    const table = frame(g, 'VERTICAL', {});
    add(sem, table, { w: 'FILL' });
    await addText(table, 'color/' + g, 'Eyebrow', 'color/text/subtle');
    for (const row of SEMANTIC.filter((r) => r[0].split('/')[1] === g)) {
      const r = frame(row[0], 'HORIZONTAL', {
        gap: '6',
        pad: ['3', '0'],
        align: 'CENTER',
        stroke: 'color/border/default',
        sides: 'b',
      });
      add(table, r, { w: 'FILL' });
      await addText(r, row[0], 'Mono/SM', 'color/text/default', { width: 300 });
      await addText(r, '--' + row[1], 'Mono/XS', 'color/text/subtle', { width: 220 });
      for (const theme of ['light', 'dark']) {
        const cell = frame(theme, 'HORIZONTAL', { gap: '3', align: 'CENTER' });
        r.appendChild(cell);
        const chip = box('chip', 48, 28, { stroke: 'color/border/default', radius: 'sm' });
        chip.fills = [p(row[0], theme)];
        cell.appendChild(chip);
        await addText(
          cell,
          (theme === 'light' ? 'Light · ' : 'Dark · ') + row[theme === 'light' ? 3 : 4],
          'Mono/XS',
          'color/text/muted',
          {
            width: 220,
          },
        );
      }
    }
  }
}

async function buildTypographyPage() {
  const doc = await docFrame(
    'Foundations',
    'Typography',
    'Geist for everything you read, Geist Mono for everything a machine would print: code, dates, tags, metadata and eyebrows.',
  );

  const faces = await docSection(doc, 'Typefaces');
  const row = frame('faces', 'HORIZONTAL', { gap: '6' });
  add(faces, row, { w: 'FILL' });
  const specimens = [
    ['Geist', 'Display/XL', 'Headings, body and UI. Regular, Medium, SemiBold.'],
    ['Geist Mono', 'Display/XL', 'Code, metadata, tags and eyebrows. Regular, Medium.'],
  ];
  for (const s of specimens) {
    const card = frame(s[0], 'VERTICAL', {
      gap: '4',
      pad: ['8'],
      radius: 'xl',
      stroke: 'color/border/default',
      fill: 'color/bg/raised',
    });
    add(row, card, { w: 'FILL' });
    const aa = await addText(card, 'Aa', 'Display/XL', 'color/text/default');
    if (s[0] === 'Geist Mono') aa.fontName = { family: 'Geist Mono', style: 'Medium' };
    await addText(card, s[0], 'Heading/H4', 'color/text/default');
    await addText(card, s[2], 'Body/SM', 'color/text/muted', { fill: true });
  }

  const scale = await docSection(
    doc,
    'Type scale',
    'Desktop sizes. Display and H1 step down on mobile through clamp() in code.',
  );
  const samples = {
    Display: 'Milad Mohammadi',
    Heading: 'Data Fetching Without Hidden Waterfalls',
    Body: COPY.tagline,
    Label: 'View projects',
    Wordmark: COPY.name,
    Mono: 'const posts = await getPosts();',
    Eyebrow: 'Software Engineer',
  };
  for (const s of TEXT_STYLES) {
    const r = frame(s[0], 'HORIZONTAL', {
      gap: '10',
      pad: ['5', '0'],
      align: 'CENTER',
      stroke: 'color/border/default',
      sides: 'b',
    });
    add(scale, r, { w: 'FILL' });
    const meta = frame('meta', 'VERTICAL', { gap: '1' });
    r.appendChild(meta);
    fixW(meta, 280);
    await addText(meta, s[0], 'Label/MD', 'color/text/default');
    await addText(
      meta,
      s[1] + ' ' + s[2] + ' · ' + s[3] + '/' + s[4] + ' · ' + s[5] + '%',
      'Mono/XS',
      'color/text/subtle',
    );
    await addText(meta, s[6], 'Mono/XS', 'color/text/accent');
    await addText(r, samples[s[0].split('/')[0]], s[0], 'color/text/default', { fill: true });
  }
}

async function buildSpacingPage() {
  const doc = await docFrame(
    'Foundations',
    'Spacing & Radius',
    'A 4px base that matches Tailwind one to one: space/4 is p-4, gap-4, m-4. Radii are Tailwind’s defaults, so rounded-lg in code is radius/lg here.',
  );
  const spacing = await docSection(doc, 'Spacing');
  for (const k of Object.keys(SPACE)) {
    const r = frame('space/' + k, 'HORIZONTAL', { gap: '6', align: 'CENTER' });
    add(spacing, r, { w: 'FILL' });
    await addText(r, 'space/' + k, 'Mono/SM', 'color/text/default', { width: 120 });
    await addText(r, SPACE[k] + 'px · ' + k, 'Mono/XS', 'color/text/subtle', { width: 120 });
    const bar = figma.createRectangle();
    bar.resize(Math.max(1, SPACE[k]), 16);
    bar.fills = [p('color/bg/accent')];
    bar.cornerRadius = 2;
    r.appendChild(bar);
  }

  const radius = await docSection(
    doc,
    'Radius',
    'sm for inline code, md for tags, lg for buttons and code, xl for cards, 2xl for large panels, full for pills.',
  );
  const tiles = frame('tiles', 'HORIZONTAL', { gap: '6' });
  add(radius, tiles, { w: 'FILL' });
  for (const k of Object.keys(RADIUS)) {
    const cell = frame('radius/' + k, 'VERTICAL', { gap: '2' });
    tiles.appendChild(cell);
    const tile = box('tile', 96, 96, {
      fill: 'color/bg/accent-subtle',
      stroke: 'color/border/accent',
      radius: k,
    });
    cell.appendChild(tile);
    await addText(cell, 'radius/' + k, 'Mono/SM', 'color/text/default');
    await addText(
      cell,
      (k === 'full' ? '9999' : RADIUS[k]) + 'px · rounded-' + k,
      'Mono/XS',
      'color/text/subtle',
    );
  }
}

async function buildElevationPage() {
  const doc = await docFrame(
    'Foundations',
    'Elevation & Grid',
    'Borders do most of the separating. Shadows are for things that float or respond to hover, never for static cards.',
    1600,
  );
  const shadows = await docSection(doc, 'Shadows');
  const row = frame('shadows', 'HORIZONTAL', { gap: '8', pad: ['4', '0', '8', '0'] });
  add(shadows, row, { w: 'FILL' });
  for (const name of Object.keys(S.effect)) {
    const cell = frame(name, 'VERTICAL', { gap: '3' });
    row.appendChild(cell);
    const card = box('sample', 220, 120, {
      fill: 'color/bg/raised',
      stroke: 'color/border/default',
      radius: 'xl',
      clip: false,
    });
    await card.setEffectStyleIdAsync(S.effect[name].id);
    cell.appendChild(card);
    await addText(cell, name, 'Mono/SM', 'color/text/default');
    await addText(cell, S.effect[name].description, 'Mono/XS', 'color/text/subtle', { width: 220 });
  }

  const grid = await docSection(
    doc,
    'Layout grid',
    'Content sits in a 1152px container (max-w-6xl) on desktop with 144px margins at 1440. Articles use a 720px measure. Mobile uses 20px margins.',
  );
  const samples = [
    ['Desktop · 12 columns · 24px gutter', DESKTOP, 'Grid/Desktop'],
    ['Mobile · 4 columns · 16px gutter · 20px margin', MOBILE, 'Grid/Mobile'],
  ];
  for (const s of samples) {
    await addText(grid, s[0], 'Mono/SM', 'color/text/muted');
    const f = box(s[2], s[1], 160, {
      fill: 'color/bg/sunken',
      stroke: 'color/border/default',
      radius: 'lg',
    });
    f.layoutGrids = S.grid[s[2]].layoutGrids.map((g) =>
      Object.assign({}, g, { visible: true, color: rgba(PRIMITIVES['cobalt/500'], 0.14) }),
    );
    grid.appendChild(f);
  }
}

async function buildGettingStarted() {
  const doc = await docFrame(
    'Start here',
    'Getting started',
    'The design system behind phymilad.vercel.app. It exists so the site can grow — more posts, more projects — without each page inventing its own styles.',
  );

  const principles = await docSection(doc, 'Principles');
  const grid = frame('principles', 'HORIZONTAL', { gap: '6' });
  add(principles, grid, { w: 'FILL' });
  const items = [
    [
      'Content first',
      'This is a blog with a portfolio attached. Every decision is judged by how long-form technical writing reads.',
    ],
    [
      'One accent',
      'Cobalt marks what you can act on: links, the primary button, focus, the active state. Nothing else is coloured.',
    ],
    [
      'Mono means data',
      'Dates, tags, file names, metrics and eyebrows are set in Geist Mono. Prose never is.',
    ],
    [
      'Borders over shadows',
      'Hairlines separate. Shadows only appear on hover and on things that float.',
    ],
  ];
  for (const it of items) {
    const c = inst('Card', { State: 'Default' }, { Title: it[0], Body: it[1] });
    add(grid, c, { w: 'FILL' });
  }

  const mapping = await docSection(
    doc,
    'From Figma to code',
    'Every variable carries its CSS custom property as code syntax, so Dev Mode shows var(--…) instead of hex values.',
  );
  const rows = [
    ['Figma', 'CSS', 'Tailwind'],
    ['color/bg/surface', 'var(--surface)', 'bg-surface'],
    ['color/text/muted', 'var(--fg-muted)', 'text-fg-muted'],
    ['color/border/default', 'var(--border)', 'border-line'],
    ['color/bg/accent', 'var(--accent)', 'bg-accent'],
    ['space/6', 'calc(var(--spacing) * 6)', 'p-6 · gap-6'],
    ['radius/xl', 'var(--radius-xl)', 'rounded-xl'],
    ['Heading/H2', '--text-h2', 'text-h2'],
    ['Eyebrow', '.eyebrow', 'eyebrow'],
    ['Shadow/MD', '--shadow-md', 'shadow-md'],
  ];
  for (let i = 0; i < rows.length; i++) {
    const r = frame('row', 'HORIZONTAL', {
      gap: '6',
      pad: ['3', '0'],
      stroke: 'color/border/default',
      sides: 'b',
    });
    add(mapping, r, { w: 'FILL' });
    for (const cell of rows[i]) {
      await addText(
        r,
        cell,
        i === 0 ? 'Eyebrow' : 'Mono/SM',
        i === 0 ? 'color/text/subtle' : 'color/text/default',
        { width: 340 },
      );
    }
  }

  const theming = await docSection(
    doc,
    'Light and dark',
    'Theme · Light and Theme · Dark hold the same token names. Components are bound to Light. To preview dark, use the dark templates, or swap the library collection. On a Professional plan, merge them into one collection with two modes.',
  );
  const note = inst(
    'Callout',
    { Tone: 'Note' },
    {
      Title: 'Keep code and Figma in step',
      Body: 'Token values live in design/figma-plugin/code.js and src/app/globals.css. Change both, then re-run the plugin.',
    },
  );
  theming.appendChild(note);
}

async function buildCover() {
  const f = frame('Cover', 'VERTICAL', {
    gap: '16',
    pad: ['24'],
    fill: 'color/bg/inverse',
    justify: 'SPACE_BETWEEN',
  });
  f.resize(1600, 960);
  f.layoutSizingHorizontal = 'FIXED';
  f.layoutSizingVertical = 'FIXED';
  f.clipsContent = true;

  const lines = box('grid', 1600, 960, { clip: true });
  f.appendChild(lines);
  lines.layoutPositioning = 'ABSOLUTE';
  lines.x = 0;
  lines.y = 0;
  for (let x = 0; x <= 1600; x += 80) {
    const r = figma.createRectangle();
    r.resize(1, 960);
    r.x = x;
    r.fills = [primPaint('neutral/800')];
    r.opacity = 0.5;
    lines.appendChild(r);
  }
  for (let y = 0; y <= 960; y += 80) {
    const r = figma.createRectangle();
    r.resize(1600, 1);
    r.y = y;
    r.fills = [primPaint('neutral/800')];
    r.opacity = 0.5;
    lines.appendChild(r);
  }
  const block = figma.createRectangle();
  block.resize(160, 160);
  block.x = 1280;
  block.y = 160;
  block.fills = [p('color/bg/accent')];
  lines.appendChild(block);

  const top = frame('top', 'HORIZONTAL', { gap: '3', align: 'CENTER' });
  f.appendChild(top);
  const mark = frame('mark', 'HORIZONTAL', {
    align: 'CENTER',
    justify: 'CENTER',
    fill: 'color/bg/surface',
    radius: 'md',
  });
  top.appendChild(mark);
  fixSize(mark, 40, 40);
  await addText(mark, 'MM', 'Eyebrow', 'color/text/default');
  await addText(top, 'milad mohammadi / design system', 'Mono/MD', 'color/text/inverse');

  const mid = frame('title', 'VERTICAL', { gap: '6' });
  f.appendChild(mid);
  await addText(mid, 'v1.0 · October 2026', 'Eyebrow', 'color/text/subtle');
  const title = await addText(mid, 'Portfolio\nDesign System', 'Display/XL', 'color/text/inverse');
  title.fontSize = 112;
  title.lineHeight = { value: 112, unit: 'PIXELS' };
  await addText(
    mid,
    'Tokens, type, components and page templates for phymilad.vercel.app.',
    'Body/LG',
    'color/text/subtle',
    { width: 640 },
  );

  const meta = frame('meta', 'HORIZONTAL', { gap: '10' });
  f.appendChild(meta);
  for (const m of [
    'Geist · Geist Mono',
    'Cobalt 600 accent',
    'Light + Dark',
    '21 components',
    'Next.js 15 · Tailwind v4',
  ]) {
    await addText(meta, m, 'Mono/SM', 'color/text/inverse');
  }
  await figma.setFileThumbnailNodeAsync(f);
}

/* ------------------------------------------------------------------------ */
/* Templates                                                                 */
/* ------------------------------------------------------------------------ */

async function loadImages() {
  for (const key of Object.keys(IMAGES)) {
    try {
      const img = await figma.createImageAsync(SITE + IMAGES[key]);
      IMG[key] = img.hash;
    } catch (e) {
      errors.push('image ' + key + ': ' + (e && e.message ? e.message : e));
    }
  }
}

async function pageFrame(name, width, x) {
  const f = frame(name, 'VERTICAL', { fill: 'color/bg/surface' });
  fixW(f, width);
  f.x = x;
  f.y = 0;
  f.clipsContent = true;
  await f.setGridStyleIdAsync(S.grid[width > 600 ? 'Grid/Desktop' : 'Grid/Mobile'].id);
  return f;
}

function section(parent, name, side, o) {
  o = o || {};
  const s = frame(name, o.dir || 'VERTICAL', {
    gap: o.gap,
    align: o.align,
    justify: o.justify,
    fill: o.fill,
    pad: [o.top || '0', side, o.bottom || '0', side],
  });
  add(parent, s, { w: 'FILL' });
  return s;
}

function header(parent, desktop, active) {
  const h = inst('Header', { Breakpoint: desktop ? 'Desktop' : 'Mobile' });
  add(parent, h, { w: 'FILL' });
  if (active) {
    nested(h, 'nav-' + active.toLowerCase()).swapComponent(
      R['Nav link'].set.children.find((c) => c.name === 'State=Active'),
    );
  }
  return h;
}

function footer(parent, desktop) {
  return add(parent, inst('Footer', { Breakpoint: desktop ? 'Desktop' : 'Mobile' }), { w: 'FILL' });
}

function button(variant, label, o) {
  o = o || {};
  const props = { Label: label };
  if (o.trailing) {
    props['Trailing icon'] = true;
    props.Trailing = ICONS[o.trailing].id;
  }
  if (o.leading) {
    props['Leading icon'] = true;
    props.Leading = ICONS[o.leading].id;
  }
  return inst('Button', { Variant: variant, Size: o.size || 'MD', State: 'Default' }, props);
}

function iconButton(name, variant) {
  return inst(
    'Icon button',
    { Variant: variant || 'Ghost', State: 'Default' },
    { Icon: ICONS[name].id },
  );
}

function sectionHeader(parent, title, action) {
  const s = inst('Section header', null, { Title: title, 'Show action': !!action });
  add(parent, s, { w: 'FILL' });
  if (action) setProps(nested(s, 'action'), 'Link', { Label: action });
  return s;
}

function projectRow(parent, project, layout) {
  const r = inst(
    'Project row',
    { Layout: layout, State: 'Default' },
    {
      Title: project.title,
      Description: project.short,
    },
  );
  add(parent, r, { w: 'FILL' });
  imageFill(nested(r, 'thumbnail'), project.image);
  setTags(r, project.skills.slice(0, 3), 3);
  return r;
}

function postItem(parent, post, layout) {
  const r = inst(
    'Post item',
    { Layout: layout, State: 'Default' },
    {
      Date: post[0],
      'Reading time': post[1],
      Series: 'Next.js Between the Lines · ' + post[2],
      Title: post[3],
      Description: post[4],
    },
  );
  add(parent, r, { w: 'FILL' });
  setTags(r, post[5], 2);
  return r;
}

async function contactBand(parent, desktop) {
  const band = frame('Contact', desktop ? 'HORIZONTAL' : 'VERTICAL', {
    gap: '8',
    pad: [desktop ? '12' : '8'],
    radius: '2xl',
    fill: 'color/bg/sunken',
    stroke: 'color/border/default',
    justify: 'SPACE_BETWEEN',
    align: desktop ? 'CENTER' : 'MIN',
  });
  add(parent, band, { w: 'FILL' });
  const copy = frame('copy', 'VERTICAL', { gap: '3' });
  add(band, copy, desktop ? undefined : { w: 'FILL' });
  await addText(copy, 'Contact', 'Eyebrow', 'color/text/accent');
  await addText(copy, COPY.contactTitle, 'Heading/H2', 'color/text/default');
  await addText(
    copy,
    COPY.contactBody,
    'Body/MD',
    'color/text/muted',
    desktop ? { width: 520 } : { fill: true },
  );
  const actions = frame('actions', 'HORIZONTAL', { gap: '3' });
  band.appendChild(actions);
  actions.appendChild(button('Primary', 'Message on LinkedIn', { leading: 'linkedin' }));
  actions.appendChild(button('Secondary', 'GitHub', { leading: 'github' }));
  return band;
}

/** The home page's core stack band: hairlines above and below, tags beside the label. */
function stackBand(parent, desktop) {
  const band = frame('Core stack', desktop ? 'HORIZONTAL' : 'VERTICAL', {
    gap: desktop ? '6' : '3',
    pad: ['6', '0'],
    align: desktop ? 'CENTER' : 'MIN',
    stroke: 'color/border/default',
    sides: 'tb',
  });
  add(parent, band, { w: 'FILL' });
  return band;
}

function tagList(parent, labels, variant) {
  const row = frame('tags', 'HORIZONTAL', { gap: '2' });
  add(parent, row, { w: 'FILL' });
  wrap(row, '2');
  for (const l of labels)
    row.appendChild(inst('Tag', { Variant: variant || 'Neutral', State: 'Default' }, { Label: l }));
  return row;
}

async function portraitCard(parent) {
  const card = frame('Portrait', 'VERTICAL', {
    radius: '2xl',
    stroke: 'color/border/default',
    fill: 'color/bg/sunken',
    clip: true,
  });
  parent.appendChild(card);
  fixW(card, 360);
  const media = box('media', 360, 378, { clip: true });
  add(card, media, { w: 'FILL' });
  for (let x = 24; x < 360; x += 24) {
    const r = figma.createRectangle();
    r.resize(1, 378);
    r.x = x;
    r.fills = [p('color/border/default')];
    media.appendChild(r);
  }
  for (let y = 24; y < 378; y += 24) {
    const r = figma.createRectangle();
    r.resize(360, 1);
    r.y = y;
    r.fills = [p('color/border/default')];
    media.appendChild(r);
  }
  const photo = figma.createRectangle();
  photo.name = 'photo';
  photo.resize(360, 378);
  photo.fills = [];
  imageFill(photo, 'portrait', 'FILL');
  media.appendChild(photo);
  const caption = frame('caption', 'HORIZONTAL', {
    pad: ['3', '4'],
    justify: 'SPACE_BETWEEN',
    align: 'CENTER',
    fill: 'color/bg/raised',
    stroke: 'color/border/default',
    sides: 't',
  });
  add(card, caption, { w: 'FILL' });
  await addText(caption, COPY.name, 'Label/SM', 'color/text/default');
  const place = frame('location', 'HORIZONTAL', { gap: '1', align: 'CENTER' });
  caption.appendChild(place);
  place.appendChild(icon('map-pin', 12, 'color/icon/muted'));
  await addText(place, COPY.location, 'Mono/XS', 'color/text/subtle');
  return card;
}

async function homeDesktop(x) {
  const f = await pageFrame('Home — Desktop', DESKTOP, x);
  header(f, true);

  const hero = section(f, 'Hero', GUTTER, {
    dir: 'HORIZONTAL',
    top: '24',
    bottom: '20',
    gap: '16',
    align: 'CENTER',
  });
  const left = frame('intro', 'VERTICAL', { gap: '8' });
  add(hero, left, { w: 'FILL' });
  left.appendChild(
    inst('Badge', { Tone: 'Accent' }, { Label: 'New series · Next.js Between the Lines' }),
  );
  const titles = frame('titles', 'VERTICAL', { gap: '4' });
  add(left, titles, { w: 'FILL' });
  await addText(titles, COPY.role, 'Eyebrow', 'color/text/accent');
  await addText(titles, COPY.name, 'Display/XL', 'color/text/default');
  await addText(titles, COPY.tagline, 'Body/LG', 'color/text/muted', { width: 600 });
  const actions = frame('actions', 'HORIZONTAL', { gap: '3', align: 'CENTER' });
  left.appendChild(actions);
  actions.appendChild(button('Primary', 'View projects', { trailing: 'chevron-right' }));
  actions.appendChild(button('Secondary', 'Read the blog'));
  const socials = frame('social', 'HORIZONTAL', { gap: '1', pad: ['0', '0', '0', '2'] });
  actions.appendChild(socials);
  socials.appendChild(iconButton('github'));
  socials.appendChild(iconButton('linkedin'));
  await portraitCard(hero);

  const glance = section(f, 'Core stack', GUTTER, { bottom: '24' });
  const stack = stackBand(glance, true);
  await addText(stack, 'Core stack', 'Eyebrow', 'color/text/subtle');
  tagList(stack, STACK);

  const work = section(f, 'Selected work', GUTTER, { bottom: '24', gap: '2' });
  sectionHeader(work, 'Selected work', 'All projects');
  PROJECTS.slice(0, 3).forEach((pr) => projectRow(work, pr, 'Wide'));

  const writing = section(f, 'Recent writing', GUTTER, { bottom: '24', gap: '2' });
  sectionHeader(writing, 'Recent writing', 'All posts');
  POSTS.slice(0, 3).forEach((po) => postItem(writing, po, 'Wide'));

  const contact = section(f, 'Contact', GUTTER, { bottom: '24' });
  await contactBand(contact, true);
  footer(f, true);
  return f;
}

async function homeMobile(x) {
  const f = await pageFrame('Home — Mobile', MOBILE, x);
  header(f, false);
  const hero = section(f, 'Hero', MOBILE_SIDE, { top: '12', bottom: '12', gap: '6' });
  hero.appendChild(inst('Badge', { Tone: 'Accent' }, { Label: 'New series · Next.js' }));
  await addText(hero, COPY.role, 'Eyebrow', 'color/text/accent');
  await addText(hero, COPY.name, 'Display/LG', 'color/text/default', { fill: true });
  await addText(hero, COPY.tagline, 'Body/MD', 'color/text/muted', { fill: true });
  const actions = frame('actions', 'HORIZONTAL', { gap: '3' });
  hero.appendChild(actions);
  actions.appendChild(button('Primary', 'View projects', { trailing: 'chevron-right' }));
  actions.appendChild(button('Secondary', 'Read the blog'));

  const glance = section(f, 'Core stack', MOBILE_SIDE, { bottom: '16' });
  const stack = stackBand(glance, false);
  await addText(stack, 'Core stack', 'Eyebrow', 'color/text/subtle');
  tagList(stack, STACK);

  const work = section(f, 'Selected work', MOBILE_SIDE, { bottom: '16', gap: '2' });
  sectionHeader(work, 'Work', 'All');
  PROJECTS.slice(0, 2).forEach((pr) => projectRow(work, pr, 'Compact'));

  const writing = section(f, 'Recent writing', MOBILE_SIDE, { bottom: '16', gap: '2' });
  sectionHeader(writing, 'Writing', 'All');
  POSTS.slice(0, 3).forEach((po) => postItem(writing, po, 'Compact'));

  const contact = section(f, 'Contact', MOBILE_SIDE, { bottom: '16' });
  await contactBand(contact, false);
  footer(f, false);
  return f;
}

async function pageIntro(parent, side, eyebrow, title, intro) {
  const s = section(parent, 'Intro', side, { top: '20', bottom: '12', gap: '4' });
  await addText(s, eyebrow, 'Eyebrow', 'color/text/accent');
  await addText(s, title, 'Heading/H1', 'color/text/default');
  if (intro) await addText(s, intro, 'Body/LG', 'color/text/muted', { width: 680 });
  return s;
}

async function projectsDesktop(x) {
  const f = await pageFrame('Projects — Desktop', DESKTOP, x);
  header(f, true, 'Projects');
  await pageIntro(f, GUTTER, 'Work', 'Projects', COPY.projectsIntro);
  const grid = section(f, 'Grid', GUTTER, { dir: 'HORIZONTAL', bottom: '24', gap: '10' });
  wrap(grid, '10');
  PROJECTS.forEach((pr, i) => {
    const c = inst(
      'Project card',
      { State: i === 0 ? 'Hover' : 'Default' },
      {
        Title: pr.title,
        Description: pr.short,
      },
    );
    grid.appendChild(c);
    imageFill(nested(c, 'screenshot'), pr.image);
    setTags(c, pr.skills.slice(0, 4), 4);
    const rest = pr.skills.length - 4;
    const more = nested(c, 'tag-more');
    if (rest > 0) setProps(more, 'Tag', { Label: '+' + rest });
    else more.visible = false;
  });
  footer(f, true);
  return f;
}

async function projectDetailDesktop(x) {
  const pr = PROJECTS[0];
  const f = await pageFrame('Project — Desktop', DESKTOP, x);
  header(f, true, 'Projects');
  const intro = section(f, 'Intro', GUTTER, { top: '16', bottom: '10', gap: '5' });
  intro.appendChild(inst('Breadcrumb', null, { Parent: 'Projects', Current: pr.title }));
  await addText(intro, pr.title, 'Heading/H1', 'color/text/default', { width: 820 });
  await addText(intro, pr.short, 'Body/LG', 'color/text/muted', { width: 760 });

  const media = section(f, 'Video', GUTTER, { bottom: '16' });
  const video = box('player', CONTAINER, 648, {
    fill: 'color/bg/inverse',
    radius: '2xl',
    stroke: 'color/border/default',
  });
  add(media, video, { w: 'FILL' });
  const still = figma.createRectangle();
  still.resize(CONTAINER, 648);
  still.fills = [];
  imageFill(still, pr.image, 'FILL');
  still.opacity = 0.55;
  video.appendChild(still);
  const play = frame('play', 'HORIZONTAL', {
    align: 'CENTER',
    justify: 'CENTER',
    fill: 'color/bg/accent',
    radius: 'full',
  });
  video.appendChild(play);
  fixSize(play, 72, 72);
  play.x = CONTAINER / 2 - 36;
  play.y = 648 / 2 - 36;
  play.appendChild(icon('play', 24, 'color/icon/on-accent'));

  const body = section(f, 'Body', GUTTER, { dir: 'HORIZONTAL', bottom: '24', gap: '16' });
  const main = frame('Overview', 'VERTICAL', { gap: '5' });
  add(body, main, { w: 'FILL' });
  await addText(main, 'Overview', 'Heading/H2', 'color/text/default');
  await addText(
    main,
    'Mdotcar is a roadside assistance web app that connects clients with experts in real time. This video follows one service request through both sides of the platform, the client app and the expert app.',
    'Body/LG',
    'color/text/muted',
    { fill: true },
  );
  await addText(main, 'In the video', 'Heading/H4', 'color/text/default');
  const list = frame('list', 'VERTICAL', { gap: '3' });
  add(main, list, { w: 'FILL' });
  for (const item of [
    'A client creating a roadside assistance request',
    'Real-time updates over WebSockets',
    'The expert receiving, handling and completing the request',
    'Both the client web app and the expert web app',
  ]) {
    add(list, inst('Highlight', null, { Text: item }), { w: 'FILL' });
  }

  const aside = frame('Details', 'VERTICAL', {
    gap: '6',
    pad: ['6'],
    radius: 'xl',
    stroke: 'color/border/default',
    fill: 'color/bg/raised',
  });
  body.appendChild(aside);
  fixW(aside, 340);
  await addText(aside, 'Stack', 'Eyebrow', 'color/text/subtle');
  tagList(aside, pr.skills);
  divider(aside);
  await addText(aside, 'Links', 'Eyebrow', 'color/text/subtle');
  aside.appendChild(
    inst('Link', { Variant: 'Chevron', State: 'Default' }, { Label: 'Watch on YouTube' }),
  );
  aside.appendChild(
    inst('Link', { Variant: 'Chevron', State: 'Default' }, { Label: 'All projects' }),
  );

  const pager = section(f, 'Pager', GUTTER, {
    dir: 'HORIZONTAL',
    bottom: '24',
    gap: '10',
    justify: 'MAX',
  });
  pager.appendChild(inst('Pager', { Direction: 'Next' }, { Title: PROJECTS[1].title }));
  footer(f, true);
  return f;
}

async function blogDesktop(x) {
  const f = await pageFrame('Blog — Desktop', DESKTOP, x);
  header(f, true, 'Blog');
  const intro = await pageIntro(f, GUTTER, 'Writing', 'Blog', COPY.blogIntro);
  const filters = frame('Filters', 'HORIZONTAL', { gap: '2', pad: ['4', '0', '0', '0'] });
  add(intro, filters, { w: 'FILL' });
  wrap(filters, '2');
  filters.appendChild(inst('Tag', { Variant: 'Accent', State: 'Default' }, { Label: 'RSS' }));
  for (const t of [
    ['nextjs', '20'],
    ['nextjs-between-the-lines', '20'],
    ['fundamentals', '5'],
    ['security', '3'],
    ['production', '3'],
    ['rendering', '2'],
  ]) {
    filters.appendChild(
      inst(
        'Tag',
        { Variant: 'Neutral', State: 'Default' },
        { Label: t[0], 'Show count': true, Count: t[1] },
      ),
    );
  }
  filters.appendChild(inst('Tag', { Variant: 'Outline', State: 'Default' }, { Label: '2026' }));
  const list = section(f, 'Posts', GUTTER, { bottom: '24' });
  divider(list);
  POSTS.forEach((po) => postItem(list, po, 'Wide'));
  footer(f, true);
  return f;
}

async function blogPostDesktop(x) {
  const post = POSTS[4];
  const f = await pageFrame('Blog post — Desktop', DESKTOP, x);
  header(f, true, 'Blog');
  const body = section(f, 'Article', GUTTER, {
    dir: 'HORIZONTAL',
    top: '16',
    bottom: '24',
    gap: '16',
  });
  const article = frame('article', 'VERTICAL', { gap: '6' });
  body.appendChild(article);
  fixW(article, PROSE);

  article.appendChild(
    inst('Breadcrumb', null, { Parent: 'Blog', Current: 'Next.js Between the Lines' }),
  );
  const meta = frame('meta', 'HORIZONTAL', { gap: '3', align: 'CENTER' });
  article.appendChild(meta);
  meta.appendChild(inst('Badge', { Tone: 'Accent' }, { Label: 'Part 2 of 20' }));
  await addText(meta, post[0] + ' · ' + post[1], 'Mono/XS', 'color/text/subtle');
  await addText(article, post[3], 'Heading/H1', 'color/text/default', { fill: true });
  await addText(article, post[4], 'Body/LG', 'color/text/muted', { fill: true });
  divider(article);

  const para = (t) => addText(article, t, 'Body/LG', 'color/text/muted', { fill: true });
  await para(
    'Server Components let you fetch data right where you need it. There is no API route in between and no loader function at the top of the page. That is a real improvement. It also makes it very easy to create request waterfalls without noticing.',
  );
  await addText(article, 'Start early, await late', 'Heading/H2', 'color/text/default', {
    fill: true,
  });
  await para(
    'The fix is to start every independent request first, and then wait for all of them together:',
  );
  article.appendChild(inst('Code block', null, { Filename: 'app/artist/[username]/page.tsx' }));
  await para(
    'A request begins when you call the function, not when you await it. Promise.all only decides where you wait.',
  );
  article.appendChild(
    inst(
      'Callout',
      { Tone: 'Tip' },
      {
        Title: 'Partial data',
        Body: 'If one promise rejects, Promise.all rejects too. If the page can still work with partial data, Promise.allSettled lets you handle each result on its own.',
      },
    ),
  );
  await addText(article, 'Fetch where you need it', 'Heading/H2', 'color/text/default', {
    fill: true,
  });
  await para(
    'Identical fetch requests are memoized during a server render. So you can call the same fetch in several components instead of passing data down through many layers of props, and only one request is made.',
  );
  tagList(article, ['nextjs', 'nextjs-between-the-lines', 'fundamentals'], 'Outline');
  divider(article);
  const pager = frame('pager', 'HORIZONTAL', { gap: '4' });
  add(article, pager, { w: 'FILL' });
  add(pager, inst('Pager', { Direction: 'Previous' }, { Title: POSTS[5][3] }), { w: 'FILL' });
  add(
    pager,
    inst('Pager', { Direction: 'Next' }, { Title: 'What Actually Makes a Next.js Route Dynamic' }),
    { w: 'FILL' },
  );

  const aside = frame('toc', 'VERTICAL', { gap: '3' });
  body.appendChild(aside);
  await addText(aside, 'On this page', 'Eyebrow', 'color/text/subtle');
  const toc = [
    ['H2', 'Active', 'The problem'],
    ['H2', 'Default', 'How it works'],
    ['H3', 'Default', 'What already runs in parallel'],
    ['H3', 'Default', 'Start early, await late'],
    ['H3', 'Hover', 'Fetch where you need it'],
    ['H2', 'Default', 'A common mistake'],
    ['H2', 'Default', 'When not to parallelize'],
    ['H2', 'Default', 'Summary'],
  ];
  const items = frame('items', 'VERTICAL', {});
  aside.appendChild(items);
  for (const t of toc)
    items.appendChild(inst('TOC item', { Level: t[0], State: t[1] }, { Label: t[2] }));
  footer(f, true);
  return f;
}

/** An About band: the heading in its own 240px column, content beside it. */
async function aboutSection(parent, title, intro) {
  const s = section(parent, title, GUTTER, {});
  const inner = frame('band', 'HORIZONTAL', {
    gap: '16',
    pad: ['16', '0'],
    stroke: 'color/border/default',
    sides: 't',
  });
  add(s, inner, { w: 'FILL' });
  const head = frame('heading', 'VERTICAL', { gap: '2' });
  inner.appendChild(head);
  fixW(head, 240);
  await addText(head, title, 'Heading/H3', 'color/text/default', { fill: true });
  if (intro) await addText(head, intro, 'Body/SM', 'color/text/muted', { fill: true });
  const body = frame('content', 'VERTICAL', {});
  add(inner, body, { w: 'FILL' });
  return body;
}

async function aboutDesktop(x) {
  const f = await pageFrame('About — Desktop', DESKTOP, x);
  header(f, true, 'About');

  const intro = section(f, 'Intro', GUTTER, {
    dir: 'HORIZONTAL',
    top: '20',
    bottom: '20',
    gap: '16',
  });
  const left = frame('intro', 'VERTICAL', { gap: '4' });
  add(intro, left, { w: 'FILL' });
  await addText(left, 'About', 'Eyebrow', 'color/text/accent');
  await addText(left, COPY.name, 'Display/LG', 'color/text/default');
  const lead = frame('lead', 'VERTICAL', { gap: '4', pad: ['2', '0', '0', '0'] });
  left.appendChild(lead);
  for (const para of COPY.lead)
    await addText(lead, para, 'Body/LG', 'color/text/muted', { width: 640 });

  const facts = frame('At a glance', 'VERTICAL', {
    radius: 'xl',
    fill: 'color/bg/raised',
    stroke: 'color/border/default',
    clip: true,
  });
  intro.appendChild(facts);
  fixW(facts, 320);
  const rows = [
    ['Based in', COPY.location],
    ['Role', COPY.role],
    ['Focus', COPY.focus],
    ['Writing', 'Next.js Between the Lines'],
    ['Elsewhere', 'LinkedIn    GitHub'],
  ];
  rows.forEach((r, i) => {
    const fact = inst('Fact', null, { Label: r[0], Value: r[1] });
    add(facts, fact, { w: 'FILL' });
    if (i < rows.length - 1) setStroke(fact, 'color/border/default', 'b');
  });

  const what = await aboutSection(f, 'What I do');
  await addText(what, COPY.whatIDo, 'Body/LG', 'color/text/default', { width: 720 });

  const how = await aboutSection(f, 'How I work');
  const grid = frame('principles', 'HORIZONTAL', { gap: '10' });
  add(how, grid, { w: 'FILL' });
  wrap(grid, '8');
  for (const pr of COPY.principles) {
    const item = frame(pr[0], 'VERTICAL', {
      gap: '2',
      pad: ['5', '0', '0', '0'],
      stroke: 'color/border/default',
      sides: 't',
    });
    grid.appendChild(item);
    fixW(item, 380);
    await addText(item, pr[0], 'Heading/H4', 'color/text/default', { fill: true });
    await addText(item, pr[1], 'Body/MD', 'color/text/muted', { fill: true });
  }

  const work = await aboutSection(f, 'Work', COPY.workIntro);
  for (const pr of PROJECTS) {
    const row = frame(pr.title, 'HORIZONTAL', {
      gap: '6',
      pad: ['4', '0'],
      justify: 'SPACE_BETWEEN',
      align: 'CENTER',
      stroke: 'color/border/default',
      sides: 'b',
    });
    add(work, row, { w: 'FILL' });
    const text = frame('text', 'VERTICAL', { gap: '1' });
    add(row, text, { w: 'FILL' });
    await addText(text, pr.title, 'Label/MD', 'color/text/default');
    await addText(text, pr.skills.slice(0, 4).join(' · '), 'Mono/XS', 'color/text/subtle');
    row.appendChild(icon('chevron-right', 16, 'color/icon/muted'));
  }

  const stack = await aboutSection(f, 'Stack');
  const groups = [
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
  ];
  for (const g of groups) {
    const row = frame(g[0], 'HORIZONTAL', {
      gap: '8',
      pad: ['4', '0'],
      stroke: 'color/border/default',
      sides: 'b',
      align: 'CENTER',
    });
    add(stack, row, { w: 'FILL' });
    await addText(row, g[0], 'Eyebrow', 'color/text/subtle', { width: 112 });
    const tags = tagList(row, g[1]);
    tags.layoutSizingHorizontal = 'FILL';
  }

  const contact = section(f, 'Contact', GUTTER, { top: '4', bottom: '24' });
  await contactBand(contact, true);
  footer(f, true);
  return f;
}

async function notFoundDesktop(x) {
  const f = await pageFrame('404 — Desktop', DESKTOP, x);
  header(f, true);
  const s = section(f, 'Not found', GUTTER, { top: '32', bottom: '32', gap: '6', align: 'CENTER' });
  s.appendChild(inst('Badge', { Tone: 'Warning' }, { Label: 'Error 404' }));
  await addText(s, 'Page not found', 'Display/LG', 'color/text/default', { align: 'CENTER' });
  await addText(s, 'That page does not exist, or it has moved.', 'Body/LG', 'color/text/muted', {
    align: 'CENTER',
  });
  const actions = frame('actions', 'HORIZONTAL', { gap: '3' });
  s.appendChild(actions);
  actions.appendChild(button('Primary', 'Back to home', { leading: 'chevron-left' }));
  actions.appendChild(button('Secondary', 'Read the blog'));
  footer(f, true);
  return f;
}

/** Rebinds every light token in a copy of a template to its dark twin. */
function toDark(root) {
  const darkFor = (id) => {
    const e = V.byId[id];
    return e && e.theme === 'light' ? V.dark[e.name] : null;
  };
  const swap = (paints) => {
    let changed = false;
    const next = paints.map((pt) => {
      const bound = pt.boundVariables && pt.boundVariables.color;
      const d = bound ? darkFor(bound.id) : null;
      if (!d) return pt;
      changed = true;
      return figma.variables.setBoundVariableForPaint(pt, 'color', d);
    });
    return changed ? next : null;
  };
  let count = 0;
  for (const node of [root].concat(root.findAll(() => true))) {
    for (const prop of ['fills', 'strokes']) {
      if (!(prop in node)) continue;
      const paints = node[prop];
      if (paints === figma.mixed) {
        if (node.type === 'TEXT' && prop === 'fills') {
          for (const seg of node.getStyledTextSegments(['fills'])) {
            const next = swap(seg.fills);
            if (next) node.setRangeFills(seg.start, seg.end, next);
          }
          count++;
        }
        continue;
      }
      if (!paints.length) continue;
      const next = swap(paints);
      if (next) {
        node[prop] = next;
        count++;
      }
    }
  }
  return count;
}

async function buildDesktopTemplates() {
  const GAP = 160;
  let x = 0;
  const builders = [
    homeDesktop,
    projectsDesktop,
    projectDetailDesktop,
    blogDesktop,
    blogPostDesktop,
    aboutDesktop,
    notFoundDesktop,
  ];
  const built = [];
  for (const b of builders) {
    try {
      const f = await b(x);
      built.push(f);
      x += f.width + GAP;
    } catch (e) {
      errors.push(b.name + ': ' + (e && e.message ? e.message : e));
      console.error(b.name, e);
    }
  }
  // Dark twins of the two pages people judge a portfolio by.
  let y = 0;
  for (const f of built) y = Math.max(y, f.height);
  y += 240;
  let dx = 0;
  for (const f of built.filter((b) => /^(Home|Blog post)/.test(b.name))) {
    const d = f.clone();
    d.name = f.name.replace('Desktop', 'Desktop · Dark');
    d.x = dx;
    d.y = y;
    toDark(d);
    dx += d.width + GAP;
  }
}

async function buildMobileTemplates() {
  const light = await homeMobile(0);
  const dark = light.clone();
  dark.name = 'Home — Mobile · Dark';
  dark.x = MOBILE + 120;
  toDark(dark);
}

/* ------------------------------------------------------------------------ */
/* Main                                                                      */
/* ------------------------------------------------------------------------ */

async function main() {
  await Promise.all(FONTS.map((f) => figma.loadFontAsync(f)));
  const reset = await resetFile();
  const pages = reset.pages;
  const on = (name) => figma.setCurrentPageAsync(pages[name]);

  step('Variables');
  await buildVariables();
  step('Styles');
  await buildStyles();

  await on('Icons');
  await buildIconsPage();
  await on('Buttons & Links');
  await buildButtonsPage();
  await on('Tags & Badges');
  await buildTagsPage();
  await on('Navigation');
  await buildNavigationPage();
  await on('Cards & Lists');
  await buildCardsPage();
  await on('Content');
  await buildContentPage();

  // Documentation and templates only consume what exists above, so a failure
  // in one of them should not stop the rest.
  await phase('Colors', async () => {
    await on('Colors');
    await buildColorsPage();
  });
  await phase('Typography', async () => {
    await on('Typography');
    await buildTypographyPage();
  });
  await phase('Spacing', async () => {
    await on('Spacing & Radius');
    await buildSpacingPage();
  });
  await phase('Elevation', async () => {
    await on('Elevation & Grid');
    await buildElevationPage();
  });
  await phase('Getting started', async () => {
    await on('Getting started');
    await buildGettingStarted();
  });
  await phase('Images', loadImages);
  await phase('Desktop templates', async () => {
    await on('Templates · Desktop');
    await buildDesktopTemplates();
  });
  await phase('Mobile templates', async () => {
    await on('Templates · Mobile');
    await buildMobileTemplates();
  });
  await phase('Cover', async () => {
    await on('Cover');
    await buildCover();
  });

  await on('Cover');
  reset.builder.remove();
}

main()
  .then(() => {
    if (errors.length) {
      console.error(errors);
      figma.closePlugin('Built with ' + errors.length + ' problem(s). First: ' + errors[0]);
    } else {
      figma.closePlugin('Design system built.');
    }
  })
  .catch((e) => {
    console.error(e);
    figma.closePlugin('Build failed: ' + (e && e.message ? e.message : e));
  });
