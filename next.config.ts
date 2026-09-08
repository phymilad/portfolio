import type { NextConfig } from "next";

// The site was previously served under locale prefixes (/en, /fa, /de, /nl).
// It is English-only at the root now, so those paths are permanently redirected
// rather than left to 404. See docs/decisions.md §1.
const RETIRED_LOCALES = ['en', 'fa', 'de', 'nl'];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_LOCALES.flatMap((locale) => [
      { source: `/${locale}`, destination: '/', permanent: true },
      { source: `/${locale}/:path*`, destination: '/:path*', permanent: true },
    ]);
  },
};

export default nextConfig;
