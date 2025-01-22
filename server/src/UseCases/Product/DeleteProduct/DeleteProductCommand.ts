import type { Infer } from "@vinejs/vine/types";
import { DeleteProductSchema } from "./DeleteProductSchema";

export type DeleteProductCommand = Infer<typeof DeleteProductSchema>;