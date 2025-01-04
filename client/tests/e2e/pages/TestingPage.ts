import { Page } from "@playwright/test";

export class TestingPage {
  constructor(private page: Page) {};

  async navigate() {
    await this.page.goto('/testing');
  };
};