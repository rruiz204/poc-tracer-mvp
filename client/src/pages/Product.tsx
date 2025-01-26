import { useEffect } from "react";
import { PageLayout } from "@components/layouts/PageLayout";
import { ProductList } from "@modules/products/ProductsList";
import { ProductOptions } from "@modules/products/ProductOptions";
import { useListProduct } from "@core/hooks/product/useListProducts";

export const Product = (): JSX.Element => {
  const { ListProductHandler } = useListProduct();

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