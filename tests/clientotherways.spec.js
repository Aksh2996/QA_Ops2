const {test,expect}=require('@playwright/test');
test('Playwright assignment2',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.getByPlaceholder("email@example.com").fill("aprakash270@gmail.com")
await page.getByPlaceholder("enter your passsword").fill("Vihaan@1234")
await page.getByRole("button",{name:"Login"}).click()
await page.locator(".cardvghui0-pol--body").filter({hasText:'ZARA COAT 3'}).getByRole("button",{name:'Add To Cart'}).click()
await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click()
await page.getByRole("button",{name:'Checkout'}).click()
await page.getByPlaceholder("Select Country").type("Ind")
await page.getByRole("button",{name:'India'}).nth(1).click()
await page.getByText("PLACE ORDER").click()
await expect(page.getByText("Thankyou for the order.")).toBeVisible()
const a=await page.locator(".em-spacer-1 label").nth(1).textContent()
const orderId = a.replace(/\|/g, "").trim();
console.log(orderId);
await page.getByText("Orders History Page").click()
await expect(page.locator("tbody th").filter({hasText:orderId})).toBeVisible()
});
