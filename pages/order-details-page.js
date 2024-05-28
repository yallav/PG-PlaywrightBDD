const { expect } = require('@playwright/test');
const { getRandomIndex } = require('../utilities/helper');

class OrderDetailsPage {
  constructor() {}

  async openOrderSummary() {
    await global.page.locator("//*[contains(@class,'RaDatagrid-root')]")
      .toBeVisible;
    const table = global.page.locator(
      "//*[contains(@class,'RaDatagrid-root')]"
    );

    expect(table.locator('//tr')).not.toHaveCount(0);
    const numOfOrders = await table.locator('//tr').count();
    const randomIdx = getRandomIndex(0, numOfOrders);
    await table.locator('//tr').locator(`nth=${randomIdx}`).click();
  }

  async validateOrderSummary() {
    expect(await global.page.title()).toEqual('Posters Galore Administration');
    expect(await global.page.locator("//*[text()='Reference']")).toBeVisible;
    expect(
      await global.page.locator("//table[contains(@class,'MuiTable-root')]")
    ).toBeVisible;
  }
}

module.exports = OrderDetailsPage;
