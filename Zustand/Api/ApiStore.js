import axios from "axios";
import { create } from "zustand";

// Initial value
export const authorizeData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/authorize`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

const productData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/products`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

const categoryData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/categories`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

const orderData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

const orderGroupData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/pesanans`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

// Store
export const useGetApiStore = create((set) => ({
  authorizeData,
  productData,
  categoryData,
  orderData,
  orderGroupData,
  setAuthorizeData: (e) => {
    const name = e.target.name;
    const value = e.target.value;

    set((state) => ({
      authorizeData: { ...state.authorizeData, [name]: value },
    }));
  },
  setProductData: (productData) => set(() => ({ productData })),
  setOrderData: (orderData) => set(() => ({ orderData })),
  addNewOrderData: async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/keranjangs`, data);
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  updateOrderData: async (id, updateData) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`,updateData);
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  removeOrderItem: async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`);
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  payOrderCart: (orderData) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/pesanans`, orderData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
      .then((response) => {
        const data = response.data;
        for (const item of data) {
          axios.delete(`${import.meta.env.VITE_BASE_URL}/keranjangs/${item.id}`);
        }
      });
    set(() => ({ orderData: [] }));
  },
  resetSoldData: (data) => {
    const resetData = { ...data, sold: 0 };
    axios.put(`${import.meta.env.VITE_BASE_URL}/products/${data.id}`,resetData);
  },
  setOrderGroupData: (orderGroupData) => {
    set(() => ({ orderGroupData }));
  },
  fetchApi: async () => {
    const authorizeData = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/authorize`)
      .then((response) => response.data);
    const productData = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/products`)
      .then((response) => response.data);
    const categoryData = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/categories`)
      .then((response) => response.data);
    const orderData = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
      .then((response) => response.data);
    const orderGroupData = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/pesanans`)
      .then((response) => response.data);

 set((state) => ({
        ...state,
        authorizeData,
        productData,
        categoryData,
        orderData,
        orderGroupData
      }));
  },
}));
