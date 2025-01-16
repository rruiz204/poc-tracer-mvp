import { Product } from "@core/models/Product";

interface Props {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="border-2 border-white" data-testid="product-card">
      <div className="w-72 py-4 px-3">
        <div className="mb-1 flex justify-between items-center">
          <p className="text-2xl font-semibold">{product.name}</p>

          <div className="py-1 px-2 rounded-lg bg-white text-cs-blue-900">
            <p className="font-semibold">{product.stock}</p>
          </div>
        </div>

        <p className="mb-6">{product.description}</p>

        <div className="bg-white text-cs-blue-900 py-1 rounded-md">
          <p className="text-center font-semibold text-lg">${product.price}</p>
        </div>
      </div>
    </div>
  );
};