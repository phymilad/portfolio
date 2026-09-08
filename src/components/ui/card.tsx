import type { ElementType, ReactNode } from 'react';

/**
 * The single card surface. This markup was previously copy-pasted as a ~200
 * character class string in six places, and the three copies had already
 * drifted to three different border colours from two different grey scales.
 */
export const Card = ({
  as: Tag = 'div',
  interactive = false,
  className = '',
  children,
}: {
  as?: ElementType;
  /** Adds hover lift. Guarded by motion-safe so reduced-motion users opt out. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) => (
  <Tag
    className={[
      'rounded-card border-line bg-surface-raised border p-6',
      'motion-safe:animate-fade-in-up',
      interactive &&
        'hover:border-line-strong transition-[transform,border-color] duration-300 ease-out motion-safe:hover:-translate-y-1',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </Tag>
);
