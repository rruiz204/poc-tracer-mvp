import * as yup from "yup";

export const ListProductsSchema = yup.object({
  id: yup.string().required("Name is a required field"),
});