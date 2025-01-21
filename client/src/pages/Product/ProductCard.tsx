import { useState } from "react";
import { Button } from "@components/Button";
import { Product } from "@core/models/Product";
import { useProductStore } from "@core/stores/useProductStore";

import EditIcon from "@assets/svgs/edit-icon.svg";
import CancelIcon from "@assets/svgs/cancel-icon.svg";
import RemoveIcon from "@assets/svgs/remove-icon.svg";
import ConfirmIcon from "@assets/svgs/confirm-icon.svg"

interface Props {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const ConfirmFlagger = () => setConfirm(!confirm);

  const { removeProduct } = useProductStore();

  const indicatorBackground = product.active ? "bg-green-400" : "bg-red-400";

  const RemoveHandler = () => {
    removeProduct(product.id);
  };

  const EditHandler = () => {
    console.log("edit");
  };

  return (
    <div className="border-2 border-cs-blue-700 w-[300px] py-2 px-4 rounded-md">
      <div className="flex justify-between items-center">
        <p className="mb-2 font-semibold text-xl">{product.name}</p>
        <div className={`py-2 px-2 rounded-full cursor-pointer ${indicatorBackground}`}></div>
      </div>

      <p className="mb-2 line-clamp-3">{product.description}</p>

      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">${product.price}</p>
        <p className="font-semibold">Stock: {product.stock}</p>
      </div>

      {!confirm
        ?
        <div className="flex gap-2 mb-2">
          <Button text="Edit" icon={EditIcon} onClick={EditHandler} role="button" />
          <Button text="Remove" icon={RemoveIcon} onClick={ConfirmFlagger} role="button" />
        </div>
        :
        <div className="flex gap-2 mb-2">
          <Button text="Cancel" icon={CancelIcon} onClick={ConfirmFlagger} role="button" />
          <Button text="Confirm" icon={ConfirmIcon} onClick={RemoveHandler} role="button" />
        </div>
      }
    </div>
  );
};