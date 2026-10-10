const { expect } = require("@playwright/test");

async function cleanPage(page, path = "/") {
  await page.goto(path);
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
}

async function createCustomer(page, suffix = Date.now()) {
  const email = `test-${suffix}@example.com`;
  await cleanPage(page, "/");
  await page.getByRole("button", { name: /get your passport/i }).click();
  await page.getByLabel("First name").fill("Test");
  await page.getByLabel("Last name").fill("Explorer");
  await page.getByLabel("Age").fill("28");
  await page.getByLabel("Country of residence").fill("United States");
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password").fill("secret1");
  await page.locator("#as").click();
  await expect(page.locator("#ae")).toBeEmpty();
  await expectLocation(page, "/");
  return email;
}

async function expectLocation(page, suffix) {
  await page.waitForLoadState("domcontentloaded");
  if (!page.url().endsWith(suffix)) {
    throw new Error(`Expected URL to end with ${suffix}, received ${page.url()}`);
  }
}

module.exports = { cleanPage, createCustomer, expectLocation };
