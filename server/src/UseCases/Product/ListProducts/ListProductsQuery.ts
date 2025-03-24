import * as yup from "yup";
import { ListProductsSchema } from "./ListProductsSchema";
export type ListProductsQuery = yup.InferType<typeof ListProductsSchema>;