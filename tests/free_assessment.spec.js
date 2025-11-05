import {test,expect} from '@playwright/test'
test.describe('Taking leadership assessment',()=>{
     test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });
  test('Leadership assessment',async ({page})=>{
   await page.getByRole('button', { name: 'Start Free Assessment' }).nth(0).click();
   await expect(page.getByRole('heading', { name: 'Leadership Resistance Assessment' })).toBeVisible();
   for (let i = 0; i < 10; i++) {
     await page.getByText('Strongly Agree').nth(0).click();
     await page.waitForTimeout(1000);
   }
   
   await expect(page.locator('//h2[contains(text(),"Your resistance snapshot")]')).toBeVisible();
});
 test('Middle management assessment ',async ({page})=>{
   await page.getByRole('button', { name: 'Start Free Assessment' }).nth(1).click();
   await expect(page.getByRole('heading', { name: 'Middle Management Resistance Assessment' })).toBeVisible();
   for (let i = 0; i < 10; i++) {
     await page.getByText('Strongly Agree').nth(0).click();
     await page.waitForTimeout(1000);
   }
   
   await expect(page.locator('//h2[contains(text(),"Your resistance snapshot")]')).toBeVisible();
});
test('Career Growth assessment ',async ({page})=>{
   await page.getByRole('button', { name: 'Start Free Assessment' }).nth(2).click();
   await expect(page.getByRole('heading', { name: 'Career Growth Resistance Assessment' })).toBeVisible();
   for (let i = 0; i < 10; i++) {
     await page.getByText('Strongly Agree').nth(0).click();
     await page.waitForTimeout(1000);
   }
   
   await expect(page.locator('//h2[contains(text(),"Your resistance snapshot")]')).toBeVisible();
});
test('Team communication assessment ',async ({page})=>{
   await page.getByRole('button', { name: 'Start Free Assessment' }).nth(3).click();
   await expect(page.getByRole('heading', { name: 'Team Communication Resistance Assessment' })).toBeVisible();
   for (let i = 0; i < 10; i++) {
     await page.getByText('Strongly Agree').nth(0).click();
     await page.waitForTimeout(1000);
   }
   
   await expect(page.locator('//h2[contains(text(),"Your resistance snapshot")]')).toBeVisible();
});
test('Individual Performance assessment ',async ({page})=>{
   await page.getByRole('button', { name: 'Start Free Assessment' }).nth(4).click();
   await expect(page.getByRole('heading', { name: 'Individual Performance Resistance Assessment' })).toBeVisible();
   for (let i = 0; i < 10; i++) {
     await page.getByText('Strongly Agree').nth(0).click();
     await page.waitForTimeout(1000);
   }
   
   await expect(page.locator('//h2[contains(text(),"Your resistance snapshot")]')).toBeVisible();
});
test('Sales Performance assessment ',async ({page})=>{
   await page.getByRole('button', { name: 'Start Free Assessment' }).nth(5).click();
   await expect(page.getByRole('heading', { name: 'Sales Performance Resistance Mini Assessment' })).toBeVisible();
   for (let i = 0; i < 10; i++) {
     await page.getByText('Strongly Agree').nth(0).click();
     await page.waitForTimeout(1000);
   }
   
   await expect(page.locator('//h2[contains(text(),"Your resistance snapshot")]')).toBeVisible();
});

})