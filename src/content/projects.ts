export type Project = {
  id: number;
  title: string;
  description: string[];
  shortDescription: string;
  youtubeUrl: string;
  image: {
    desktop?: string;
    mobile?: string;
  };
  skills: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Mdotcar: Real-Time Roadside Assistance',
    shortDescription:
      'Mdotcar is a roadside assistance platform that connects clients with experts in real time. The video follows one request from start to finish, from the moment a client asks for help until the expert completes the service.',
    description: [
      'Mdotcar is a roadside assistance web app that connects clients with experts in real time. This video follows one service request through both sides of the platform, the client app and the expert app.',
      'In the video:',
      'A client creating a roadside assistance request',
      'Real-time updates over WebSockets',
      'The expert receiving, handling and completing the request',
      'Both the client web app and the expert web app',
      'The back-and-forth between client and expert until the service is done',
      'Clients get help on the road quickly, and experts get one place to handle their requests as they come in.',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=KKhp32PGDS4&list=PL3h4tQDduGxOr2Rjf1sntJ2SJe7zPTE9G',
    image: {
      mobile: '/images/projects/mdotcar-client-mobile.png',
      desktop: '/images/projects/mdotcar-client-desktop.png',
    },
    skills: [
      'React.js',
      'TypeScript',
      'React Hooks',
      'Redux Toolkit',
      'Material-UI',
      'Leaflet',
      'Storybook',
      'Vitest',
      'Responsive Web Design',
      'Agile',
      'Git',
      'Jira',
      'Confluence',
      'Figma',
    ],
  },
  {
    id: 2,
    title: 'Mdotcar: Admin Panel',
    shortDescription:
      'The Mdotcar admin panel is where the whole platform is run from. Admins manage client and expert accounts, follow service requests and check the analytics.',
    description: [
      'This video goes through the Mdotcar admin panel, the part of the platform the operations team uses to see what is going on and step in when something needs attention.',
      'In the video:',
      'The dashboard and its key numbers',
      'Managing client and expert accounts',
      'Monitoring and tracking service requests',
      'Approvals, reviews and disputes',
      'Analytics and reports',
      'Settings and other configuration',
      'The admin panel keeps the day-to-day running of Mdotcar in one place, so clients and experts are looked after without anyone chasing things by hand.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=hmv_jv5WRwQ',
    image: {
      mobile: '/images/projects/mdotcar-admin-mobile.png',
      desktop: '/images/projects/mdotcar-admin-desktop.png',
    },
    skills: [
      'React.js',
      'TypeScript',
      'React Hooks',
      'Redux Toolkit',
      'Material-UI',
      'Leaflet',
      'Storybook',
      'Vitest',
      'Responsive Web Design',
      'Agile',
      'Git',
      'Jira',
      'Confluence',
      'Figma',
    ],
  },
  {
    id: 3,
    title: 'Rsoon: Investment Consulting Platform',
    shortDescription:
      'Rsoon is an investment consulting platform. It gives users personal advice, live market data and tools to track and manage their portfolio, whether they are new to investing or already experienced.',
    description: [
      'Rsoon is a web application for investment consulting, built for individuals and businesses who want help with their financial decisions. It puts expert advice, live market data and portfolio tools in one place.',
      'Main features:',
      "Investment advice based on the user's own goals",
      'Live market data and portfolio tracking',
      'A dashboard for managing investments',
      'Secure, and usable by beginners and professionals alike',
      'Support from investment experts',
      'It works for someone making their first investment as well as for someone fine-tuning an existing portfolio.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=MQ_ehMOqMhk',
    image: {
      mobile: '/images/projects/rsoon-mobile.png',
      desktop: '/images/projects/rsoon-desktop.png',
    },
    skills: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React-Query',
      'Zustand',
      'Responsive Web Design',
      'Git',
      'Figma',
      'Chart.js',
      'Storybook',
      'Agile',
      'Jira',
      'Confluence',
    ],
  },
  {
    id: 4,
    title: 'Keydoc: Document Management System',
    shortDescription:
      "Keydoc is a document management system. It keeps a company's documents in one place, makes them easy to find and work on as a team, and controls who can access what.",
    description: [
      'Keydoc is a document management system that helps companies store, organize and work on their documents together.',
      'Main features:',
      'Central storage and organization of documents',
      'Advanced search and filters',
      'Collaboration tools for teams',
      'Access control and permissions',
      'Integrations with common productivity tools',
      'It is built to work for small teams and large enterprises alike.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=A0pn0R2W7Hc&t=3s',
    image: {
      desktop: '/images/projects/keydoc-desktop.png',
    },
    skills: [
      'React.js',
      'Javascript',
      'styled-components',
      'React Hooks',
      'Redux',
      'Material-UI',
      'Git',
    ],
  },
];
