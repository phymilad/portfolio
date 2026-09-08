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
        <a href={`#${id}`} className="no-underline hover:text-accent">
          {children}
        </a>
      </Tag>
    );
  };

export const mdxComponents = {
  h2: heading('h2', 'font-display text-heading mt-12 mb-3'),
  h3: heading('h3', 'font-display text-lg mt-8 mb-2'),

  p: ({ children }: { children?: ReactNode }) => (
    <p className="leading-[1.75] text-fg-muted my-5">{children}</p>
  ),

  a: ({ href = '', children }: { href?: string; children?: ReactNode }) => {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 hover:text-accent-hover"
      >
        {children}
      </a>
    ) : (
      <Link href={href} className="text-accent underline underline-offset-2 hover:text-accent-hover">
        {children}
      </Link>
    );
  },

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc ps-6 my-5 space-y-2 text-fg-muted leading-[1.75]">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal ps-6 my-5 space-y-2 text-fg-muted leading-[1.75]">{children}</ol>
  ),

  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-s-2 border-accent ps-5 my-6 text-fg-muted italic">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-10 border-line" />,

  // NOTE: no `code` override here. Shiki's <pre> still contains a <code>, so a
  // component override would style block code too — and because <code> is
  // inline, it paints one box per line. Inline code is styled in globals.css
  // via :not(pre) > code, which block code cannot match.

  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border border-line bg-surface-sunken px-3 py-2 text-start font-medium">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border border-line px-3 py-2 text-fg-muted align-top">{children}</td>
  ),

  img: (props: { src?: string; alt?: string }) => (
    <Image
      src={props.src ?? ''}
      alt={props.alt ?? ''}
      width={1600}
      height={900}
      className="rounded-xl border border-line my-6 h-auto w-full"
    />
  ),
};
