import { orderListRouter } from '@/lib/database/orderListRouter'
import { GroceryProduct } from '@/types/groceryInterface'
import FadeInUp from '@/ui/framer-motion/Animation/FadeInUp'
import { Button } from '@chakra-ui/react'
import React from 'react'

export default function ChefOrderCard({ orderId, orderData }: { orderId: number, orderData: GroceryProduct[] }) {
  const { deleteOrderList } = orderListRouter
  return (
    <FadeInUp className="relative overflow-x-auto flex flex-col w-44 lg:w-96 h-64 lg:h-96 shadow-md rounded-md">
      <section className="w-full h-3/4 text-sm text-left rtl:text-right text-gray-500 overflow-auto overflow-scrollbar-small">
        <div className="text-xs text-gray-700 uppercase bg-gray-50 h-12 w-full flex justify-between">
          <h1 className="px-6 py-3">
            Product Name
          </h1>
          <h1 className="w-1/2 flex justify-center items-center h-full">
            Quantity
          </h1>
        </div>
        {
          orderData.map((order, index) => (
            <div key={index} className="border-b h-12 flex justify-between">
              <h2 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-sm ms:text-base">
                {order.name}
              </h2>
              <h2 className="w-1/2 flex justify-center items-center h-full">
                {order.quantity}
              </h2>
            </div>
          ))
        }
      </section>
      <Button onClick={() => deleteOrderList(orderId)} className="w-fit justify-self-end self-end mt-auto mb-3 mr-5" size={"sm"} colorScheme='green'>Complete</Button>
    </FadeInUp>

  )
}
