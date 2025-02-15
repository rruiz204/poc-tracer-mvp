import { Page } from "@playwright/test";

export class ProductCard {
  private testId: string = "product-card";

  constructor(private page: Page) {};

  public getComponent() {
    return this.page.getByTestId(this.testId);
  };
}