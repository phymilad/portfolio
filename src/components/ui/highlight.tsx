import type { ReactNode } from 'react';
import { Icon } from './icon';

/** The Highlight component: a checked list item. Use inside a <ul>. */
export const Highlight = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3">
    <span className="bg-accent-subtle text-accent-text mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full">
      <Icon name="check" size={14} />
    </span>
    <span className="text-fg-muted leading-relaxed md:text-lg">{children}</span>
  </li>
);
