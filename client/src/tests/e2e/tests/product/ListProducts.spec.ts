import { expect, test } from "@playwright/test";
import { ListProductPage } from "@e2e/pages/product/ListProductPage";

test.describe("list products", () => {
  test.beforeEach(async ({ page }) => {
    const listProductPage = new ListProductPage(page);
    await listProductPage.mocking();
    await listProductPage.navigate();
  });

  test("", async ({ page }) => {
    const listProductPage = new ListProductPage(page);
    const title = await listProductPage.getProductTitle();
    expect(title).toBe("Product Page");
  });

});