import { expect, test } from "@playwright/test";
import { ProductMock } from "@e2e/mocks/ProductMock";
import { Button } from "@e2e/components/common/atoms/Button";
import { ProductFixture } from "@e2e/fixtures/ProductFixture";
import { ProductCard } from "@e2e/modules/product/ProductCard";
import { ProductPage } from "@e2e/modules/product/ProductPage";
import { ProductList } from "@e2e/modules/product/ProductList";

test.describe("refresh all products", () => {
  test("displays all products when API call succeeds", async ({ page }) => {
    const refreshButton = new Button(page);

    const productPage = new ProductPage(page);
    const productCard = new ProductCard(page);
    const productList = new ProductList(page);

    const fixture = ProductFixture.listPositiveFixture();
    const mocker = new ProductMock(page);
    mocker.mockListProducts(200, fixture);

    await productPage.navigate();

    await refreshButton.getComponent("Refresh").click();

    const list = productList.getComponent();
    await expect(list).toBeVisible();

    const cards = productCard.getComponent();
    await expect(cards).toHaveCount(3);
  });
});