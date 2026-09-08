const DATE_FORMAT = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** `2026-03-04` -> `4 March 2026`. UTC so the rendered date cannot drift by timezone. */
export const formatDate = (iso: string) => DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`));

export const formatReadingTime = (minutes: number) => `${minutes} min read`;
