import { create } from "zustand";

<<<<<<< HEAD
export const useNavigateProduct = create((set) => ({
  optionMenu: false,
  navigate: "",
  sectionLocation: "Dashboard",
  setOptionMenu: () =>
    set((state) => ({
      optionMenu: !state.optionMenu,
    })),
=======
export const useNavigate = create((set) => ({
  navigate: "Makanan",
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  setNavigate: (key) =>
    set((state) => ({
      navigate: (state.navigate = key),
    })),
<<<<<<< HEAD
  setSectionLocation: (section) =>
    set((state) => ({
      sectionLocation: (state.sectionLocation = section),
    })),
=======
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
}));
