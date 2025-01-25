import { useState } from "react";
import { Product } from "@core/models/Product";
import { Button } from "@components/common/Button";
import { useProductStore } from "@core/stores/useProductStore";

import EditIcon from "@assets/svgs/edit-icon.svg";
import CancelIcon from "@assets/svgs/cancel-icon.svg";
import RemoveIcon from "@assets/svgs/remove-icon.svg";
import ConfirmIcon from "@assets/svgs/confirm-icon.svg"

interface Props {
  product: Product;
};

export const ProductCard = ({ product }: Props): JSX.Element => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const ToggleConfirm = () => setConfirm(!confirm);

  const indicator = product.active ? "bg-green-400" : "bg-red-400";
  const removeProduct = useProductStore((state) => state.removeProduct);

  const RemoveHandler = () => {
    removeProduct(product.id);
  };

  const EditHandler = () => {
    console.log("edit");
  };

  return (
    <div className="border-2 border-cs-blue-700 w-[300px] py-2 px-4 rounded-md text-white">
      <div className="flex justify-between items-center">
        <p className="mb-2 font-semibold text-xl">{product.name}</p>
        <div className={`py-2 px-2 rounded-full cursor-pointer ${indicator}`}></div>
      </div>

      <p className="mb-2 line-clamp-3">{product.description}</p>

      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">${product.price}</p>
        <p className="font-semibold">Stock: {product.stock}</p>
      </div>

      <div className="flex gap-2 mb-2">
        {!confirm && <Button text="Edit" icon={EditIcon} handler={EditHandler} 
          role="button" theme="primary" />}

        {!confirm && <Button text="Remove" icon={RemoveIcon} handler={ToggleConfirm}
          role="button" theme="primary" />}

        {confirm && <Button text="Cancel" icon={CancelIcon} handler={ToggleConfirm}
          role="button" theme="positive" />}

        {confirm && <Button text="Confirm" icon={ConfirmIcon} handler={RemoveHandler}
          role="button" theme="negative" />}
      </div>
    </div>
  );
};