import { Page } from "@playwright/test";

export class ProductPage {
  private title: string = "product-title";
  private products: string = "product-counter";

  constructor(private page: Page) {};

  async navigate() {
    await this.page.goto('/product');
  };

  async getTitleText() {
    return this.page.getByTestId(this.title).textContent();
  };

  async getProductCounter() {
    return this.page.getByTestId(this.products).textContent();
  };
};