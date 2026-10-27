import { ChevronLink } from './chevron-link';

/** The Section header component: title, optional "view all", hairline. */
export const SectionHeader = ({
  title,
  href,
  cta,
}: {
  title: string;
  href?: string;
  cta?: string;
}) => (
  <div className="border-line flex items-center justify-between gap-4 border-b pb-4">
    <h2 className="text-h2">{title}</h2>
    {href && cta && <ChevronLink href={href}>{cta}</ChevronLink>}
  </div>
);
