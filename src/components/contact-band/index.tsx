import { Button } from '@/components/ui/button';
import { aboutPage, site } from '@/content/copy';

/** Closing call to action on the home and about pages. */
export const ContactBand = () => (
  <section
    aria-labelledby="contact-title"
    className="border-line bg-surface-sunken flex flex-col gap-8 rounded-2xl border p-8 md:flex-row md:items-center md:justify-between md:p-12"
  >
    <div className="flex flex-col gap-3">
      <p className="eyebrow text-accent-text">Contact</p>
      <h2 id="contact-title" className="text-h2">
        {aboutPage.contactTitle}
      </h2>
      <p className="text-fg-muted max-w-[520px]">{aboutPage.contactBody}</p>
    </div>
    <div className="flex flex-wrap gap-3">
      <Button href={site.social[0]} leadingIcon="linkedin">
        Message on LinkedIn
      </Button>
      <Button href={site.social[1]} variant="secondary" leadingIcon="github">
        GitHub
      </Button>
    </div>
  </section>
);
