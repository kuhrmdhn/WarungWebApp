import { create } from "zustand";

export const useCartOrder = create((set) => ({
  cartOrderShow: false,
  setCartOrderShow: () => set((state) => ({
    cartOrderShow: !state.cartOrderShow
  })),
}));
