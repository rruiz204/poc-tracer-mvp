import { FixtureFactory } from "../factories/FixtureFactory";
import { ProductFactory } from "../factories/ProductFactory";
import {
  ListProductResponse,
  UpdateProductResponse,
} from "@core/services/product/ProductResponse";

export class ProductFixture {
  public static listPositiveFixture() {
    const fixture = FixtureFactory.build<ListProductResponse>();

    const product1 = ProductFactory.build({ id: 1, active: true });
    const product2 = ProductFactory.build({ id: 2, active: false });
    const product3 = ProductFactory.build({ id: 3, active: true });

    return fixture.positive({ products: [product1, product2, product3] });
  };

  public static listEmptyFixture() {
    const fixture = FixtureFactory.build<ListProductResponse>();
    return fixture.positive({ products: [] });
  };

  public static listNegativeFixture() {
    const fixture = FixtureFactory.build<ListProductResponse>();
    const details = "Something went wrong";
    const message = "Something went wrong";
    return fixture.negative({ details, message });
  };

  public static editPositiveFixture() {
    const fixture = FixtureFactory.build<UpdateProductResponse>();
    const product = ProductFactory.build({ id: 1, active: true });
    return fixture.positive({ product });
  };

  public static editNegativeFixture() {
    const fixture = FixtureFactory.build<UpdateProductResponse>();
    const details = "Update went wrong";
    const message = "Update went wrong";
    return fixture.negative({ details, message });
  };
};