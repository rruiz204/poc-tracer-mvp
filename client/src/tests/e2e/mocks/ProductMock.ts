import { Page } from "@playwright/test";
import { MockHelper } from "@e2e/helpers/MockHelper";
import { KhaosResponse } from "@core/services/khaos/KhaosTypes";
import { ListProductResponse } from "@core/services/product/ProductResponse";

type ListFixture = KhaosResponse<ListProductResponse>;

export class ProductMock {
  private helper: MockHelper;

  constructor(page: Page) {
    this.helper = new MockHelper(page);
  };

  // fix args format
  public async mockListProducts(status: number, fixture: ListFixture): Promise<void> {
    await this.helper.mock<ListFixture>({
      endpoint: "**/api/product",
      status: status,
      fixture: fixture,
      httpMethod: "GET",
    });
  };
};