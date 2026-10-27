import type { ReactNode } from 'react';

/**
 * Prose keeps a reading measure; everything else shares one 1280px column that
 * the header and footer line up with.
 */
const widths = {
  prose: 'max-w-[88ch]',
  default: 'max-w-7xl',
  wide: 'max-w-7xl',
} as const;

export const Container = ({
  width = 'default',
  className = '',
  children,
}: {
  width?: keyof typeof widths;
  className?: string;
  children: ReactNode;
}) => <div className={`mx-auto w-full ${widths[width]} ${className}`}>{children}</div>;
