import { Page } from "@shared/components/shared/Page";
import { useProductStore } from "@core/stores/useProductStore";
import { useProductEffects } from "@core/effects/useProductEffects";
import { ProductCard } from "@shared/components/product/ProductCard";

export const Product = () => {
  useProductEffects();
  
  const products = useProductStore((state) => state.products);

  return (
    <Page>
      <div className="text-white">
        <h1 className="text-3xl font-semibold pb-4" data-testid="product-title">
          Product Page
        </h1>

        <div className="w-full my-4 flex flex-wrap gap-4">
          {products.map((product )=> (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Page>
  );
};