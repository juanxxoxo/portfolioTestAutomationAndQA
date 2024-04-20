import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://juanpardo.tech/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Your name').click();
  await page.getByPlaceholder('Your name').fill('test');
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('test@gmail.com');
  await page.getByPlaceholder('Enter your message').click();
  await page.getByPlaceholder('Enter your message').fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
});