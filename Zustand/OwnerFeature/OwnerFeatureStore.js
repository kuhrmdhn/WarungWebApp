import { create } from "zustand";

export const useOwnerFeature = create((set) => ({
  addNewProductForm: false,
  checkedList: [],
  onChecked: false,
  editProfile: false,
  showProfile: false,
  setAddNewProductFormShow: () => {
    set(() => ({
      addNewProductForm: true,
      productReport: false,
    }));
  },
  addCheckedList: (data) => {
    set((state) => ({
      checkedList: [data, ...state.checkedList],
    }));
  },
  setCheckedList: (data) => {
    set((state) => ({
      checkedList: (state.checkedList = data),
    }));
  },
  setOnChecked: () => {
    set((state) => ({
      onChecked: !state.onChecked,
    }));
  },
  setEditProfile: () => {
    set((state) => ({
      editProfile: !state.editProfile
    }))
  },
  setShowProfile: () => {
    set((state) => ({
      showProfile: !state.showProfile
    }))
  }
}));
