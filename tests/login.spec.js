import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('./auth/login');
  });

  test('Login with valid credentials', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('dev123@gmail.com');
    await page.locator('[data-testid="input-password"]').fill('11111111');
    await page.locator('[data-testid="button-login"]').click();

    await expect(page.locator(".text-3xl.font-bold.text-foreground")).toBeVisible();
  });
  test('Login with invalid credentials', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('dev123@gmail.com');
    await page.locator('[data-testid="input-password"]').fill('wrongpassword');
    await page.locator('[data-testid="button-login"]').click();

    await expect(page.locator('.text-sm.opacity-90')).toHaveText('Invalid email or password');
  });
  test('Login with empty email field', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('');
    await page.locator('[data-testid="input-password"]').fill('11111111');
    await page.locator('[data-testid="button-login"]').click();

    const validationMessage = await page.$eval('[data-testid="input-email"]', el => el.validationMessage);
        await expect(validationMessage).toBeTruthy();
  });
  test('Login with empty password field', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('dev123@gmail.com');
    await page.locator('[data-testid="input-password"]').fill('');
    await page.locator('[data-testid="button-login"]').click();

    const validationMessage = await page.$eval('[data-testid="input-password"]', el => el.validationMessage);
    await expect(validationMessage).toBeTruthy();
  });
  test('Navigate to registration page', async ({ page }) => {
    await page.locator('[data-testid="link-register"]').click();
    await expect(page).toHaveURL(/\/auth\/register/);
  });
  test('Navigate to password recovery page', async ({ page }) => {
    await page.locator('[data-testid="link-forgot-password"]').click();
    await expect(page).toHaveURL(/\/auth\/forgot-password/);
  });
  test('Check signing in with Google', async ({ page }) => {
    await page.locator('[data-testid="button-google-login"]').click();
    await expect(page).toHaveURL(/accounts\.google\.com/);
  });
  });
