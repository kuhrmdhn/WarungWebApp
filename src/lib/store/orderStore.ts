import { GroceryProduct } from "@/types/groceryInterface";
import { create } from "zustand";

type OrderStore = {
    orderList: GroceryProduct[],
    setOrderList: (orderList: GroceryProduct[]) => void
}

export const OrderStore = create<OrderStore>()((set) => ({
    orderList: [],
    setOrderList: (orderList) => set({ orderList })
}))