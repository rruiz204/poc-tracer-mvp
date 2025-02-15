import { Page } from "@playwright/test";

export class Button {
  private testId: string = "button";

  constructor(private page: Page) {};

  public getComponent(text: string) {
    return this.page.getByTestId(this.testId).filter({ hasText: text });
  };
}