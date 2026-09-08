import type { ReactNode } from 'react';

/**
 * Every route used to share one 1024px column, which is why the site read as
 * uniform regardless of what was on the page. Width is now a property of the
 * content: prose gets a reading measure, listings get room.
 */
const widths = {
  prose: 'max-w-[68ch]',
  default: 'max-w-screen-lg',
  wide: 'max-w-6xl',
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
