import { test, type Page, expect } from "@playwright/test";

test('test', async ({ page }) => {
  await page.goto('https://juanpardo.tech/');
  await expect(page.getByText('AboutWorkContactJuan Pardo')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Work');
  await expect(page.locator('#zp-leG')).toContainText('About');
  await expect(page.getByRole('main')).toContainText('Contact');
  await expect(page.locator('section').filter({ hasText: '{ "name": "juan pardo", "' }).locator('img').nth(2)).toBeVisible();
  await expect(page.locator('#z_-f0-')).toBeVisible();
  await expect(page.locator('section').filter({ hasText: '{ "name": "juan pardo", "' }).locator('img').first()).toBeVisible();
  await expect(page.getByText('{ "name": "juan pardo", "')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('{ "name": "juan pardo", "occupation": "software engineer", "likes": ["football", "sushi"],}');
  await page.getByRole('link', { name: 'Work' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Go to Linkedin-in page' }).click();
  await page.getByRole('link', { name: 'Go to Github page' }).click();
  await page.goto('https://juanpardo.tech/');
  await page.goBack();
});