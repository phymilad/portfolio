import type { ElementType, ReactNode } from 'react';

/**
 * The single card surface (the Card component in Figma): raised, hairline
 * border, 12px radius. Hover adds Shadow/MD and a stronger border.
 */
export const Card = ({
  as: Tag = 'div',
  interactive = false,
  className = '',
  children,
}: {
  as?: ElementType;
  /** Adds the hover state. The lift is guarded by motion-safe. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) => (
  <Tag
    className={[
      'border-line bg-surface-raised rounded-xl border p-6',
      'motion-safe:animate-fade-in-up',
      interactive &&
        'hover:border-line-strong transition-[transform,border-color,box-shadow] duration-300 ease-out hover:shadow-md motion-safe:hover:-translate-y-0.5',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </Tag>
);
