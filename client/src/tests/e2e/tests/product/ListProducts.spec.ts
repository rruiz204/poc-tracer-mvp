import { expect, test } from "@playwright/test";
import { ListProductPage } from "@e2e/pages/product/ListProductPage";

test.describe("List Products", () => {
  test.beforeEach(async ({ page }) => {
    const listProductPage = new ListProductPage(page);
    await listProductPage.mocking();
    await listProductPage.navigate();
  });

  test("should display the correct page title", async ({ page }) => {
    const listProductPage = new ListProductPage(page);
    const title = await listProductPage.getProductTitle();
    expect(title).toBe("Product Page");
  });

  test("should display the correct number of product cards", async ({ page }) => {
    const listProductPage = new ListProductPage(page);
    const cards = await listProductPage.getProductCards();
    await expect(cards).toHaveCount(2);
  });
});