class DashboardPageModel {
  constructor(page) {
    this.homeButton = page.getByRole('button', { name: /HOME/ });
    this.products = page.locator('.card-body');
    this.cartLink = page.locator("[routerlink='/dashboard/cart']");
  }
}

module.exports = { DashboardPageModel };
