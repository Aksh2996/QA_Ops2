const {test}=require('@playwright/test')

test('first playwright test2', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await page.locator("#userEmail").fill("aprakash270@gmail.com");
  await page.locator("input[type='password']").fill("Vihaan@1234");
  await page.locator("#loin").click();

  await page.waitForLoadState('networkidle');

  console.log(
    await page.locator(".card-body b").allTextContents()
  );
});