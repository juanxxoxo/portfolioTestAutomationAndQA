import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or').click();
  await page.getByLabel('Phone number, username, or').fill('aweso.mepapaya');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('C');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Canada20');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Canada123');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.goto('https://www.instagram.com/accounts/onetap/?next=%2F');
  await page.getByRole('link', { name: 'Reels Reels' }).click();
  await page.getByRole('link', { name: 'Search Search' }).click();
  await page.getByPlaceholder('Search').fill('gym');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('ArrowLeft');
  await page.getByPlaceholder('Search').fill('#gym');
  await page.getByRole('link', { name: 'Hashtag #gym 273,604,748 posts' }).click();
  await page.getByRole('link', { name: 'Photo by Ryan Kenny on April' }).click();
  await page.getByRole('button', { name: 'Share Post' }).click();
  await page.getByPlaceholder('Search...').fill('juanofakind');
  await page.getByRole('button', { name: 'Juan Pardo Juan Pardo' }).click();
  await page.getByRole('button', { name: 'Send' }).click();
});