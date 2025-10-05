import { Project } from "@/components/project-card/types";
import { Locale, t, tList } from "@/i18n/dict";

export const createProjectsBasedOnLocale = (locale: Locale) : Project[] => {
    return [
        {
            id: 1,
            title: t('project_mdotcar_client_and_expert_title', locale),
            description: tList('project_mdotcar_client_and_expert_description', locale),
            youtubeUrl: 'https://www.youtube.com/watch?v=KKhp32PGDS4&list=PL3h4tQDduGxOr2Rjf1sntJ2SJe7zPTE9G',
            image: {
              mobile: "/images/projects/mdotcar-client-mobile.png",
              desktop: "/images/projects/mdotcar-client-desktop.png",
              // mobile: "/images/projects/mdotcar-admin-mobile.png",
              // desktop: "/images/projects/mdotcar-admin-desktop.png",
            },
            skills: [
              { name: "React", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
              { name: "Node.js", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
            ],
          },
          {
            id: 2,
            title: t('project_mdotcar_admin_panel_title', locale),
            description: tList('project_mdotcar_admin_panel_description', locale),
            youtubeUrl: 'https://www.youtube.com/watch?v=hmv_jv5WRwQ',
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
            id: 3,
            title: t('project_rsoon_title', locale),
            description: tList('project_rsoon_description', locale),
            youtubeUrl: 'https://www.youtube.com/watch?v=MQ_ehMOqMhk',
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
            id: 4,
            title: t('project_keydoc_title', locale),
            description: tList('project_keydoc_description', locale),
            youtubeUrl: "https://www.youtube.com/watch?v=A0pn0R2W7Hc&t=3s",
            image: {
              desktop: "/images/projects/keydoc-desktop.png",
            },
            skills: [
              { name: "React", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
              { name: "Node.js", icon: <img src={'/images/flags/england-flag.svg'} alt={"flag"} className="w-6 h-4" /> },
            ],
          },
    ]
}

export const toEmbedUrl = (url: string) => {
  try {
    const u = new URL(url);
    const id =
      u.searchParams.get('v') ||
      (u.hostname.includes('youtu.be') ? u.pathname.slice(1) : null) ||
      (u.pathname.startsWith('/shorts/') ? u.pathname.split('/')[2] : null);

    const start =
      u.searchParams.get('t') || u.searchParams.get('start') || undefined;

    const base = `https://www.youtube.com/embed/${id ?? ''}`;
    const params = new URLSearchParams();
    if (start) params.set('start', start.replace('s', ''));
    return id ? `${base}?${params.toString()}`.replace(/\?$/, '') : url;
  } catch {
    return url;
  }
}