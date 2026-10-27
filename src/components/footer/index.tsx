import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { footer, navLinks, site } from '@/content/copy';

const linkClass = 'text-fg-muted hover:text-accent-text text-sm transition-colors';

/** The Footer component: brand, two link columns, then the copyright line. */
export const Footer = () => (
  <footer className="border-line mt-24 border-t px-5 sm:px-8">
    <Container className="flex flex-col gap-10 pt-12 pb-10">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex max-w-sm flex-col gap-3">
          <span className="text-base font-semibold tracking-tight">{site.name}</span>
          <p className="text-fg-muted text-sm">{footer.blurb}</p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-fg-subtle">Site</p>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-fg-subtle">Elsewhere</p>
            {site.social.map((href) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {href.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
              </a>
            ))}
            <a href="/rss.xml" className={linkClass}>
              RSS
            </a>
          </div>
        </div>
      </div>

      <div className="border-line text-fg-subtle flex flex-col justify-between gap-2 border-t pt-6 font-mono text-xs sm:flex-row">
        <span>{footer.text}</span>
        <span>{footer.built}</span>
      </div>
    </Container>
  </footer>
);
