import { useState } from "react";
import { KhaosError } from "@core/services/khaos/KhaosTypes";
import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";
import { UpdateProductPayload } from "@core/services/product/ProductPayload";

export const useUpdateProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<KhaosError | undefined>(undefined);

  const updateProduct = useProductStore((state) => state.updateProduct);

  const UpdateProductHandler = async (payload: UpdateProductPayload) => {
    setIsLoading(true);

    const response = await ProductService.update(payload);
    if (response.error) setError(response.error);

    if (response.data) {
      setError(undefined);
      updateProduct(response.data.product);
    };

    setIsLoading(false);
  };

  return { UpdateProductHandler, isLoading, error };
};