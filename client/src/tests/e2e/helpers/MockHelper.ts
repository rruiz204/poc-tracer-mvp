import { Page } from "@playwright/test";
import { HttpMethod } from "@core/services/khaos/KhaosTypes";

export interface MockArgs<Fixture> {
  status: number;
  endpoint: string;
  fixture: Fixture;
  httpMethod: HttpMethod;
};

export class MockHelper {
  constructor(private page: Page) { };

  public async mock<F>({ status, endpoint, fixture, httpMethod }: MockArgs<F>): Promise<void> {
    await this.page.route(endpoint, async (route) => {
      if (route.request().method() !== httpMethod) return;

      route.fulfill({
        status: status,
        contentType: "application/json",
        body: JSON.stringify(fixture),
      });
    });
  };
};