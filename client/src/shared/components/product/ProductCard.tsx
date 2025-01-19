import { Button } from "../shared/Button";
import { Product } from "@core/models/Product";

import EditIcon from "@assets/svgs/edit-icon.svg";
import RemoveIcon from "@assets/svgs/remove-icon.svg";

interface Props {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const indicatorBackground = product.active ? "bg-green-400" : "bg-red-400";

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

      <div className="flex gap-2 mb-2">
        <Button text="Edit" icon={EditIcon}></Button>
        <Button text="Remove" icon={RemoveIcon}></Button>
      </div>
    </div>
  );
};