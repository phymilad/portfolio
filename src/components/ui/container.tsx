import type { ReactNode } from 'react';

/**
 * Prose keeps the 720px reading measure; everything else shares one 1152px
 * column (Grid/Desktop in Figma) that the header and footer line up with.
 */
const widths = {
  prose: 'max-w-[720px]',
  default: 'max-w-6xl',
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
