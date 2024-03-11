import { create } from "zustand";

export const useCartOrder = create((set) => ({
  cartOrderShow: false,
  setCartOrderShow: (cartOrderShow) => set(() => ({ cartOrderShow })),
}));
