import { useState } from "react";
import { KhaosError } from "@core/services/khaos/KhaosTypes";
import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";
import { UpdateProductPayload } from "@core/services/product/ProductPayload";

export const UpdateProductHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<KhaosError | undefined>(undefined);

  const updateProduct = useProductStore((state) => state.updateProduct);

  const handler = async (payload: UpdateProductPayload): Promise<void> => {
    setLoading(true);

    const response = await ProductService.update(payload);
    if (response.error) setError(response.error);
    if (response.data) updateProduct(response.data.product);

    setLoading(false);
  };

  return { loading, error, handler };
};