const {test}=require('@playwright/test')
test('practise1',async({browser})=>
{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
}
)

//Akshay_fixes