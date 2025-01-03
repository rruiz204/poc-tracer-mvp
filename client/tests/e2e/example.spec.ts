import { expect, test } from "@playwright/test";

test.describe("Home Page E2E", () => {
  test("should display the title", async ({ page }) => {

    await page.goto("/");

    const title = page.locator(".page-title");

    await expect(title).toHaveText("Home Page");

  });
});