import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { slugify } from '@/lib/toc';

const textOf = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
};

/**
 * Heading ids are derived here rather than via rehype-slug: the TOC already
 * needs the same slugs from the raw markdown, and one shared slugify keeps the
 * anchors and the TOC from drifting apart.
 */
const heading = (Tag: 'h2' | 'h3', className: string) =>
  function Heading({ children }: { children?: ReactNode }) {
    const id = slugify(textOf(children));
    return (
      <Tag id={id} className={`scroll-mt-24 ${className}`}>
        <a href={`#${id}`} className="hover:text-accent no-underline">
          {children}
        </a>
      </Tag>
    );
  };

export const mdxComponents = {
  h2: heading('h2', 'font-display text-heading mt-12 mb-3'),
  h3: heading('h3', 'font-display text-lg mt-8 mb-2'),

  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-fg-muted my-5 leading-[1.75]">{children}</p>
  ),

  a: ({ href = '', children }: { href?: string; children?: ReactNode }) => {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-hover underline underline-offset-2"
      >
        {children}
      </a>
    ) : (
      <Link
        href={href}
        className="text-accent hover:text-accent-hover underline underline-offset-2"
      >
        {children}
      </Link>
    );
  },

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="text-fg-muted my-5 list-disc space-y-2 ps-6 leading-[1.75]">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="text-fg-muted my-5 list-decimal space-y-2 ps-6 leading-[1.75]">{children}</ol>
  ),

  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-accent text-fg-muted my-6 border-s-2 ps-5 italic">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="border-line my-10" />,

  // NOTE: no `code` override here. Shiki's <pre> still contains a <code>, so a
  // component override would style block code too — and because <code> is
  // inline, it paints one box per line. Inline code is styled in globals.css
  // via :not(pre) > code, which block code cannot match.

  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border-line bg-surface-sunken border px-3 py-2 text-start font-medium">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border-line text-fg-muted border px-3 py-2 align-top">{children}</td>
  ),

  img: (props: { src?: string; alt?: string }) => (
    <Image
      src={props.src ?? ''}
      alt={props.alt ?? ''}
      width={1600}
      height={900}
      className="border-line my-6 h-auto w-full rounded-xl border"
    />
  ),
};
