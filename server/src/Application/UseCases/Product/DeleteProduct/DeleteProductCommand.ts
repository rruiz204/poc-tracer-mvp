import * as yup from "yup";
import { DeleteProductSchema } from "./DeleteProductSchema";
export type DeleteProductCommand = yup.InferType<typeof DeleteProductSchema>;