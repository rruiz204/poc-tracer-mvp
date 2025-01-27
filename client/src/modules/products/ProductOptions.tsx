import { useState } from "react";
import { ProductForm } from "./ProductForm";
import { Modal } from "@components/common/Modal";
import { Button } from "@components/common/Button";
import { useProductStore } from "@core/stores/useProductStore";
import { ProductSchemaType } from "@core/schemas/ProductSchema";
import { useListProduct } from "@core/hooks/product/useListProducts";

import AddIcon from "@assets/icons/add-icon.svg";
import RefreshIcon from "@assets/icons/refresh-icon.svg";

export const ProductOptions = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  const { ListProductHandler } = useListProduct();
  const addProduct = useProductStore((state) => state.addProduct);

  const SubmitHandler = async (data: ProductSchemaType) => {
    const created = { ...data, id: Math.floor(Math.random() * 1000), createdAt: new Date() };
    addProduct(created);
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