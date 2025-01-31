import { KhaosError } from "@core/services/khaos/KhaosTypes";

export class Fixture<KhaosModel> {
  public positive(respose: KhaosModel) {
    return respose;
  };

  public negative(error: KhaosError) {
    return error;
  };
};