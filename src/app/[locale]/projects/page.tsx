import { t, tList, type Locale } from '@/i18n/dict';

type ProjectItem = {
  title: string;
  description: string[];
  youtubeUrl: string;
};

function toEmbedUrl(url: string) {
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

export default function Projects({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const projects: ProjectItem[] = [
    {
      title: t('project_mdotcar_client_and_expert_title', locale),
      description: tList('project_mdotcar_client_and_expert_description', locale),
      youtubeUrl: 'https://www.youtube.com/watch?v=KKhp32PGDS4&list=PL3h4tQDduGxOr2Rjf1sntJ2SJe7zPTE9G',
    },
    {
      title: t('project_mdotcar_admin_panel_title', locale),
      description: tList('project_mdotcar_admin_panel_description', locale),
      youtubeUrl: 'https://www.youtube.com/watch?v=hmv_jv5WRwQ',
    },
    {
      title: t('project_rsoon_title', locale),
      description: tList('project_rsoon_description', locale),
      youtubeUrl: 'https://www.youtube.com/watch?v=MQ_ehMOqMhk',
    },
  ];

  return (
    <section className="prose mx-auto">
      {/* <h2 className="mb-10">{t('projects_title', locale)}</h2> */}

      {projects.length === 0 ? (
        <p className="text-center">{t('projects_empty', locale)}</p>
      ) : (
        <div className="space-y-16">
          {projects.map((p, i) => (
            <article key={i} className="not-prose">
              {/* Title + Description */}
              <h2 className="mb-6 text-2xl font-bold">
                {p.title}
              </h2>
              <div className="mb-4">
                {p.description.map((line, index) => {
                  return <p key={index} className="mb-1 text-base leading-relaxed">
                    {line}
                  </p>
                })}
              </div>
              <a href={toEmbedUrl(p.youtubeUrl)} target='_blank'>
                {toEmbedUrl(p.youtubeUrl)}
              </a>
              {/* Video */}
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg mt-2">
                <iframe
                  className="h-full w-full"
                  src={toEmbedUrl(p.youtubeUrl)}
                  title={p.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}








