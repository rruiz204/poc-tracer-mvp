import { useState } from "react";
import { KhaosError } from "@core/services/khaos/KhaosTypes";
import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";
import { DeleteProductPayload } from "@core/services/product/ProductPayload";

export const useRemoveProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<KhaosError | undefined>(undefined);

  const removeProduct = useProductStore((state) => state.removeProduct);

  const RemoveProductHandler = async (payload: DeleteProductPayload) => {
    setIsLoading(true);

    const response = await ProductService.remove(payload);
    if (response.error) setError(response.error);
    if (response.data) removeProduct(response.data.product.id);

    setIsLoading(false);
  };

  return { RemoveProductHandler, isLoading, error };
};