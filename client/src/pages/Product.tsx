import { Page } from "@shared/components/shared/Page";
import { useProductStore } from "@core/stores/useProductStore";
import { useProductEffects } from "@core/effects/useProductEffects";

export const Product = () => {
  useProductEffects();
  
  const products = useProductStore((state) => state.products);

  return (
    <Page>
      <div className="text-white">
        <h1 data-testid="product-title" className="text-3xl font-semibold">Product Page</h1>
        <hr />
        { products.length > 0 && <p data-testid="product-counter">There are {products.length} products</p> }
      </div>
    </Page>
  );
};