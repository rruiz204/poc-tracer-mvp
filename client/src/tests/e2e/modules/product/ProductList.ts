import { Page } from "@playwright/test";

export class ProductList {
  private testId: string = "product-list";

  constructor(private page: Page) {};

  public getComponent() {
    return this.page.getByTestId(this.testId);
  };
}