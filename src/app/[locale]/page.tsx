// src/app/[locale]/page.tsx (یا هرجا Home تعریف شده)
import Link from 'next/link';
import { t, tList, type Locale } from '@/i18n/dict';
import { Project } from '@/components/project-card/types';
import { ProjectCard } from '@/components/project-card';

const projects: Project[] = [
  {
    title: "Mdotcar Admin Panel",
    description: "Admin Panel for Mdotcar at Tafarda Startup Studio.",
    image: {
      mobile: "/images/projects/mdotcar-admin-mobile.png",
      desktop: "/images/projects/mdotcar-admin-desktop.png",
    },
    skills: [
      { name: "React", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
      { name: "Node.js", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
    ],
  },
  {
    title: "Mdotcar Client and Expert Panel",
    description: "Client and Expert Panel for Mdotcar at Tafarda Startup Studio.",
    image: {
      mobile: "/images/projects/mdotcar-client-mobile.png",
      desktop: "/images/projects/mdotcar-client-desktop.png",
    },
    skills: [
      { name: "React", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
      { name: "Node.js", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
    ],
  },
  {
    title: "Rsoon Dashboard at Tafarda Startup Studio.",
    description: "Client Dashboard for Rsoon (Finantion Consulting Application) at Tafarda Startup Studio.",
    image: {
      mobile: "/images/projects/rsoon-mobile.png",
      desktop: "/images/projects/rsoon-desktop.png",
    },
    skills: [
      { name: "React", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
      { name: "Node.js", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
    ],
  },
  {
    title: "Keydoc at Danesh Hamara",
    description: "Client Dashboard for Keydoc at Danesh Hamara.",
    image: {
      desktop: "/images/projects/keydoc-desktop.png",
    },
    skills: [
      { name: "React", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
      { name: "Node.js", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
    ],
  },
];

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const base = `/${locale}`;

  return (<>
    <section className="prose max-w-none">
      {/* Intro */}
      <h1 className="text-2xl font-bold">Hi, I’m Milad</h1>
      <p className="text-lg">
        I build fast and scalable applications using modern web technologies.
      </p>

      {/* Experience highlights */}
      <h2 className="mt-6 text-xl font-semibold">Experience Highlights</h2>
      <ul className="space-y-3">
        <li>Led development of a Document Management System (DMS) at Danesh-Hamara.</li>
        <li>Built the front-end for <strong>M.car</strong> at Tafarda Startup Studio.</li>
        <li>Contributing to <strong>Rsoon</strong>, an investing consultant software (in progress).</li>
        <li>Deep experience with <strong>React/Next</strong>, Redux Toolkit, Material-UI, Git workflows.</li>
      </ul>
    </section>
    <section className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-4">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </section>
    </>
  );
}
