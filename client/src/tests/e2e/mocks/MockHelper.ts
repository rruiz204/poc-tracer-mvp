import { Page } from "@playwright/test";
import { HttpMethod } from "@core/services/khaos/KhaosTypes";

export interface MockArgs<Fixture> {
  status: number;
  endpoint: string;
  http: HttpMethod;
  fixture: Fixture;
};

export class MockHelper {
  constructor(private page: Page) {};

  public async mock<F>({ endpoint, http, status, fixture }: MockArgs<F>) {
    await this.page.route(endpoint, async (route) => {
      if (route.request().method() !== http) return;

      await route.fulfill({
        status: status,
        contentType: "application/json",
        body: JSON.stringify(fixture),
      });
    });
  };
};