export const toEmbedUrl = (url: string) => {
  try {
    const u = new URL(url);
    const id =
      u.searchParams.get('v') ||
      (u.hostname.includes('youtu.be') ? u.pathname.slice(1) : null) ||
      (u.pathname.startsWith('/shorts/') ? u.pathname.split('/')[2] : null);

    const start = u.searchParams.get('t') || u.searchParams.get('start') || undefined;

    const base = `https://www.youtube.com/embed/${id ?? ''}`;
    const params = new URLSearchParams();
    if (start) params.set('start', start.replace('s', ''));
    return id ? `${base}?${params.toString()}`.replace(/\?$/, '') : url;
  } catch {
    return url;
  }
};
