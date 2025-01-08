import vine from "@vinejs/vine";

const PRICE_REGEXP: RegExp = /^\d+\.\d{2}$/;

export const CreateProductSchema = vine.object({
  name: vine.string(),
  code: vine.string(),
  price: vine.string().regex(PRICE_REGEXP),
});