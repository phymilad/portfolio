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
    <section className="prose max-w-4xl mx-auto px-4">
      <h1 className="mb-10 text-center">{t('projects_title', locale)}</h1>

      {projects.length === 0 ? (
        <p className="text-center">{t('projects_empty', locale)}</p>
      ) : (
        <div className="space-y-16">
          {projects.map((p, i) => (
            <article key={i} className="not-prose">
              {/* Title + Description */}
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {p.title}
              </h2>
              <div className="mb-4">
                {p.description.map((line, index) => {
                  return <p key={index} className="mb-1 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {line}
                  </p>
                })}
              </div>
              {/* Video */}
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
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








