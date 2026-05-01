const { test, expect } = require('@playwright/test');

test.describe('Login Page Tests', () => {
    
    test('should display login form', async ({ page }) => {
        await page.goto('https://app.vwo.com/login');
        const loginForm = await page.locator('form#login');
        await expect(loginForm).toBeVisible();
    });

    test('should login with valid credentials', async ({ page }) => {
        await page.goto('https://app.vwo.com/login');
        await page.fill('input[name="username"]', 'validUser');
        await page.fill('input[name="password"]', 'validPassword');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL('https://app.vwo.com/dashboard');
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        await page.goto('https://app.vwo.com/login');
        await page.fill('input[name="username"]', 'invalidUser');
        await page.fill('input[name="password"]', 'invalidPassword');
        await page.click('button[type="submit"]');
        const errorMessage = await page.locator('.error-message');
        await expect(errorMessage).toBeVisible();
    });

    test('should take a screenshot of the login page', async ({ page }) => {
        await page.goto('https://app.vwo.com/login');
        await page.screenshot({ path: 'login-page-screenshot.png' });
    });

});