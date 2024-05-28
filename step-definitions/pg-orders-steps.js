const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const HomePage = require('../pages/home-page');
const OrdersPage = require('../pages/orders-page');
const OrderDetailsPage = require('../pages/order-details-page');

let homePage = new HomePage();
let ordersPage = new OrdersPage();
let orderDetailsPage = new OrderDetailsPage();

Given(
  'user opens Posters Galore application by sending {string}',
  async (url) => {
    await homePage.launchHomePage(url);
  }
);

When(
  'user enters {string} and {string} as user credentials and click Sign In button',
  async (username, password) => {
    await homePage.login(username, password);
  }
);

When('user clicks on Orders on left pane', async () => {
  await ordersPage.openOrdersDashboard();
});

When(
  'opens any order randomly from the list of orders on Orders dashboard page',
  async () => {
    await orderDetailsPage.openOrderSummary();
  }
);

Then('user should land on to order details page', async () => {
  await orderDetailsPage.validateOrderSummary();
});
