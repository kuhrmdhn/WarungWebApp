import { create } from "zustand";
import { GroceryParam } from "../../types/groceryInterface";

type GroceryStore = {
    groceryList: GroceryParam[]
    setGroceryList: (params: GroceryParam) => void
    updateGroceryList: (productData: GroceryParam) => void
    groceryListOpen: boolean
    setGroceryListOpen: (status: boolean) => void
    removeGrocery: (id: number) => void
    updateSelectedGrocery: (id: number, selectedData: GroceryParam) => void
}

export const GroceryStore = create<GroceryStore>()((set) => ({
    groceryList: [],
    setGroceryList: async (product) => {
        const currentGroceryData = GroceryStore.getState().groceryList
        const index = currentGroceryData.findIndex(grocery => grocery.id === product.id)
        if (index === -1) {
            await axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/grocery`, product)
        } else {
            const currentData = currentGroceryData.filter(grocery => grocery.id === product.id)[0]
            const updatedData = {
                ...currentData, quantity: currentData.quantity + 1
            }
            await axios.put(`${process.env.NEXT_PUBLIC_DATABASE_URL}/grocery/${product.id}`, updatedData)
        }
        getGroceryList()
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
    removeGrocery: async (id: number) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_DATABASE_URL}/grocery/${id}`)
        getGroceryList()
    },
    updateSelectedGrocery: async (id: number, selectedData: GroceryParam) => {
        await axios.put(`${process.env.NEXT_PUBLIC_DATABASE_URL}/grocery/${id}`, selectedData)
        getGroceryList()
    }
}))