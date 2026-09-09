import { expect, test } from '@playwright/test';

test.describe('routing', () => {
  test('every primary route responds', async ({ page }) => {
    for (const path of ['/', '/about', '/projects', '/projects/1', '/blog']) {
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
    for (const path of ['/', '/about', '/projects', '/projects/1', '/blog']) {
      await page.goto(path);
      await expect(page.locator('h1'), `${path} should have one h1`).toHaveCount(1);
    }
  });

  test('project cards are crawlable links, not click handlers', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.locator('a[href="/projects/1"]').first()).toBeVisible();
  });

  test('the home page shows the portrait and the about page does not', async ({ page }) => {
    await page.goto('/');
    const portrait = page.getByRole('img', { name: 'Milad Mohammadi' });
    await expect(portrait).toBeVisible();
    // next/image rewrites the src, so assert the file actually resolved
    // rather than silently 404ing behind a correct-looking <img>.
    await expect
      .poll(() => portrait.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);

    await page.goto('/about');
    await expect(page.locator('img')).toHaveCount(0);
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
  /**
   * Post slugs are read from the index rather than hardcoded, so the suite
   * survives posts being added, renamed or removed. Content-dependent
   * assertions skip when nothing is published yet.
   */
  const firstPostHref = async (page: import('@playwright/test').Page) => {
    await page.goto('/blog');
    const links = page.locator(
      'main a[href^="/blog/"]:not([href*="/tags/"]):not([href*="/archive/"])',
    );
    return (await links.count()) > 0 ? await links.first().getAttribute('href') : null;
  };

  test('a published post renders with highlighted code and a working TOC', async ({ page }) => {
    const href = await firstPostHref(page);
    test.skip(!href, 'no published posts yet');

    await page.goto(href!);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('pre.shiki').first()).toBeVisible();

    const toc = page.locator('nav[aria-label="On this page"] a');
    if ((await toc.count()) > 0) {
      const anchor = await toc.first().getAttribute('href');
      expect(anchor).toMatch(/^#/);
      await expect(page.locator(anchor!)).toBeAttached();
    }
  });

  test('no highlighter javascript is shipped to the browser', async ({ page }) => {
    const href = await firstPostHref(page);
    test.skip(!href, 'no published posts yet');

    const scripts: string[] = [];
    page.on('response', (response) => {
      if (response.url().endsWith('.js')) scripts.push(response.url());
    });
    await page.goto(href!);
    expect(scripts.some((url) => /shiki|onigasm|textmate/i.test(url))).toBe(false);
  });

  test('the blog index always renders, empty or not', async ({ page }) => {
    const response = await page.goto('/blog');
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Blog');
  });

  test('drafts are excluded from production', async ({ page }) => {
    // example-post.mdx ships as a template with draft: true.
    const response = await page.goto('/blog/example-post');
    expect(response?.status()).toBe(404);
  });

  test('unknown tags and years 404', async ({ page }) => {
    expect((await page.goto('/blog/tags/not-a-real-tag'))?.status()).toBe(404);
    expect((await page.goto('/blog/archive/1999'))?.status()).toBe(404);
  });

  test('tag pages listed on the index resolve', async ({ page }) => {
    await page.goto('/blog');
    const tagLinks = page.locator('main a[href^="/blog/tags/"]');
    test.skip((await tagLinks.count()) === 0, 'no tags until a post is published');

    const href = await tagLinks.first().getAttribute('href');
    expect((await page.goto(href!))?.status()).toBe(200);
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
