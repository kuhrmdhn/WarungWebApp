import { GroceryProduct } from "@/types/groceryInterface";
import { OrderProduct } from "@/types/orderInterface";
import { create } from "zustand";

type OrderStore = {
    orderList: OrderProduct[],
    setOrderList: (orderList: OrderProduct[]) => void
}

export const OrderStore = create<OrderStore>()((set) => ({
    orderList: [],
    setOrderList: (orderList) => set({ orderList })
}))