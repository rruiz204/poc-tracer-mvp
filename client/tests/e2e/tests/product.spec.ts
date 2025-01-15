import { expect, test } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { ListResponseFixture } from "../fixtures/ProductFixture";

test.describe("should render the title and default elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/api/product/list", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(ListResponseFixture),
      });
    });

    const productPage = new ProductPage(page);
    await productPage.navigate();
  });

  test("should render the title and default elements", async ({ page }) => {
    const productPage = new ProductPage(page);
    const titleText = await productPage.getTitleText();
    expect(titleText).toBe("Product Page");
  });

  test("should display products when fetched successfully", async ({ page }) => {
    const productPage = new ProductPage(page);
    const productCounter = await productPage.getProductCounter();
    expect(productCounter).toBe("There are 2 products");
  });
});