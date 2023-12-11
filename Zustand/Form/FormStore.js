import axios from "axios";
import { create } from "zustand";

export const useForm = create((set) => ({
  editProductForm: false,
  initialProductData: {
    name: "",
    image: "",
    price: 0,
    isReady: true,
    category: { id: 1, name: "" },
  },
  addProductForm: false,
  setEditProductForm: () =>
    set((state) => ({
      editProductForm: !state.editProductForm,
    })),
  setInitialProductData: (data) =>
    set((state) => ({
      initialProductData: (state.initialProductData = data),
    })),
  setAddProductForm: () =>
    set((state) => ({
      addProductForm: !state.addProductForm,
    })),
  updateProductData: (newData) => {
    axios.put(`${import.meta.env.VITE_BASE_URL}/products/${newData.id}`, newData)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }
}));
