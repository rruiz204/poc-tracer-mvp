import { useState } from "react";
import { ProductForm } from "./ProductForm";
import { Modal } from "@components/common/atoms/Modal";
import { Button } from "@components/common/atoms/Button";
import { ProductSchemaType } from "@core/schemas/ProductSchema";
import { useListProduct } from "@core/hooks/product/useListProducts";
import { useCreateProduct } from "@core/hooks/product/useCreateProduct";

import AddIcon from "@assets/icons/add-icon.svg";
import RefreshIcon from "@assets/icons/refresh-icon.svg";

export const ProductOptions = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  const { ListProductHandler } = useListProduct();
  const { CreateProductHandler } = useCreateProduct();

  const SubmitHandler = async (data: ProductSchemaType) => {
    await CreateProductHandler(data);
    toggleIsOpen();
  };

  return (
    <div className="flex gap-3">
      <Button role="button" text="New Product" theme="primary" icon={AddIcon}
        handler={toggleIsOpen} />

      <Button role="button" text="Refresh" theme="primary" icon={RefreshIcon}
        handler={ListProductHandler} />

      <Modal isOpen={isOpen} onClose={toggleIsOpen} title="New product">
        <ProductForm onSubmit={SubmitHandler} />
      </Modal>
    </div>
  );
};