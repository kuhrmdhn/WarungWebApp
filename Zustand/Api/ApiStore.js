import axios from "axios";
import { create } from "zustand";

// Initial value
<<<<<<< HEAD
const authorizeData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/authorize`)
=======
const productData = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

<<<<<<< HEAD
const productData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/products`)
=======
const categoryData = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`)
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

<<<<<<< HEAD
const categoryData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/categories`)
=======
const orderData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

<<<<<<< HEAD
const orderData = await axios
  .get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.log(error));

// Store
export const useGetApiStore = create((set) => ({
  authorizeData,
  productData: productData,
  categoryData: categoryData,
  orderData: orderData,
  setAuthorizeData: (e) => {
    const name = e.target.name;
    const value = e.target.value;

    set((state) => ({
      authorizeData: { ...state.authorizeData, [name]: value },
    }));
  },
=======


// Store
export const useGetApiStore = create((set) => ({
  productData: productData,
  categoryData: categoryData,
  orderData: orderData,
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  setOrderData: (orderData) => set(() => ({ orderData })),
  addNewOrderData: async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/keranjangs`, data);
      // Update order data state after successful POST request
<<<<<<< HEAD
      const newData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/keranjangs`
      );
=======
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  updateOrderData: async (id, updateData) => {
    try {
<<<<<<< HEAD
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`,
        updateData
      );
      // Update order data state after successful PUT request
      const newData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/keranjangs`
      );
=======
      await axios.put(`${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`,updateData);
      // Update order data state after successful PUT request
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
  removeOrderItem: async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/keranjangs/${id}`);
      // Update order data state after DELETE request
<<<<<<< HEAD
      const newData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/keranjangs`
      );
=======
      const newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/keranjangs`);
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
      set(() => ({ orderData: newData.data }));
    } catch (error) {
      console.log(error);
    }
  },
<<<<<<< HEAD
  payOrderCart: (orderData) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/pesanans`, orderData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    // Update order data after pay success/POST request
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/keranjangs`)
      .then((response) => {
        const data = response.data;
        for (const item of data) {
          axios.delete(
            `${import.meta.env.VITE_BASE_URL}/keranjangs/${item.id}`
          );
        }
      });
    set(() => ({ orderData: [] }));
  },
  resetSoldData: (data) => {
    const resetData = { ...data, sold: 0 };
    // console.log(resetData)
    axios.put(
      `${import.meta.env.VITE_BASE_URL}/products/${data.id}`,
      resetData
    );
  },
}));
=======
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
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
