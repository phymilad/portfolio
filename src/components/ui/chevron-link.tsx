import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './icon';

/** The Link component's Chevron variant. External hrefs open in a new tab. */
export const ChevronLink = ({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  const external = /^https?:\/\//.test(href);
  const cls = `group text-fg hover:text-accent-text inline-flex items-center gap-1 text-sm font-medium transition-colors ${className}`;
  const content = (
    <>
      {children}
      <Icon
        name="chevron-right"
        className="text-fg-subtle group-hover:text-accent-text transition-[color,transform] motion-safe:group-hover:translate-x-0.5"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
};
