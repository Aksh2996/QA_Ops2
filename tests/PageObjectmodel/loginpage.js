const { LoginPageModel } = require('./loginpagemodel');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.model = new LoginPageModel(page);
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

  async login(username, password) {
    await this.model.emailInput.fill(username);
    await this.model.passwordInput.fill(password);
    await this.model.loginButton.click();
    await this.page.waitForURL(/#\/dashboard\/dash$/);
  }
}

module.exports = { LoginPage };