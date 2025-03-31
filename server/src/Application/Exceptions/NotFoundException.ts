import { Exception } from "./Exception";
export class NotFoundException extends Exception {
  public status: number = 404;
};