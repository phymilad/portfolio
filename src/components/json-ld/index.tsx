/**
 * Renders a JSON-LD block. Server component: the markup must be in the HTML
 * that crawlers receive, not injected on the client.
 */
export const JsonLd = ({ schema }: { schema: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    // The payload is built from our own typed content modules, never from
    // user input, so there is no untrusted data to escape here.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);
