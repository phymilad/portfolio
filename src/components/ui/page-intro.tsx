import type { ReactNode } from 'react';

/** Eyebrow, page title and lead: the top of every page except home. */
export const PageIntro = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) => (
  <header className="pb-12">
    <p className="eyebrow text-accent-text pb-4">{eyebrow}</p>
    <h1 className="text-h1">{title}</h1>
    {children && (
      <div className="text-fg-muted max-w-[680px] pt-4 text-base md:text-lg">{children}</div>
    )}
  </header>
);
