import { create } from "zustand";
import { Product } from "@core/models/Product";
import { KhaosError } from "src/khaos/KhaosTypes";

type State = {
  products: Product[];
  isLoading: boolean;
  error: KhaosError | undefined;
};

type Actions = {
  setError: (error: KhaosError) => void;
  setProducts: (products: Product[]) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const useProductStore = create<State & Actions>((set) => ({
  products: [], isLoading: false, error: undefined,

  setError: (error) => set((state) => ({ ...state, error })),
  setProducts: (products) => set((state) => ({ ...state, products })),
  setIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
}));