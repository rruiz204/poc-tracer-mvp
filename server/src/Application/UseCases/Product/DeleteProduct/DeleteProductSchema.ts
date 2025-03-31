import * as yup from "yup";

export const DeleteProductSchema = yup.object({
  id: yup.number().required(),
});