import { expect, test } from "@playwright/test";
import { ProductMock } from "@e2e/mocks/ProductMock";
import { ProductPage } from "@e2e/pages/ProductPage";
import { ProductFixture } from "@e2e/fixtures/ProductFixture";

test.describe("Product Page", () => {
  test("displays all products when API call succeeds", async ({ page }) => {
    const productPage = new ProductPage(page);
    const fixture = ProductFixture.listPositiveFixture();

    const mocker = new ProductMock(page);
    mocker.mockListProducts(200, fixture);

    await productPage.navigate();

    const cards = productPage.getProductCards();
    await expect(cards).toHaveCount(3);
  });
});