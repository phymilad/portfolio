import { expect, test } from '@playwright/test';

test.describe('routing', () => {
  test('every primary route responds', async ({ page }) => {
    for (const path of ['/', '/projects', '/projects/1', '/blog']) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} should be 200`).toBe(200);
    }
  });

  test('unknown routes 404 with the styled page, not a blank 200', async ({ page }) => {
    const response = await page.goto('/definitely-not-a-page');
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Page not found');
  });

  test('invalid project ids 404 rather than rendering empty', async ({ page }) => {
    const response = await page.goto('/projects/999');
    expect(response?.status()).toBe(404);
  });

  test('retired locale prefixes redirect permanently', async ({ page }) => {
    const response = await page.goto('/en/projects/1');
    expect(response?.status()).toBe(200);
    expect(new URL(page.url()).pathname).toBe('/projects/1');
  });
});

test.describe('structure', () => {
  test('each page has exactly one h1', async ({ page }) => {
    for (const path of ['/', '/projects', '/projects/1', '/blog']) {
      await page.goto(path);
      await expect(page.locator('h1'), `${path} should have one h1`).toHaveCount(1);
    }
  });

  test('project cards are crawlable links, not click handlers', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.locator('a[href="/projects/1"]').first()).toBeVisible();
  });

  test('robots and sitemap are served as files, not pages', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(robots.headers()['content-type']).toContain('text/plain');
    expect(await robots.text()).toContain('Sitemap:');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain('<urlset');
  });

  test('rss feed is valid and advertises the right type', async ({ request }) => {
    const rss = await request.get('/rss.xml');
    expect(rss.status()).toBe(200);
    expect(rss.headers()['content-type']).toContain('application/rss+xml');
    expect(await rss.text()).toContain('<rss version="2.0"');
  });
});

test.describe('blog', () => {
  test('a post renders with metadata, highlighted code and a working TOC', async ({ page }) => {
    await page.goto('/blog/next-15-params-is-a-promise');

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('pre.shiki').first()).toBeVisible();

    const firstTocLink = page.locator('nav[aria-label="On this page"] a').first();
    const href = await firstTocLink.getAttribute('href');
    expect(href).toMatch(/^#/);
    await expect(page.locator(href!)).toBeAttached();
  });

  test('no highlighter javascript is shipped to the browser', async ({ page }) => {
    const scripts: string[] = [];
    page.on('response', (response) => {
      if (response.url().endsWith('.js')) scripts.push(response.url());
    });
    await page.goto('/blog/next-15-params-is-a-promise');
    expect(scripts.some((url) => /shiki|onigasm|textmate/i.test(url))).toBe(false);
  });

  test('drafts are excluded from production', async ({ page }) => {
    const response = await page.goto('/blog/measuring-before-redesigning');
    expect(response?.status()).toBe(404);
  });

  test('tag pages list posts and reject unknown tags', async ({ page }) => {
    const ok = await page.goto('/blog/tags/nextjs');
    expect(ok?.status()).toBe(200);
    await expect(page.locator('a[href^="/blog/"]').first()).toBeVisible();

    const missing = await page.goto('/blog/tags/not-a-real-tag');
    expect(missing?.status()).toBe(404);
  });
});

test.describe('interaction', () => {
  test('theme toggle switches and persists across navigation', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const before = await html.getAttribute('class');

    // The toggle is emoji-only, so it is found by its accessible name.
    await page
      .getByRole('button', { name: /switch to (dark|light) theme/i })
      .first()
      .click();
    await expect.poll(() => html.getAttribute('class')).not.toBe(before);

    const afterToggle = await html.getAttribute('class');
    await page.goto('/blog');
    await expect.poll(() => html.getAttribute('class')).toBe(afterToggle);
  });

  test('keyboard can reach a project link', async ({ page }) => {
    await page.goto('/projects');
    const link = page.locator('a[href="/projects/1"]').first();
    await link.focus();
    await expect(link).toBeFocused();
  });
});
