import type { Infer } from "@vinejs/vine/types";
import { CreateProductSchema } from "./CreateProductSchema";

export type CreateProductCommand = Infer<typeof CreateProductSchema>;