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

  test("shows empty state message when there are no products", async ({ page }) => {
    const productPage = new ProductPage(page);
    const fixture = ProductFixture.listEmptyFixture();

    const mocker = new ProductMock(page);
    mocker.mockListProducts(200, fixture);

    await productPage.navigate();

    const cards = productPage.getProductCards();
    await expect(cards).toHaveCount(0);

    const message = productPage.getEmptyMessage();
    await expect(message).toBeVisible();
  });

  test("displays error message when product fetching fails", async ({ page }) => {
    const productPage = new ProductPage(page);
    const fixture = ProductFixture.listNegativeFixture();

    const mocker = new ProductMock(page);
    mocker.mockListProducts(400, fixture);

    await productPage.navigate();

    const cards = productPage.getProductCards();
    await expect(cards).toHaveCount(0);

    const message = productPage.getErrorMessage();
    await expect(message).toBeVisible();
  });

  test("reloads product list when refresh button is clicked", async ({ page }) => {
    const productPage = new ProductPage(page);
    const fixture = ProductFixture.listPositiveFixture();

    await productPage.navigate();

    const mocker = new ProductMock(page);
    mocker.mockListProducts(200, fixture);

    const refresh = productPage.getRefreshButton();
    await refresh.click();

    await expect(refresh).toBeVisible();

    const cards = productPage.getProductCards();
    await expect(cards).toHaveCount(3);
  });

  test("pending...", async ({ page }) => {
    const productPage = new ProductPage(page);
    const fixture = ProductFixture.editPositiveFixture();

    await productPage.navigate();

    const mocker = new ProductMock(page);
    mocker.mockUpdateProduct(200, fixture);
  });
});