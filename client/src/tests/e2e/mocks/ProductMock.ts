import { Page } from "@playwright/test";
import { MockHelper, MockArgs } from "@e2e/helpers/MockHelper";
import { KhaosResponse } from "@core/services/khaos/KhaosTypes";
import { ListProductResponse } from "@core/services/product/ProductResponse";

type ListFixture = KhaosResponse<ListProductResponse>;
type ListMockArgs = Pick<MockArgs<ListFixture>, "status" | "fixture">;

export class ProductMock {
  private helper: MockHelper;

  constructor(page: Page) {
    this.helper = new MockHelper(page);
  };

  public async mockListProducts({ status, fixture }: ListMockArgs): Promise<void> {
    await this.helper.mock<ListFixture>({
      endpoint: "**/api/product",
      status: status,
      fixture: fixture,
      httpMethod: "GET",
    });
  };
};