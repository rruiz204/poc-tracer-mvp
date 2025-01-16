import { Page } from "@playwright/test";
import { ListProductFixture } from "@e2e/fixtures/product/ListProductsFixture";

export class ListProductPage {
  private titleId: string = "product-title";
  private cardId: string = "product-card";

  constructor(private page: Page) {};

  public async navigate() {
    await this.page.goto("/product");
  };

  public async mocking() {
    await this.page.route("**/api/product/list", (route) => {
      route.fulfill(ListProductFixture);
    });
  };

  public async getProductTitle() {
    return this.page.getByTestId(this.titleId).textContent();
  };

  public async getProductCards() {
    return this.page.getByTestId(this.cardId);
  };
};