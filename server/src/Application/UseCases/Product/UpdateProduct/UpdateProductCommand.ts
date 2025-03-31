import * as yup from "yup";
import { UpdateProductSchema } from "./UpdateProductSchema";
export type UpdateProductCommand = yup.InferType<typeof UpdateProductSchema>;