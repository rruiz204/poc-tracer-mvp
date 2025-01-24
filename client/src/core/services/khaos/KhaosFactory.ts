import { Khaos } from "./Khaos";
import { HttpMethod } from "./KhaosTypes";

interface BuildArgs {
  endpoint: string;
  method: HttpMethod;
};

export class KhaosFactory {

  public static build(args: BuildArgs): Khaos {
    const khaos = new Khaos();
    khaos.setHttpMethod(args.method);
    khaos.setEndpoint(args.endpoint);
    return khaos;
  };
};