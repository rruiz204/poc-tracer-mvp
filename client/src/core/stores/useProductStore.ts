import { create } from "zustand";
import { Product } from "@core/models/Product";
import { KhaosError } from "@core/services/khaos/KhaosTypes";

type State = {
  products: Product[];
  isLoading: boolean;
  error?: KhaosError;
};

type Actions = {
  setError: (error: KhaosError) => void;
  setProducts: (products: Product[]) => void;
  setIsLoading: (isLoading: boolean) => void;

  updateProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};

export const useProductStore = create<State & Actions>((set) => ({
  products: [], isLoading: false, error: undefined,

  setError: (error) => set((state) => ({ ...state, error })),
  setProducts: (products) => set((state) => ({ ...state, products })),
  setIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),

  addProduct: (product) => set((state) => {
    const products = [...state.products, product];
    return { ...state, products };
  }),

  updateProduct: (product) => set((state) => {
    const index = state.products.findIndex((p) => p.id == product.id);
    const products = state.products;
    products[index] = product;
    return { ...state, products };
  }),

  removeProduct: (id) => set((state) => {
    const products = state.products.filter((p) => p.id != id);
    return { ...state, products };
  }),
}));