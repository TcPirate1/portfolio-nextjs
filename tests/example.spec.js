// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // http://localhost:3000/

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  // TC's portfolio
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Same as above

  // Get each link in profile component and click them
  await page.getByRole('link', { name: 'Get started' }).click();

  // Can change this for each component's respective header.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// Find example of testing forms for contact page.
// locator.fill() is used to fill a form field.
// Can be grouped and used with beforeEach and afterEach like in Cypress.