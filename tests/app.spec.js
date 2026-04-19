const { test, expect } = require("@playwright/test");

test("shows the search input on the homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByLabel("Search...")).toBeVisible();
});
