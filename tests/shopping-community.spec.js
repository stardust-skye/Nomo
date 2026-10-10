const { test, expect } = require("./fixtures");
const { cleanPage, createCustomer } = require("./helpers");

test.describe("shopping and community", () => {
  test("starts with an empty cart", async ({ page }) => {
    await cleanPage(page, "/cart.html");
    await expect(page.locator(".cart-empty")).toContainText("NOTHING ON THE TABLE YET");
  });

  test("adds a dish to the cart", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await expect(page.locator("#cn")).toHaveText("1");
    await page.goto("/cart.html");
    await expect(page.locator(".cart-items")).toContainText("Margherita Pizza");
  });

  test("increments and decrements a cart item", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.getByRole("button", { name: /add one margherita pizza/i }).click();
    await page.goto("/cart.html");
    await expect(page.locator(".cart-section-heading")).toContainText("2 items");
    await page.getByRole("button", { name: /remove one margherita pizza/i }).click();
    await expect(page.locator(".cart-section-heading")).toContainText("1 items");
  });

  test("removes the last item and returns to the empty cart", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.goto("/cart.html");
    await page.getByRole("button", { name: /remove one margherita pizza/i }).click();
    await expect(page.locator(".cart-empty")).toBeVisible();
  });

  test("changes the tip and recalculates the total", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.goto("/cart.html");
    const before = await page.locator(".sum .sl.t span").last().textContent();
    await page.getByRole("button", { name: "No tip" }).click();
    const after = await page.locator(".sum .sl.t span").last().textContent();
    expect(after).not.toBe(before);
  });

  test("requires login before checkout", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.goto("/cart.html");
    await page.getByRole("button", { name: /place order/i }).click();
    await expect(page.locator("#ad")).toBeVisible();
    await expect(page.locator("#af")).toContainText("Email");
  });

  test("places an order and clears the cart", async ({ page }) => {
    await createCustomer(page, "order");
    await page.goto("/menu.html?id=0");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.getByRole("link", { name: /view cart/i }).click();
    await page.getByRole("button", { name: /place order/i }).click();
    await expect(page.getByRole("heading", { name: "Order placed" })).toBeVisible();
    await expect(page.locator(".cart-success")).toContainText("Margherita Pizza");
  });

  test("shows the community guest state", async ({ page }) => {
    await cleanPage(page, "/community.html");
    await expect(page.getByRole("heading", { name: /good finds are better shared/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /log in to join/i })).toBeVisible();
  });

  test("requires login to like a community post", async ({ page }) => {
    await cleanPage(page, "/community.html");
    await page.getByRole("button", { name: /like masala dosa recommendation/i }).click();
    await expect(page.locator("#ad")).toBeVisible();
    await expect(page.locator("#af")).toContainText("Email");
  });

  test("allows a customer to publish a recommendation", async ({ page }) => {
    await createCustomer(page, "community");
    await page.goto("/community.html");
    await page.locator("#pd").fill("Margherita Pizza");
    await page.locator("#pt").fill("A bright, comforting classic.");
    await page.getByRole("button", { name: /share your note/i }).click();
    await expect(page.locator("#pg")).toContainText("Margherita Pizza");
    await expect(page.locator("#ts")).toHaveText("Posted");
  });
});
