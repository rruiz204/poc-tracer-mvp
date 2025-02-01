import { useProductStore } from "@core/stores/useProductStore";
import { ProductService } from "@core/services/product/ProductService";

export const useListProduct = () => {
  const { setProducts, setIsLoading, setError } = useProductStore();

  const ListProductHandler = async () => {
    setIsLoading(true);

    const response = await ProductService.list();

    if (response.error) {
      setProducts([]);
      setError(response.error);
    };

    if (response.data) {
      setError(undefined);
      setProducts(response.data.products);
    };

    setIsLoading(false);
  };

  return { ListProductHandler };
};