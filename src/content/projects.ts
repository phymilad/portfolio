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
    title: 'Mdotcar \u2013 Client & Expert Web App Demo | Real-Time Roadside Assistance',
    shortDescription:
      'Mdotcar is an intelligent roadside assistance platform that connects clients and experts in real time. The video demonstrates the full process \u2014 from requesting help to completing the service \u2014 showcasing seamless, efficient communication and real-time management.',
    description: [
      'Mdotcar is a smart roadside assistance web application that connects clients with experts in real time. In this video, we demonstrate the complete flow of a service request \u2014 from the client side to the expert side \u2014 showing how Mdotcar makes emergency support seamless and efficient.',
      'What you\u2019ll see in this video:',
      'How a client creates a roadside assistance request',
      'Real-time updates powered by web sockets',
      'Expert workflow: receiving, managing, and completing the request',
      'Full demonstration of both client web app and expert web app',
      'Smooth interaction between client and expert until the service is delivered',
      'With Mdotcar, clients get quick, reliable help on the road, while experts can manage requests with an intuitive, real-time platform.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=KKhp32PGDS4&list=PL3h4tQDduGxOr2Rjf1sntJ2SJe7zPTE9G',
    image: {
      mobile: '/images/projects/mdotcar-client-mobile.png',
      desktop: '/images/projects/mdotcar-client-desktop.png',
    },
    skills: ['React.js', 'TypeScript', 'React Hooks', 'Redux Toolkit', 'Material-UI', 'Leaflet', 'Storybook', 'Vitest', 'Responsive Web Design', 'Agile', 'Git', 'Jira', 'Confluence', 'Figma'],
  },
  {
    id: 2,
    title: 'Mdotcar - Admin Panel',
    shortDescription:
      'The Mdotcar Admin Panel is the central hub for managing the entire roadside assistance platform. It provides comprehensive control over client and expert accounts, service requests, and analytics, ensuring smooth operations and a seamless experience for all users.',
    description: [
      'In this video, we take you inside the Admin Panel of mdotcar, the central hub where everything comes together. The admin panel is designed to give full control and visibility into how the platform operates, ensuring a smooth experience for both clients and experts.',
      'What you\u2019ll see in this video:',
      'Dashboard overview with key insights',
      'Managing client and expert accounts',
      'Service requests monitoring and tracking',
      'Approvals, reviews, and dispute handling',
      'Analytics and reporting for better decision-making',
      'Settings & customization options and ...',
      'With the admin panel, Mdotcar ensures that the entire ecosystem runs efficiently \u2014 keeping clients satisfied, experts supported, and operations streamlined.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=hmv_jv5WRwQ',
    image: {
      mobile: '/images/projects/mdotcar-admin-mobile.png',
      desktop: '/images/projects/mdotcar-admin-desktop.png',
    },
    skills: ['React.js', 'TypeScript', 'React Hooks', 'Redux Toolkit', 'Material-UI', 'Leaflet', 'Storybook', 'Vitest', 'Responsive Web Design', 'Agile', 'Git', 'Jira', 'Confluence', 'Figma'],
  },
  {
    id: 3,
    title: 'Rsoon \u2013 Smart Investment Consulting Web Application | Grow Your Wealth with Confidence',
    shortDescription:
      'Rsoon is a modern investment consulting platform that simplifies financial decision-making. It offers personalized guidance, real-time market insights, and secure tools to help both beginners and professionals manage and grow their investments confidently.',
    description: [
      'Rsoon is a modern web application for investment consulting, designed to help individuals and businesses make smarter financial decisions. With powerful tools, expert guidance, and real-time insights, Rsoon simplifies the investment process and empowers users to grow their wealth with confidence.',
      'Key Features of Rsoon: Personalized investment consulting tailored to your goals',
      'Real-time market insights and portfolio tracking',
      'Easy-to-use dashboard for managing investments',
      'Secure, reliable, and built for both beginners & professionals',
      'Expert support for smarter decision-making',
      'Whether you\u2019re just starting your investment journey or looking to optimize your portfolio, Rsoon is your trusted partner for financial growth.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=MQ_ehMOqMhk',
    image: {
      mobile: '/images/projects/rsoon-mobile.png',
      desktop: '/images/projects/rsoon-desktop.png',
    },
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand', 'Responsive Web Design', 'Git', 'Figma', 'Chart.js', 'Storybook', 'Agile', 'Jira', 'Confluence'],
  },
  {
    id: 4,
    title: 'Keydoc \u2013 Document Management System',
    shortDescription:
      'Keydoc is a robust document management system that centralizes storage, enhances collaboration, and provides secure access controls. It is designed to help businesses of all sizes manage their documents efficiently and effectively.',
    description: [
      'Keydoc is a powerful document management system designed to help businesses organize, manage, and collaborate on their documents more effectively.',
      'Key Features of Keydoc: Centralized document storage and organization',
      'Advanced search and filtering options',
      'Collaboration tools for teams',
      'Secure access controls and permissions',
      'Integration with popular productivity tools',
      'Whether you\u2019re a small business or a large enterprise, Keydoc is your go-to solution for efficient document management.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=A0pn0R2W7Hc&t=3s',
    image: {
      desktop: '/images/projects/keydoc-desktop.png',
    },
    skills: ['React.js', 'Javascript', 'styled-components', 'React Hooks', 'Redux', 'Material-UI', 'Git'],
  },
];
