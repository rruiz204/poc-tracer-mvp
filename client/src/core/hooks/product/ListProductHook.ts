import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";

export const ListProductHook = () => {
  const { setProducts, setIsLoading, setError } = useProductStore();

  const handler = async (): Promise<void> => {
    setIsLoading(true);

    const response = await ProductService.list();
    if (response.error) setError(response.error);
    if (response.data) setProducts(response.data.products);

    setIsLoading(false);
  };

  return { handler };
};