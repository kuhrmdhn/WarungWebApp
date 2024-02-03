import axios from "axios";
import { create } from "zustand";

<<<<<<< HEAD
export const getAuthorizeData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/authorize`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

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

export const authorizeData = {
  name: getAuthorizeData.name,
  image: getAuthorizeData.image,
};

export const authorizeAccount = {
  username: getAuthorizeData.username,
  password: "",
  newPassword: "",
  confirmPassword: "",
};

export const useFormStore = create((set) => ({
  editProductForm: false,
  addProductForm: false,
  productData: initialProductData,
  newProductData: initialProductData,
  authorizeData,
  authorizeAccount,
=======
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
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  setEditProductForm: () =>
    set((state) => ({
      editProductForm: !state.editProductForm,
    })),
<<<<<<< HEAD
  setProductData: (data) =>
    set((state) => ({
      productData: (state.productData = data),
=======
  setInitialProductData: (data) =>
    set((state) => ({
      initialProductData: (state.initialProductData = data),
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
    })),
  setAddProductForm: () =>
    set((state) => ({
      addProductForm: !state.addProductForm,
    })),
<<<<<<< HEAD
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
=======
  updateProductData: (newData) => {
    axios.put(`${import.meta.env.VITE_BASE_URL}/products/${newData.id}`, newData)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  }
}));
