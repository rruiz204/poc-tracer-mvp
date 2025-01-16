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

        <div className="border-2 border-white">
          <div className="w-full p-5 flex gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};