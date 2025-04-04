import { Product } from "@models/Product";

type State = {
  products: Product[];
};

type Actions = {
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  setProducts: (products: Product[]) => void;
};

export type ProductStoreTypes = State & Actions;