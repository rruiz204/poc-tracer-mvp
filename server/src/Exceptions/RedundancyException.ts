import { Exception } from "./Exception";
export class RedundancyException extends Exception {
  public status: number = 500;
};