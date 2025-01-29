import { Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {};

  public async navigate() {
    await this.page.goto("/product");
  };
};