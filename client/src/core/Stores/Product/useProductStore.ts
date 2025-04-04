import { create } from "zustand";
import { ProductStoreTypes } from "./ProductStoreTypes";

export const useProductStore = create<ProductStoreTypes>((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),

  updateProduct: (product) => set((state) => ({ products: state.products.map((p) => p.id === product.id ? product : p) })),
  
  removeProduct: (productId) => set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
}));