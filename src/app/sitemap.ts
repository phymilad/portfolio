import type { MetadataRoute } from 'next';
import { site } from '@/content/copy';
import { projects } from '@/content/projects';
import { getAllPosts, getAllTags } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => new URL(path, site.url).toString();
  const lastModified = new Date();

  const posts = getAllPosts().filter((post) => !post.draft);

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
    ...posts.map((post) => ({
      url: abs(`/blog/${post.slug}`),
      // The post's own date, not the build date — otherwise every post looks
      // freshly modified on every deploy and lastmod stops meaning anything.
      lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T00:00:00Z`),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...getAllTags().map(({ tag }) => ({
      url: abs(`/blog/tags/${tag}`),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })),
  ];
}
