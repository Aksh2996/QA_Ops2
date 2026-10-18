const {test,expect,request}=require('@playwright/test')
const{APIutils}=require('../Utils/APIutils')
const payload={userEmail:"aprakash270@gmail.com",userPassword:"Vihaan@1234"}
const payload2={orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let response

test.beforeAll(async()=>
{
const apicontext=await request.newContext()
const apiUtils=new APIutils(apicontext,payload)
response=await apiUtils.get_orderID(payload2)
})

test('Playwright assignment3',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.addInitScript(value=>{
    window.localStorage.setItem('token',value)
},response.token)
const products=page.locator(".card-body")
const prod="ZARA COAT 3"
await page.goto("https://rahulshettyacademy.com/client")
await page.waitForLoadState('networkidle')
await products.first().waitFor()
const prodcount=await products.count()
await page.locator("li [routerlink='/dashboard/myorders']").click()
await page.locator("tbody").waitFor()
const orderlist=await page.locator("tbody tr")
for(let i=0;i<await orderlist.count();i++)
{
const rowid=await orderlist.nth(i).locator("th").textContent()
    if(response.orderid.includes(rowid))
    {
        await orderlist.nth(i).locator("button ").first().click()
        break
    }
}
const oid=await page.locator(".col-text").textContent()
expect(response.orderid.includes(oid)).toBeTruthy()
});
