import { create } from "zustand";

export const useSearchKeyword = create((set) => ({
  searchKeyword: "",
  setSearchKeyword: (key) =>
    set((state) => ({
      searchKeyword: (state.searchKeyword = key),
    })),
}));
