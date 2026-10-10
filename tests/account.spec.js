const { test, expect } = require("./fixtures");
const { cleanPage, createCustomer } = require("./helpers");

test.describe("accounts and personalization", () => {
  test("opens the guest account menu", async ({ page }) => {
    await cleanPage(page);
    await page.getByRole("button", { name: /account menu/i }).click();
    await expect(page.locator("#um")).toContainText("Not signed in");
    await expect(page.locator("#um")).toContainText("Create an account");
  });

  test("validates an invalid login email", async ({ page }) => {
    await cleanPage(page);
    await page.getByRole("button", { name: /account menu/i }).click();
    await page.getByRole("button", { name: "Log in" }).click();
    await page.getByLabel("Email").fill("invalid");
    await page.getByLabel("Password").fill("secret1");
    await page.getByRole("button", { name: "Log in", exact: true }).click();
    await expect(page.getByRole("alert")).toHaveText("Enter a valid email address.");
  });

  test("validates a short password on signup", async ({ page }) => {
    await cleanPage(page);
    await page.getByRole("button", { name: /get your passport/i }).click();
    await page.getByLabel("Email").fill("short@example.com");
    await page.getByLabel("Password").fill("123");
    await page.locator("#as").click();
    await expect(page.getByRole("alert")).toHaveText("Password needs at least 6 characters.");
  });

  test("creates a customer account", async ({ page }) => {
    await createCustomer(page, "create");
    await page.getByRole("button", { name: /account menu/i }).click();
    await expect(page.locator("#um")).toContainText("Test Explorer");
    await expect(page.locator("#um")).toContainText("test-create@example.com");
  });

  test("persists a customer account after reload", async ({ page }) => {
    await createCustomer(page, "persist");
    await page.reload();
    await page.getByRole("button", { name: /account menu/i }).click();
    await expect(page.locator("#um")).toContainText("Test Explorer");
  });

  test("toggles and persists the dark theme", async ({ page }) => {
    await cleanPage(page);
    await page.locator("#th").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("shows the guest passport call to action", async ({ page }) => {
    await cleanPage(page, "/passport.html");
    await expect(page.getByRole("heading", { name: /your food passport/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /start your passport/i })).toBeVisible();
  });

  test("shows the guest settings call to action", async ({ page }) => {
    await cleanPage(page, "/profile.html");
    await expect(page.getByRole("heading", { name: /make yourself/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /^log in/i })).toBeVisible();
  });

  test("displays a signed-in passport", async ({ page }) => {
    await createCustomer(page, "passport");
    await page.goto("/passport.html");
    await expect(page.locator(".passport-stats")).toContainText("Newcomer");
    await expect(page.locator(".passport-page")).toContainText("Test");
  });

  test("signs out from the account menu", async ({ page }) => {
    await createCustomer(page, "logout");
    await page.getByRole("button", { name: /account menu/i }).click();
    await page.getByRole("button", { name: /sign out/i }).click();
    await page.waitForLoadState("domcontentloaded");
    await page.getByRole("button", { name: /account menu/i }).click();
    await expect(page.locator("#um")).toContainText("Not signed in");
  });
});
