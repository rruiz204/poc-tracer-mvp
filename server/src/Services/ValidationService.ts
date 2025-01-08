import vine from "@vinejs/vine";
import { type SchemaTypes } from "@vinejs/vine/types";

export class ValidationService {
  static async validate(schema: SchemaTypes, data: any) {
    const validator = vine.compile(schema);
    return await validator.validate(data);
  };
};