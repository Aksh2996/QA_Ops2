import {test,expect} from '@playwright/test'
import {customtest} from '../Utils_ts/Testdata'
import { POManager } from './PageObjectmodel_ts/POmanager'
import data from '../Utils/Testdata.json';

const testData = Array.isArray(data) ? data : [data]

for (const da of testData)
{
test(`@Web first playwright test2 for ${da.username}`,async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
const products=page.locator(".card-body")
const pomanager=new POManager(page)
const loginpage=pomanager.getLoginPage()
await loginpage.goTo()
await loginpage.login(da.username,da.password)
const dashboardpage=pomanager.getdashboardpage()
await dashboardpage.addproductsthenselect("ADIDAS ORIGINAL")
await dashboardpage.addproductsthenselect("ZARA COAT 3")
await dashboardpage.navigatetocart()
});
}

customtest(`first playwright test2`,async({browser,TestData})=>
{
const context=await browser.newContext()
const page=await context.newPage()
const products=page.locator(".card-body")
const pomanager=new POManager(page)
const loginpage=pomanager.getLoginPage()
await loginpage.goTo()
await loginpage.login(TestData.username,TestData.password)
const dashboardpage=pomanager.getdashboardpage()
await dashboardpage.addproductsthenselect("ADIDAS ORIGINAL")
await dashboardpage.addproductsthenselect("ZARA COAT 3")
await dashboardpage.navigatetocart()
});



test('Playwright assignment',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
const products=page.locator(".card-body")
const prod="ZARA COAT 3"
await page.locator("#userEmail").fill("aprakash270@gmail.com")
await page.locator("#userPassword").fill("Vihaan@1234")
await page.locator(".btn").click()
await page.waitForLoadState('networkidle')
await products.first().waitFor()
const prodcount=await products.count()
for(let i=0;i<prodcount;++i)
{
    if(await products.nth(i).locator("b").textContent()==prod)
    {
        await products.nth(i).locator("text= Add To Cart").click()
    }
}
await page.locator("[routerlink*='cart']").click()
await page.locator("div li").first().waitFor()
const bool=await page.locator("h3:has-text('Zara Coat 3')").isVisible()
expect(bool).toBeTruthy()
await page.locator("text=Checkout").click()
await page.locator("[placeholder*='Country']").pressSequentially("Ind")
const dropdownoptions=page.locator(".ta-results")
await dropdownoptions.waitFor()
const dropdowncount=await dropdownoptions.locator("button").count()
for(let i=0;i<dropdowncount;i++)
{
    const text:any=await dropdownoptions.locator("button").nth(i).textContent()
    if(text.trim()==='India')
    {
        await dropdownoptions.locator("button").nth(i).click()
        break
    }
}

await expect(page.locator(".user__name label")).toHaveText("aprakash270@gmail.com")
await page.locator(".field .txt").nth(1).fill("288")
await page.locator(".field .txt").nth(2).fill("P Akshay")
await page.locator(".field .txt").nth(3).fill("mahindra")
await page.locator(".btnn").click()
const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
console.log(orderid)
await page.locator("li [routerlink='/dashboard/myorders']").click()
const orderid2=await page.locator("[scope='row']").nth(0).textContent()
expect(orderid).toContain(orderid2)

});

test('Playwright assignment2',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
const products=page.locator(".card-body")
const prod="ZARA COAT 3"
await page.locator("#userEmail").fill("aprakash270@gmail.com")
await page.locator("#userPassword").fill("Vihaan@1234")
await page.locator(".btn").click()
await page.waitForLoadState('networkidle')
await products.first().waitFor()
const prodcount=await products.count()
for(let i=0;i<prodcount;++i)
{
    if(await products.nth(i).locator("b").textContent()==prod)
    {
        await products.nth(i).locator("text= Add To Cart").click()
    }
}
await page.locator("[routerlink*='cart']").click()
await page.locator("div li").first().waitFor()
const bool=await page.locator("h3:has-text('Zara Coat 3')").isVisible()
expect(bool).toBeTruthy()
await page.locator("text=Checkout").click()
await page.locator("[placeholder*='Country']").pressSequentially("Ind")
const dropdownoptions=page.locator(".ta-results")
await dropdownoptions.waitFor()
const dropdowncount=await dropdownoptions.locator("button").count()
for(let i=0;i<dropdowncount;i++)
{
    const text:any=await dropdownoptions.locator("button").nth(i).textContent()
    if(text.trim()==='India')
    {
        await dropdownoptions.locator("button").nth(i).click()
        break
    }
}
await expect(page.locator(".user__name label")).toHaveText("aprakash270@gmail.com")
await page.locator(".field .txt").nth(1).fill("288")
await page.locator(".field .txt").nth(2).fill("P Akshay")
await page.locator(".field .txt").nth(3).fill("mahindra")
await page.locator(".btnn").click()
const orderid:any=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
console.log(orderid)
await page.locator("li [routerlink='/dashboard/myorders']").click()
await page.locator("tbody").waitFor()
const orderlist=await page.locator("tbody tr")
for(let i=0;i<await orderlist.count();i++)
{
const rowid=await orderlist.nth(i).locator("th").textContent()
    if(orderid.includes(rowid))
    {
        await orderlist.nth(i).locator("button ").first().click()
        break
    }
}
const oid=await page.locator(".col-text").textContent()
expect(orderid.includes(oid)).toBeTruthy()
});
