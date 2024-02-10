import { create } from "zustand";

export const useSearchKeyword = create((set) => ({
  searchKeyword: "",
  searchOrderGroupItem: "",
  setSearchKeyword: (key) =>
    set((state) => ({
      searchKeyword: (state.searchKeyword = key),
    })),
  setSearchOrderGroupItem: (key) =>
    set((state) => ({
      searchOrderGroupItem: (state.searchOrderGroupItem = key),
    }))
}));
