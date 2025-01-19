import { ProductCard } from "./ProductCard";
import { useProductStore } from "@core/stores/useProductStore";

export const ProductList = (): JSX.Element => {
  const products = useProductStore((state) => state.products);

  return (
    <div className="grid gap-4 h-full grid-cols-3 place-items-center">
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </div>
  );
};