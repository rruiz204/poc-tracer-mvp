import * as yup from "yup";

export const UpdateProductSchema = yup.object({
  name: yup.string(),
  active: yup.boolean(),
  description: yup.string(),
  id: yup.number().required(),
  price: yup.number().positive(),
  stock: yup.number().positive(),
});