import axios from "axios";
import { create } from "zustand";
import { authorizeData } from "../Api/ApiStore";

export const initialProductData = {
  id: 0,
  code: "",
  name: "",
  price: "",
  image: "",
  isReady: "",
  sold: "",
  stock: "",
  category: "",
};

export const authorizeProfile = {
  name: authorizeData.name,
  image: authorizeData.image,
};

export const authorizeAccount = {
  username: authorizeData.username,
  password: "",
  newPassword: "",
  confirmPassword: "",
};

export const useFormStore = create((set) => ({
  editProductForm: false,
  addProductForm: false,
  productData: initialProductData,
  newProductData: initialProductData,
  authorizeProfile,
  authorizeAccount,
  setEditProductForm: () =>
    set((state) => ({
      editProductForm: !state.editProductForm,
    })),
  setProductData: (data) =>
    set((state) => ({
      productData: (state.productData = data),
    })),
  setAddProductForm: () =>
    set((state) => ({
      addProductForm: !state.addProductForm,
    })),
  setNewProductData: (newData) => {
    set((state) => ({
      newProductData: (state.newProductData = newData),
    }));
  },
  updateProductData: (newData) => {
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/products/${newData.id}`, newData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  },
  addNewProduct: (newProductData) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/products`, newProductData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  },
  handleOnChange: (e, data) => {
    const value = e.target.value;
    const name = e.target.name;
    set((state) => ({
      [data]: { ...state[data], [name]: value },
    }));
  },
  deleteProduct: (productToDelete) => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/products/${productToDelete.id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  },
  updateAccountData: (newAccountData) => {
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/authorize`, newAccountData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  },
  setAuthorizeAccount: (data) => {
    set((state) => ({
      authorizeAccount: (state.newProductData = data),
    }));
  }
}));
