import { expect, test } from "@playwright/test";
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

    const cards = page.getByTestId("product-card");
    await expect(cards).toHaveCount(3);

    const secondCard = page.getByTestId("product-card-name").nth(1);
    await expect(secondCard).toHaveText(ListProductsFixture.positive.products[1].name);
  });
});