import { useEffect } from "react";
import { ProductList } from "./ProductsList";
import { ProductOptions } from "./ProductOptions";
import { PageLayout } from "@components/layouts/PageLayout";
import { useListProduct } from "@core/hooks/product/useListProducts";

export const ProductPage = (): JSX.Element => {
  const { ListProductHandler } = useListProduct();

  useEffect(() => {
    ListProductHandler();
  }, []);

  return (
    <PageLayout>
      <h1 test-id="page-title" className="text-3xl font-semibold mb-8 text-white">
        Products
      </h1>

      <div className="flex flex-col gap-8">
        <ProductOptions />
        <ProductList />
      </div>
    </PageLayout>
  );
};