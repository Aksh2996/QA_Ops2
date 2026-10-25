const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { DashboardPage } = require('../../PageObjectmodel/dashboardpage');
const { LoginPage } = require('../../PageObjectmodel/loginpage');

setDefaultTimeout(30 * 1000);

Given('I am on the client login page', async function () {
  this.loginPage = new LoginPage(this.page);
  this.dashboardPage = new DashboardPage(this.page);
  await this.loginPage.goTo();
});

When('I sign in with valid credentials', async function () {
  const { PLAYWRIGHT_TEST_EMAIL: email, PLAYWRIGHT_TEST_PASSWORD: password } =
    process.env;

  if (!email || !password) {
    throw new Error(
      'Set PLAYWRIGHT_TEST_EMAIL and PLAYWRIGHT_TEST_PASSWORD to run this scenario.'
    );
  }

  await this.loginPage.login(email, password);
});

Then('I should see the dashboard', async function () {
  await this.dashboardPage.waitUntilLoaded();
  await expect(this.page).toHaveURL(/#\/dashboard\/dash$/);
});
