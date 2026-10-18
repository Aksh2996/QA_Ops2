const {test,expect}=require('@playwright/test')
test('calender assignment',async({page})=>
{
const month="6"
const date="15"
const year="2023"
const expectedinput=[month,date,year]
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
await page.locator(".react-date-picker__inputGroup").click()
await page.locator(".react-calendar__navigation__label").click()
await page.locator(".react-calendar__navigation__label__labelText").click()
await page.getByRole("button",{name:'2023'}).click()
await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click()
await page.locator("//abbr[text()='"+date+"']").click()

const inputs=page.locator(".react-date-picker__inputGroup__input")
for (let i=0;i<expectedinput.length;i++)
{
    const value=await inputs.nth(i).inputValue()
    expect(value).toEqual(expectedinput[i])
}
})