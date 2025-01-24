import { useState } from "react";
import { KhaosError } from "@core/services/khaos/KhaosTypes";

import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";

export const ListProductHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<KhaosError | undefined>(undefined);

  const setProducts = useProductStore((state) => state.setProducts);

  const handler = async (): Promise<void> => {
    setLoading(true);

    const response = await ProductService.list();
    if (response.error) setError(response.error);
    if (response.data) setProducts(response.data.products);

    setLoading(false);
  };

  return { loading, error, handler };
};