import vine from "@vinejs/vine";

export const CreateProductSchema = vine.object({
  name: vine.string(),
  description: vine.string(),
  price: vine.number().decimal([0, 2]),
  stock: vine.number(),
});