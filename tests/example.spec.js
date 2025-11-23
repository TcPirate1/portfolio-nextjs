// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TC's Portfolio/);
  // TC's portfolio
});

test('About me component', async ({ page }) => {
  await page.goto('/');
  // Same as above

  // Get each link in profile component and click them
  await page.getByRole('link', { name: '#About' }).click();

  // Can change this for each component's respective header.
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
});

// Find example of testing forms for contact page.
// locator.fill() is used to fill a form field.
// Can be grouped and used with beforeEach and afterEach like in Cypress.