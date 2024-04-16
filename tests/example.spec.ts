import { test, type Page, expect } from "@playwright/test";

test('test', async ({ page }) => {
  await page.goto('https://juanpardo.tech/');
  //Landing Page
  //Expect function will assert elements inside the Website
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
  
  //Porfolio, My Work
  await page.goto('https://juanpardo.tech/#work');
  await page.getByRole('link', { name: 'Work' }).click();
  await expect(page.locator('#zGBh2p > a').first()).toBeVisible();
  await expect(page.locator('#work')).toContainText('QA automation testing, personal portfolio');
  await expect(page.locator('#work')).toContainText('Portfolio');
  await expect(page.locator('#work')).toContainText('My Work');
  await expect(page.getByRole('link', { name: 'React JS, random gif generator' })).toBeVisible();
  await expect(page.locator('#zpUE-p').getByRole('link')).toBeVisible();
  await expect(page.locator('#work')).toContainText('Data Analytics, dementia dataset study');
  await expect(page.locator('#work').getByRole('link').nth(3)).toBeVisible();

  //About Me
  await expect(page.locator('#about')).toContainText('Portfolio');
  await expect(page.locator('#about')).toContainText('About Me');
  await expect(page.getByText('About MeI\'m a passionate and')).toBeVisible();   
});