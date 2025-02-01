import { ProductCard } from "./ProductCard";
import { useProductStore } from "@core/stores/useProductStore";
import LoadingIcon from "@assets/icons/loading-icon.svg";
import SadFaceIcon from "@assets/icons/sad-face-icon.svg";

export const ProductList = (): JSX.Element => {
  const { products, isLoading, error } = useProductStore();

  return (
    <div test-id="list" className="flex justify-center items-center">
      {isLoading && <img src={LoadingIcon} width={60} height={60} className="mt-36 animate-spin" />}

      {error &&
        <div className="mt-48 text-white" test-id="list-error-message">
          <img src={SadFaceIcon} width={200} height={200} className="mx-auto" />
          <p className="text-center font-semibold text-4xl">{error.message}</p>
        </div>
      }

      {!isLoading && !error && products.length == 0 &&
        <div className="mt-48 text-white" test-id="list-empty-message">
          <img src={SadFaceIcon} width={200} height={200} className="mx-auto" />
          <p className="text-center font-semibold text-4xl">There are no products</p>
        </div>
      }

      {!isLoading && !error && products.length > 0 &&
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      }
    </div>
  );
};