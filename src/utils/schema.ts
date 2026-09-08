import { site } from '@/content/copy';
import type { Project } from '@/content/projects';
import { toEmbedUrl } from '@/utils/url';
import type { Post } from '@/lib/blog';

const abs = (path: string) => new URL(path, site.url).toString();

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  sameAs: [...site.social],
});

export const webSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: 'en',
  publisher: { '@id': `${site.url}/#person` },
});

export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: abs(crumb.path),
  })),
});

export const videoSchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: project.title,
  description: project.shortDescription,
  // schema.org expects the player URL here, not the watch page.
  embedUrl: toEmbedUrl(project.youtubeUrl),
  url: project.youtubeUrl,
  thumbnailUrl: project.image.desktop ? abs(project.image.desktop) : undefined,
  creator: { '@id': `${site.url}/#person` },
});

export const blogPostingSchema = (post: Post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': abs(`/blog/${post.slug}#post`),
  headline: post.title,
  description: post.description,
  url: abs(`/blog/${post.slug}`),
  datePublished: post.publishedAt,
  dateModified: post.updatedAt ?? post.publishedAt,
  inLanguage: 'en',
  keywords: post.tags,
  wordCount: post.body.trim().split(/\s+/).filter(Boolean).length,
  image: abs(`/blog/${post.slug}/opengraph-image`),
  author: { '@id': `${site.url}/#person` },
  publisher: { '@id': `${site.url}/#person` },
  isPartOf: { '@id': `${site.url}/#website` },
  mainEntityOfPage: abs(`/blog/${post.slug}`),
});
