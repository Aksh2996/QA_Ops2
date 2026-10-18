const {test,expect,request}=require('@playwright/test');
const{APIutils2}=require('../Utils/APIutils2')
const loginpayload={userEmail: "aprakash270@gmail.com", userPassword:"Vihaan@1234"}
const orderpayload={orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let response
test.beforeAll(async()=>
{
const apicontext=await request.newContext()

const api=new APIutils2(apicontext,loginpayload)
response=await api.get_order(orderpayload)

})




test('Playwright assignment3',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.addInitScript(value=>{window.localStorage.setItem('token',value)},response.token)
await page.goto("https://rahulshettyacademy.com/client")
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
expect(response.orderid).toContain(oid)
});
