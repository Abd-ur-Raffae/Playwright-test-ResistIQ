
import { test, expect } from '@playwright/test';

test.describe('Register account', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./auth/register')
    })
    test('Register new account',async ({page})=>{
        const randomNum = Math.floor(Math.random() * 1000000); // 0–999999
        await page.locator('[data-testid="input-email"]').fill(`test${randomNum}@gmail.com`);
        await page.locator('[data-testid="input-password"]').fill('12345678');
        await page.locator('[data-testid="input-confirmPassword"]').fill('12345678');
        await page.locator('[data-testid="button-register"]').click();

        await expect(page.locator('h2:text("Resistance Intelligence Assessments")')).toBeVisible()

    })

     test('Register with already registered email',async ({page})=>{
        await page.locator('[data-testid="input-email"]').fill(`dev123@gmail.com`);
        await page.locator('[data-testid="input-password"]').fill('12345678');
        await page.locator('[data-testid="input-confirmPassword"]').fill('12345678');
        await page.locator('[data-testid="button-register"]').click();

        await expect(page.locator('.text-sm.opacity-90')).toHaveText('Email already registered');
    })

     test('Register with invalid email format',async ({page})=>{
        const randomNum = Math.floor(Math.random() * 1000000); 
        await page.locator('[data-testid="input-email"]').fill(`test${randomNum}@gmail`);
        await page.locator('[data-testid="input-password"]').fill('12345678');
        await page.locator('[data-testid="input-confirmPassword"]').fill('12345678');
        await page.locator('[data-testid="button-register"]').click();

        await expect(page.locator('.text-xs.text-red-500.text-left')).toHaveText('Please enter a valid email address')

    })
    test('Register with empty email field',async ({page})=>{
        await page.locator('[data-testid="input-email"]').fill('');
        await page.locator('[data-testid="input-password"]').fill('12345678');
        await page.locator('[data-testid="input-confirmPassword"]').fill('12345678');
        await page.locator('[data-testid="button-register"]').click();

        const validationMessage = await page.$eval('[data-testid="input-email"]', el => el.validationMessage);
        await expect(validationMessage).toBeTruthy();

    })
    test('Register with empty password field',async ({page})=>{
        const randomNum = Math.floor(Math.random() * 1000000); 
        await page.locator('[data-testid="input-email"]').fill(`test${randomNum}@gmail.com`);
        await page.locator('[data-testid="input-password"]').fill('');
        await page.locator('[data-testid="input-confirmPassword"]').fill('12345678');
        await page.locator('[data-testid="button-register"]').click();

        const validationMessage = await page.$eval('[data-testid="input-password"]', el => el.validationMessage);
        await expect(validationMessage).toBeTruthy();

    })
    test('Password and confirm password do not match',async ({page})=>{
        const randomNum = Math.floor(Math.random() * 1000000); 
        await page.locator('[data-testid="input-email"]').fill(`test${randomNum}@gmail.com`);
        await page.locator('[data-testid="input-password"]').fill('12345678');
        await page.locator('[data-testid="input-confirmPassword"]').fill('87654321');
        await page.locator('[data-testid="button-register"]').click();

        await expect(page.locator('.text-xs.text-red-500.text-left')).toHaveText('Passwords do not match');

    })
    test('Password length is less than 8 characters',async ({page})=>{
        const randomNum = Math.floor(Math.random() * 1000000); 
        await page.locator('[data-testid="input-email"]').fill(`test${randomNum}@gmail.com`);
        await page.locator('[data-testid="input-password"]').fill('1234567');
        await page.locator('[data-testid="input-confirmPassword"]').fill('1234567');
        await page.locator('[data-testid="button-register"]').click();

       const validationMessage = await page.$eval('[data-testid="input-password"]', el => el.validationMessage);
        await expect(validationMessage).toBeTruthy();

    })
})