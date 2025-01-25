import { ProductCard } from "./ProductCard";
import { useProductStore } from "@core/stores/useProductStore";
import LoadingIcon from "@assets/icons/loading-icon.svg";

export const ProductList = (): JSX.Element => {
  const { products, isLoading, error } = useProductStore();

  return (
    <div className="flex justify-center items-center">
      {isLoading && <img src={LoadingIcon} width={60} height={60} className="pt-32" />}

      {!isLoading && !error &&
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      }
    </div>
  );
};