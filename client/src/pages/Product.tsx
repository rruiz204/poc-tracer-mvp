import { useEffect } from "react";
import { PageLayout } from "@components/layouts/PageLayout";
import { ProductList } from "@modules/products/ProductsList";
import { ProductOptions } from "@modules/products/ProductOptions";
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

      <div className="flex flex-col gap-8">
        <ProductOptions />
        <ProductList />
      </div>
    </PageLayout>
  );
};