const { DashboardPageModel } = require('./dashboardpagemodel');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.model = new DashboardPageModel(page);
    this.products = this.model.products;
  }

  async waitUntilLoaded() {
    await this.model.homeButton.waitFor({ state: 'visible' });
  }

  async addproductsthenselect(productName) {
    await this.products
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to Cart' })
      .click();
  }

  async navigatetocart() {
    await this.model.cartLink.click();
  }
}

module.exports = { DashboardPage };