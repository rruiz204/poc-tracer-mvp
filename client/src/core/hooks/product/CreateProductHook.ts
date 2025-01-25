import { useState } from "react";
import { ProductPayload } from "@core/schemas/ProductSchema";
import { KhaosError } from "@core/services/khaos/KhaosTypes";
import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";

export const CreateProductHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<KhaosError | undefined>(undefined);

  const addProduct = useProductStore((state) => state.addProduct);

  const handler = async (payload: ProductPayload): Promise<void> => {
    setLoading(true);

    const response = await ProductService.create(payload);
    if (response.error) setError(response.error);
    if (response.data) addProduct(response.data.product);

    setLoading(false);
  };

  return { loading, error, handler };
};