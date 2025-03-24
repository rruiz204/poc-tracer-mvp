import * as yup from "yup";
import { CreateProductSchema } from "./CreateProductSchema";
export type CreateProductCommand = yup.InferType<typeof CreateProductSchema>;