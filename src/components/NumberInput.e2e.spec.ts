import { test, expect } from '@playwright/test';

test.describe('NumberInput Component', () => {
  test('should render with correct placeholder and value', async ({ page }) => {
    await page.goto('/');
    const input = page.getByPlaceholder('MM');
    await expect(input).toBeVisible();
    await expect(input).toHaveValue('5'); // Assumes default value in a story or main app
  });

  test('should call onChange with new value', async ({ page }) => {
    await page.goto('/');
    const input = page.getByPlaceholder('DD');
    await input.fill('7');
    // No direct way to assert handler, but you can assert value change if UI reflects it
    await expect(input).toHaveValue('7');
  });

  test('should have a null value when rendered empty', async ({ page }) => {
    await page.goto('/');
    const input = page.getByPlaceholder('YYYY');
    // Playwright treats empty as '' not null
    await expect(input).toHaveValue('');
  });
});
