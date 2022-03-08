import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://peoplepass.ru/');
});



test.describe('Home page', () => {
  test('should has autorization button', async ({ page }) => {
    const autorizationButtonText = (await page.locator('a.autorizer').allInnerTexts())[0];
    expect(autorizationButtonText).toBe('Авторизация');
  });
})