import axios from "axios";
import { create } from "zustand";

// Initial value
const productData = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

const categoryData = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

const orderData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));



// Store
export const useGetApiStore = create((set) => ({
  productData: productData,
  categoryData: categoryData,
  orderData: orderData,
  setOrderData: (orderData) => set(() => ({ orderData })),
  addNewOrderData: async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/keranjangs`, data);
      // Update order data state after successful POST request
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  updateOrderData: async (id, updateData) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`,updateData);
      // Update order data state after successful PUT request
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  removeOrderItem: async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`);
      // Update order data state after DELETE request
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  payOrderCart: async (orderData) => {
    try{
      await axios.post(`${import.meta.env.VITE_BASE_URL}/pesanans`, orderData);
      // Update order data after pay success/POST request
      await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
      .then((response) => {
        const datas = response.data
        for(const data of datas) {
          axios.delete(`${import.meta.env.VITE_BASE_URL}/keranjangs/${data.id}`)
        }
      })
      .catch(error => console.log(error))

      // const newData = []
      set(() => ({ orderData: [] }));
    } catch (error) {
      console.log(error)
    }
  } 
}));