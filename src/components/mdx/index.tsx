import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { slugify } from '@/lib/toc';
import { Icon } from '@/components/ui/icon';

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
        <a href={`#${id}`} className="hover:text-accent-text no-underline transition-colors">
          {children}
        </a>
      </Tag>
    );
  };

/** The Link component's Inline variant. */
const linkClass =
  'text-accent-text hover:text-accent-text-strong decoration-accent-text/40 hover:decoration-accent-text-strong underline underline-offset-[3px] transition-colors';

export const mdxComponents = {
  h2: heading('h2', 'text-h2 mt-14 mb-4'),
  h3: heading('h3', 'text-h4 md:text-h3 mt-10 mb-3'),

  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-fg-muted my-5 leading-[1.75] md:text-lg md:leading-[1.75]">{children}</p>
  ),

  a: ({ href = '', children }: { href?: string; children?: ReactNode }) => {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {children}
      </a>
    ) : (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    );
  },

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="text-fg-muted marker:text-fg-subtle my-5 list-disc space-y-2 ps-6 leading-[1.75] md:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="text-fg-muted marker:text-fg-subtle my-5 list-decimal space-y-2 ps-6 leading-[1.75] marker:font-mono marker:text-sm md:text-lg">
      {children}
    </ol>
  ),

  // The Callout component, Note tone.
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="bg-accent-subtle my-7 flex gap-3 rounded-lg p-4 [&_p]:my-0 [&_p]:text-base">
      <Icon name="info" size={18} className="text-accent-text mt-1" />
      <div className="flex flex-col gap-2">{children}</div>
    </blockquote>
  ),

  hr: () => <hr className="border-line my-10" />,

  // NOTE: no `code` override here. Shiki's <pre> still contains a <code>, so a
  // component override would style block code too. And since <code> is
  // inline, it paints one box per line. Inline code is styled in globals.css
  // via :not(pre) > code, which block code cannot match.

  table: ({ children }: { children?: ReactNode }) => (
    <div className="border-line my-7 overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border-line bg-surface-sunken text-fg border-b px-4 py-2.5 text-start font-medium">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border-line text-fg-muted border-b px-4 py-2.5 align-top">{children}</td>
  ),

  img: (props: { src?: string; alt?: string }) => (
    <Image
      src={props.src ?? ''}
      alt={props.alt ?? ''}
      width={1600}
      height={900}
      className="border-line my-7 h-auto w-full rounded-lg border"
    />
  ),
};
