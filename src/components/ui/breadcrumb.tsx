import Link from 'next/link';

/** The Breadcrumb component. One level is enough on this site. */
export const Breadcrumb = ({
  parent,
  href,
  current,
}: {
  parent: string;
  href: string;
  current: string;
}) => (
  <nav aria-label="Breadcrumb" className="pb-6">
    <ol className="text-fg-subtle flex flex-wrap items-center gap-2 font-mono text-xs">
      <li>
        <Link href={href} className="hover:text-accent-text transition-colors">
          {parent}
        </Link>
      </li>
      <li aria-hidden="true">/</li>
      <li aria-current="page" className="text-fg-muted">
        {current}
      </li>
    </ol>
  </nav>
);
