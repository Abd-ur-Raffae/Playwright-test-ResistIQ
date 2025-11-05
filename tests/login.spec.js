import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('./auth/login');
  });

  test('Login with valid credentials', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('dev123@gmail.com');
    await page.locator('[data-testid="input-password"]').fill('11111111');
    await page.locator('[data-testid="button-login"]').click();

    await expect(page.locator('h2:text("Resistance Intelligence Assessments")')).toBeVisible();
  });
  test('Login with invalid credentials', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('dev123@gmail.com');
    await page.locator('[data-testid="input-password"]').fill('wrongpassword');
    await page.locator('[data-testid="button-login"]').click();

    await expect(page.locator('.text-sm.opacity-90')).toHaveText('Invalid email or password');
  });
  test.only('Login with empty email field', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('');
    await page.locator('[data-testid="input-password"]').fill('11111111');
    await page.locator('[data-testid="button-login"]').click();

    const validationMessage = await page.$eval('[data-testid="input-email"]', el => el.validationMessage);
        await expect(validationMessage).toBeTruthy();
  });
});
