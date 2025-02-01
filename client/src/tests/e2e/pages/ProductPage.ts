import { Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {};

  public async navigate() {
    await this.page.goto("/product");
  };

  public getProductCards() {
    return this.page.getByTestId("card");
  };

  public getErrorMessage() {
    return this.page.getByTestId("list-error-message");
  };

  public getEmptyMessage() {
    return this.page.getByTestId("list-empty-message");
  };

  public getRefreshButton() {
    return this.page.getByTestId("button").filter({ hasText: "Refresh" });
  };

  public getNewProductButton() {
    return this.page.getByTestId("button").filter({ hasText: "New Product" });
  };
};