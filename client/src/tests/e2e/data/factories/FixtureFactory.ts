import { Fixture } from "../fixtures/Fixture";

export class FixtureFactory {
  public static build<KhaosModel>() {
    return new Fixture<KhaosModel>();
  };
};