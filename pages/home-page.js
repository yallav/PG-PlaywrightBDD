const { expect } = require('@playwright/test');

class HomePage {
  constructor() {}
  async launchHomePage(url) {
    await global.page.goto(url);
    expect(await global.page.title()).toEqual('Posters Galore Administration');
  }

  async login(username, password) {
    await global.page.locator("//*[@name='username']").toBeVisible;
    await global.page.locator("//*[@name='username']").clear();
    await global.page.locator("//*[@name='username']").fill(username);

    await global.page.locator("//*[@name='password']").toBeVisible;
    await global.page.locator("//*[@name='password']").clear();
    await global.page.locator("//*[@name='password']").fill(password);

    await global.page.locator("//*[@type='submit' and text()='Sign in']")
      .toBeVisible;
    await global.page.locator("//*[@type='submit' and text()='Sign in']")
      .toBeEnabled;
    await global.page
      .locator("//*[@type='submit' and text()='Sign in']")
      .click();
  }
}

module.exports = HomePage;
