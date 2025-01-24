import { useEffect } from "react";
import { PageLayout } from "@components/layouts/PageLayout";
import { ProductForm } from "@modules/products/ProductForm";
import { ProductList } from "@modules/products/ProductsList";
import { ListProductHook } from "@core/hooks/product/ListProductHook";

export const Product = (): JSX.Element => {
  const { handler: ListProductHandler } = ListProductHook();

  useEffect(() => {
    ListProductHandler();
  }, []);

  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold mb-8 text-white">
        Products
      </h1>

      <div className="grid gap-5 grid-cols-[2fr_1fr] text-white">
        <ProductList></ProductList>
        <ProductForm></ProductForm>
      </div>
    </PageLayout>
  );
};