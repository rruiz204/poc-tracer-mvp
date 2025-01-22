import vine from "@vinejs/vine";

export const DeleteProductSchema = vine.object({
  id: vine.number(),
});