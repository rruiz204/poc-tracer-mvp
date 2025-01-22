import type { Infer } from "@vinejs/vine/types";
import { UpdateProductSchema } from "./UpdateProductSchema";

export type UpdateProductCommand = Infer<typeof UpdateProductSchema>;