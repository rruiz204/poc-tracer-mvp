import { test } from "@playwright/test";
import { ListProductsFixture } from "@e2e/fixtures/product/ListProductsFixture";

test.describe("Product Page", () => {
  test("list all products", async ({ page }) => {
    
    await page.route("**/api/product", async (route) => {
      if (route.request().method() !== "GET") return;

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(ListProductsFixture.positive)
      });
    });

    await page.goto("/product");
  });
});