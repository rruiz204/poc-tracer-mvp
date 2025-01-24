import { create } from "zustand";
import { Product } from "@core/models/Product";

type State = {
  products: Product[];
};

type Actions = {
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};

export const useProductStore = create<State & Actions>((set) => ({
  products: [],

  setProducts: (products) => set((state) => ({ ...state, products })),

  addProduct: (product) => set((state) => {
    const existing = state.products.find((p) => p.name == product.name);

    if (existing) return {...state, error: {
      message: "Product already exists",
      details: "A product with this name already exists in the store",
    }};

    return { ...state, products: [...state.products, product], error: undefined };
  }),

  removeProduct: (id) => set((state) => {
    const existing = state.products.find((p) => p.id == id);

    if (!existing) return { ...state, error: {
      message: "Product not found",
      details: "The product you are trying to remove does not exist in the store",
    }};

    const products = state.products.filter((p) => p.id != id);
    return { ...state, products, error: undefined };
  }),
}));