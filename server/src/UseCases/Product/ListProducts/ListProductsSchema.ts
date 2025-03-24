import * as yup from "yup";

export const ListProductsSchema = yup.object({
  page: yup.number().required().positive(),
  limit: yup.number().required().positive(),
});