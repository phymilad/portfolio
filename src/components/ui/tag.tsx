import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * The Tag component: small mono labels for skills, topics and years. Hover
 * styles apply only when the tag is a link.
 */
const variants = {
  neutral: [
    'border-line bg-surface-sunken text-fg-muted',
    'hover:border-line-strong hover:text-fg',
  ],
  accent: ['border-transparent bg-accent-subtle text-accent-text', 'hover:border-line-accent'],
  outline: ['border-line text-fg-muted', 'hover:border-line-accent hover:text-accent-text'],
} as const;

export const Tag = ({
  variant = 'neutral',
  href,
  count,
  children,
}: {
  variant?: keyof typeof variants;
  href?: string;
  count?: number;
  children: ReactNode;
}) => {
  const [base, hover] = variants[variant];
  const cls = `inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs leading-4 ${base}`;
  const content = (
    <>
      {children}
      {count !== undefined && <span className="text-fg-subtle">{count}</span>}
    </>
  );

  if (!href) return <span className={cls}>{content}</span>;
  if (href.startsWith('/') && !href.endsWith('.xml')) {
    return (
      <Link href={href} className={`${cls} ${hover} transition-colors`}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={`${cls} ${hover} transition-colors`}>
      {content}
    </a>
  );
};

export const TagList = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>;
