import { test, expect } from '@playwright/test';

// Assumes your dev server runs at http://localhost:5173/ by default
// Adjust baseURL or use test.use({ baseURL: ... }) if needed

test.describe('Button Component', () => {
  test('should render with correct label', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: /click me/i })).toBeVisible();
  });

  test('should call onClick handler', async ({ page }) => {
    await page.goto('/');
    // This test assumes an alert is triggered by the Button story
    page.once('dialog', dialog => {
      expect(dialog.message()).toMatch(/clicked/i);
      dialog.dismiss();
    });
    await page.getByRole('button', { name: /click me|success/i }).first().click();
  });

  test('should apply custom styles', async ({ page }) => {
    await page.goto('/');
    const styledButton = await page.getByRole('button', { name: /styled|success/i }).first();
    const bg = await styledButton.evaluate(el => getComputedStyle(el).backgroundColor);
    expect([bg]).toContain('rgb(40, 167, 69)'); // #28a745 as rgb
  });
});
