import { create } from "zustand";
import axios from "axios";
import { GroceryParam } from "../interface/groceryInterface";

type GroceryStore = {
    groceryList: GroceryParam[]
    getGroceryList: (username: string) => void
    addNewGroceryProduct: (params: GroceryParam, username: string) => void
    updateGroceryList: (productData: GroceryParam) => void
    groceryListOpen: boolean
    setGroceryListOpen: (status: boolean) => void
    removeGrocery: (id: number, username: string) => void
    updateSelectedGrocery: (username: string, selectedData: GroceryParam) => void
}

export const GroceryStore = create<GroceryStore>()((set) => ({
    groceryList: [],
    getGroceryList: async (username: string) => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user/grocery?username=${username}`);
            set({ groceryList: data });
        } catch (error) {
            console.error("Error fetching grocery list:", error);
            set({ groceryList: [] });
        }
    },
    addNewGroceryProduct: async (product, username) => {
        const currentGroceryData = GroceryStore.getState().groceryList
        const index = currentGroceryData.findIndex(grocery => grocery.id === product.id)
        if (index === -1) {
            await axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user/grocery?username=${username}`, product)
        } else {
            const currentData = currentGroceryData.filter(grocery => grocery.id === product.id)[0]
            const updatedData = {
                ...currentData,
                quantity: currentData.quantity + 1
            }
            await axios.patch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user/grocery?username=${username}`, updatedData)
        }
        GroceryStore.getState().getGroceryList(username)
    },
    updateGroceryList: (newData) => {
        set((state) => ({
            groceryList: [...state.groceryList, newData]
        }))
    },
    groceryListOpen: false,
    setGroceryListOpen: (status) => {
        set({ groceryListOpen: status })
    },
    removeGrocery: async (id, username) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user/grocery?username=${username}&&grocery_id=${id}`)
        GroceryStore.getState().getGroceryList(username)
    },
    updateSelectedGrocery: async (username, selectedData) => {
        await axios.patch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user/grocery?username=${username}`, selectedData)
        GroceryStore.getState().getGroceryList(username)
    }
}))