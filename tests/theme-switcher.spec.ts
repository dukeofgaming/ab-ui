import { test, expect } from '@playwright/test';

test.describe('ThemeSwitcher component', () => {
  test('should render and allow theme selection', async ({ page }) => {
    await page.goto('http://localhost:5173');
    // Find the theme switcher select by aria-label
    const select = await page.getByLabel('Switch theme');
    await expect(select).toBeVisible();
    // Select a theme and verify class on <html>
    await select.selectOption('theme-financial');
    await expect(page.locator('html')).toHaveClass(/theme-financial/);
    // Select another theme and verify
    await select.selectOption('theme-orders');
    await expect(page.locator('html')).toHaveClass(/theme-orders/);
  });
});
