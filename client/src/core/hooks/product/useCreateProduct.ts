import { useState } from "react";
import { KhaosError } from "@core/services/khaos/KhaosTypes";
import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";
import { CreateProductPayload } from "@core/services/product/ProductPayload";

export const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<KhaosError | undefined>(undefined);

  const addProduct = useProductStore((state) => state.addProduct);

  const CreateProductHandler = async (payload: CreateProductPayload) => {
    setIsLoading(true);

    const response = await ProductService.create(payload);
    if (response.error) setError(response.error);
    if (response.data) addProduct(response.data.product);
    
    setIsLoading(false);
  };

  return { CreateProductHandler, isLoading, error };
};