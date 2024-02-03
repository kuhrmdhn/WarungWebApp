import { create } from "zustand";

export const useNavigateProduct = create((set) => ({
  optionMenu: false,
  navigate: "",
  sectionLocation: "Dashboard",
  setOptionMenu: () =>
    set((state) => ({
      optionMenu: !state.optionMenu,
    })),
  setNavigate: (key) =>
    set((state) => ({
      navigate: (state.navigate = key),
    })),
  setSectionLocation: (section) =>
    set((state) => ({
      sectionLocation: (state.sectionLocation = section),
    })),
}));
