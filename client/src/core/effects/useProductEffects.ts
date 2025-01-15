import { useEffect } from "react";
import { ProductService } from "@core/services/ProductService";
import { useProductStore } from "@core/stores/useProductStore";

export const useProductEffects = () => {
  const { setProducts, setIsLoading, setError } = useProductStore();

  const SetupFetching = async () => {
    setIsLoading(true);

    const response = await ProductService.list();
    if (response.error) setError(response.error);
    if (response.data) setProducts(response.data.products);

    setIsLoading(false);
  };

  useEffect(() => {
    SetupFetching();
  }, []);
};