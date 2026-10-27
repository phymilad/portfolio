import Link from 'next/link';
import { Icon } from './icon';

type Target = { href: string; title: string } | undefined;

/** The Pager component: previous / next, each a bordered card. */
export const Pager = ({ prev, next, label }: { prev: Target; next: Target; label: string }) => {
  if (!prev && !next) return null;
  const card =
    'border-line bg-surface-raised hover:border-line-strong group flex flex-col gap-1.5 rounded-xl border p-5 transition-colors';
  return (
    <nav aria-label={label} className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link href={prev.href} className={card}>
          <span className="text-fg-subtle inline-flex items-center gap-1 font-mono text-xs">
            <Icon name="chevron-left" size={14} />
            Previous
          </span>
          <span className="text-h4 group-hover:text-accent-text font-semibold transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <Link href={next.href} className={`${card} sm:items-end sm:text-right`}>
          <span className="text-fg-subtle inline-flex items-center gap-1 font-mono text-xs">
            Next
            <Icon name="chevron-right" size={14} />
          </span>
          <span className="text-h4 group-hover:text-accent-text font-semibold transition-colors">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
};
