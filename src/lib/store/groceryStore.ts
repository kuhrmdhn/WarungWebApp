import { create } from "zustand";
import { GroceryProduct } from "../../types/groceryInterface";
import axios from "axios";

type GroceryStore = {
    groceryList: GroceryProduct[],
    setGroceryList: (data: GroceryProduct[]) => void
    groceryListOpen: boolean
    setGroceryListOpen: (status: boolean) => void
}

export const GroceryStore = create<GroceryStore>()((set) => ({
    groceryList: [],
    setGroceryList: (data) => {
        set({ groceryList: data })
    },
    groceryListOpen: false,
    setGroceryListOpen: (status) => {
        set({ groceryListOpen: status })
    },
}))