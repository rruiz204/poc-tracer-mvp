import { Page } from "@playwright/test";
import { MockHelper } from "@e2e/mocks/MockHelper";
import { KhaosError } from "@core/services/khaos/KhaosTypes";
import { ListProductResponse } from "@core/services/product/ProductResponse";

type ListProductMockResponse = ListProductResponse | KhaosError;

export class ProductMock {
  private helper: MockHelper;

  constructor(page: Page) {
    this.helper = new MockHelper(page);
  };

  public async mockListProducts(status: number, fixture: ListProductMockResponse) {
    await this.helper.mock<ListProductMockResponse>({
      endpoint: "**/api/product",
      fixture: fixture,
      status: status,
      http: "GET",
    });
  };
};