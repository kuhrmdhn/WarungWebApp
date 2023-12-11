import { create } from "zustand";

export const useNavigate = create((set) => ({
  navigate: "Makanan",
  setNavigate: (key) =>
    set((state) => ({
      navigate: (state.navigate = key),
    })),
}));
