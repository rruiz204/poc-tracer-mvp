import { Page } from "@playwright/test";

export class ProductPage {
  private cardTestId = "product-card";

  constructor(private page: Page) {};

  public async navigate() {
    await this.page.goto("/product");
  };

  public async getProductCards() {
    return await this.page.getByTestId(this.cardTestId).all();
  };
};