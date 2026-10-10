const { test, expect } = require("./fixtures");
const { cleanPage } = require("./helpers");

test.describe("restaurant discovery", () => {
  test("shows all restaurants by default", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await expect(page.locator("#rg .rest")).toHaveCount(50);
  });

  test("filters restaurants by cuisine", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await page.getByRole("button", { name: "Indian", exact: true }).click();
    await expect(page.locator("#rg .rest")).toHaveCount(5);
    await expect(page.locator("#rg")).toContainText("Tiffin Trails");
  });

  test("filters restaurants by city", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await page.getByRole("button", { name: /explore by city/i }).click();
    await page.getByRole("option", { name: /Raleigh/i }).click();
    await expect(page.locator("#city-label")).toHaveText("Raleigh, NC");
    await expect(page.locator("#rg .rest")).toHaveCount(10);
  });

  test("searches by restaurant name", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await page.getByRole("searchbox", { name: /search restaurants/i }).fill("Nonna");
    await expect(page.locator("#rg .rest")).toHaveCount(1);
    await expect(page.locator("#rg")).toContainText("Nonna Fornace");
  });

  test("searches by dish name", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await page.getByRole("searchbox", { name: /search restaurants/i }).fill("ramen");
    await expect(page.locator("#rg")).toContainText("Ramen Kaze");
  });

  test("shows an empty state for unmatched search", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await page.getByRole("searchbox", { name: /search restaurants/i }).fill("not-a-restaurant");
    await expect(page.locator("#rg")).toContainText("Nothing matches yet");
  });

  test("opens a restaurant menu from a result card", async ({ page }) => {
    await cleanPage(page, "/explore.html");
    await page.getByRole("button", { name: /Nonna Fornace/i }).click();
    await expect(page).toHaveURL(/menu\.html\?id=0/);
    await expect(page.getByRole("heading", { name: "Nonna Fornace" })).toBeVisible();
  });

  test("filters a menu to vegetarian dishes", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("checkbox", { name: /vegetarian dishes only/i }).check();
    await expect(page.locator(".mi")).toHaveCount(7);
    await expect(page.locator(".mi").filter({ hasText: "Sausage" })).toHaveCount(0);
  });

  test("supports keyboard panning on a restaurant hero", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    const hero = page.locator("#restaurant-hero");
    await hero.focus();
    await page.keyboard.press("ArrowRight");
    await expect(hero.locator("img")).toHaveCSS("--scene-pan-x", "4%");
    await page.keyboard.press("Home");
    await expect(hero.locator("img")).toHaveCSS("--scene-pan-x", "0%");
  });

  test("returns to explore from a restaurant menu", async ({ page }) => {
    await cleanPage(page, "/menu.html?id=0");
    await page.getByRole("link", { name: /all restaurants/i }).click();
    await expect(page).toHaveURL(/explore\.html/);
    await expect(page.getByRole("heading", { name: /find your next favorite/i })).toBeVisible();
  });
});
