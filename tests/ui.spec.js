const { test, expect } = require("./fixtures");

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/nomo/i);
  await expect(page.getByRole("heading", { name: /start a food journey/i })).toBeVisible();
});

test("explore page displays restaurants and supports search", async ({ page }) => {
  await page.goto("/explore.html");
  await expect(page.getByRole("heading", { name: /find your next favorite/i })).toBeVisible();
  await expect(page.locator("#rg")).not.toBeEmpty();

  await page.getByRole("searchbox", { name: /search restaurants/i }).fill("Nonna");
  await expect(page.locator("#rg")).toContainText("Nonna Fornace");
});
