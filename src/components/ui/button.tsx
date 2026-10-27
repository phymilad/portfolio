import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { Icon, type IconName } from './icon';

/**
 * The Button component set in Figma: Variant × Size, with optional leading and
 * trailing icons. Renders a Link for internal hrefs, an external anchor for
 * http(s) hrefs, and a <button> otherwise, so navigation stays crawlable.
 */

const variants = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover',
  secondary: 'border border-line-strong bg-surface-raised text-fg hover:bg-surface-hover',
  ghost: 'text-fg-muted hover:bg-surface-hover hover:text-fg',
} as const;

const sizes = {
  sm: 'gap-1.5 px-3 py-1.5 text-[13px] leading-[18px]',
  md: 'gap-2 px-4 py-2.5 text-sm leading-5',
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export const buttonClass = (variant: Variant = 'primary', size: Size = 'md', className = '') =>
  [
    'inline-flex items-center justify-center rounded-lg font-medium whitespace-nowrap transition-colors',
    'disabled:pointer-events-none disabled:opacity-45',
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

type Common = {
  variant?: Variant;
  size?: Size;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (Common & { href: string } & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>)
  | (Common & { href?: undefined } & Omit<ComponentProps<'button'>, 'className' | 'children'>);

export const Button = (props: ButtonProps) => {
  const { variant, size, leadingIcon, trailingIcon, className, children, ...rest } = props;
  const cls = buttonClass(variant, size, className);
  const content = (
    <>
      {leadingIcon && <Icon name={leadingIcon} />}
      {children}
      {trailingIcon && (
        <Icon
          name={trailingIcon}
          className="transition-transform motion-safe:group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchor } = rest;
    return /^https?:\/\//.test(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${cls}`}
        {...anchor}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={`group ${cls}`} {...anchor}>
        {content}
      </Link>
    );
  }

  const button = rest as Omit<ComponentProps<'button'>, 'className' | 'children'>;
  return (
    <button type="button" className={`group cursor-pointer ${cls}`} {...button}>
      {content}
    </button>
  );
};

/** The Icon button component: 36px, icon-only, always labelled. */
export const IconButton = ({
  icon,
  label,
  href,
  variant = 'ghost',
  className = '',
  ...rest
}: {
  icon: IconName;
  label: string;
  href?: string;
  variant?: 'secondary' | 'ghost';
  className?: string;
} & Omit<ComponentProps<'button'>, 'className' | 'children'>) => {
  const cls = [
    'inline-flex size-9 items-center justify-center rounded-lg transition-colors',
    variant === 'secondary'
      ? 'border border-line bg-surface-raised text-fg-subtle hover:bg-surface-hover hover:text-fg'
      : 'text-fg-subtle hover:bg-surface-hover hover:text-fg',
    className,
  ].join(' ');

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={cls}
      >
        <Icon name={icon} size={20} />
      </a>
    );
  }
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`cursor-pointer ${cls}`}
      {...rest}
    >
      <Icon name={icon} size={20} />
    </button>
  );
};
