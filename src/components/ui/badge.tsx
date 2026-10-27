import Link from 'next/link';
import type { ReactNode } from 'react';

/** The Badge component: a status pill with a dot. */
const tones = {
  accent: ['bg-accent-subtle text-accent-text', 'bg-accent'],
  success: ['bg-success-subtle text-success', 'bg-success'],
  warning: ['bg-warning-subtle text-warning', 'bg-warning'],
  neutral: ['border border-line bg-surface-sunken text-fg-muted', 'bg-fg-subtle'],
} as const;

export const Badge = ({
  tone = 'accent',
  href,
  children,
}: {
  tone?: keyof typeof tones;
  href?: string;
  children: ReactNode;
}) => {
  const [base, dot] = tones[tone];
  const cls = `inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs leading-4 ${base}`;
  const content = (
    <>
      <span aria-hidden="true" className={`size-1.5 rounded-full ${dot}`} />
      {children}
    </>
  );
  return href ? (
    <Link href={href} className={`${cls} transition-opacity hover:opacity-80`}>
      {content}
    </Link>
  ) : (
    <span className={cls}>{content}</span>
  );
};
