import type { MetadataRoute } from 'next';
import { site } from '@/content/copy';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => new URL(path, site.url).toString();
  const lastModified = new Date();

  return [
    { url: abs('/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: abs('/projects'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: abs('/blog'), lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...projects.map((project) => ({
      url: abs(`/projects/${project.id}`),
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
