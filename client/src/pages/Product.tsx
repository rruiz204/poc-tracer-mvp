import { useProductEffects } from "@core/effects/useProductEffects";
import { ProductList } from "@shared/components/product/ProductList";
import { ProductForm } from "@shared/components/product/ProductForm";

export const Product = (): JSX.Element => {
  useProductEffects();

  return (
    <div className="bg-cs-blue-900 min-h-screen w-screen py-5 px-9">
      <h1 className="text-3xl font-semibold mb-8 text-white">
        Products
      </h1>

      <div className="grid gap-5 grid-cols-[2fr_1fr] text-white">
        <ProductList></ProductList>
        <ProductForm></ProductForm>
      </div>
    </div>
  );
};