import { test, expect } from '@playwright/test';

test.describe('AgeVerification Component', () => {
  test('should show error for missing date of birth', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /verify/i }).click();
    await expect(page.getByText(/please enter your full date of birth/i)).toBeVisible();
  });

  test('should deny access and show correct error for underage', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('MM').fill('1');
    await page.getByPlaceholder('DD').fill('1');
    await page.getByPlaceholder('YYYY').fill('2015'); // under 18
    await page.getByRole('button', { name: /verify/i }).click();
    await expect(page.getByText(/must be at least 18 years old/i)).toBeVisible();
  });

  test('should grant access for valid age', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('MM').fill('1');
    await page.getByPlaceholder('DD').fill('1');
    await page.getByPlaceholder('YYYY').fill('2000'); // over 18
    await page.getByRole('button', { name: /verify/i }).click();
    await expect(page.getByText(/access granted/i)).toBeVisible();
  });
});
