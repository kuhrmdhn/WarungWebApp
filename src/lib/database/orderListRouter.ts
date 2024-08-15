import { supabase } from "@/config/supabase"
import { GroceryProduct } from "@/types/groceryInterface"
import { OrderStore } from "../store/orderStore"
import { OrderProduct } from "@/types/orderInterface"

export const orderListRouter = {
    async getOrderList(): Promise<OrderProduct[] | any> {
        try {
            const { data: orderList, error } = await supabase.from("order_list").select()
            if (error) {
                throw new Error(error.message)
            }
            OrderStore.getState().setOrderList(orderList)
            return orderList
        } catch (error) {
            return error
        }
    },
    async filterOrderList(key: string) {
        const orderList: OrderProduct[] = await orderListRouter.getOrderList()
        const filterOrders = orderList.filter((orders) => {
            return orders.orderData.some((order) => {
                const keyword = key.trim().toLowerCase()
                const orderName = order.name.trim().toLowerCase()
                return orderName.includes(keyword)
            })
        })
        OrderStore.setState({ orderList: filterOrders })
    },
    async deleteOrderList(id: number) {
        try {
            const { error, status } = await supabase.from("order_list").delete().eq("id", id)
            if (error) {
                throw new Error(error.message)
            }
            orderListRouter.getOrderList()
            return status
        } catch (error) {
            return error
        }
    },
    async addNewOrderList(orderData: GroceryProduct[]) {
        try {
            const id = new Date()
            const { status, error } = await supabase.from("order_list").insert({ id, ...orderData }).select()
            if (error) {
                return error.message
            }
            orderListRouter.getOrderList()
            return status
        } catch (error) {
            console.error(error)
            return error
        }
    }
}
