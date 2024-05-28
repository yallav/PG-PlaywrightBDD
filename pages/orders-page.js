const { expect } = require('@playwright/test');

class OrdersPage {
  constructor() {}

  async openOrdersDashboard() {
    expect(await global.page.locator('//*[text()="Orders"]')).toBeVisible;
    await global.page.locator('//*[text()="Orders"]').click();
  }
}

module.exports = OrdersPage;
