"use client"
import React, { useEffect } from 'react'
import { orderListRouter } from '@/lib/database/orderListRouter'
import { OrderStore } from '@/lib/store/orderStore'
import ChefOrderCard from '../ui/component/ProductList/ChefOrderCard'
import Header from '../ui/component/NavigationBar/Header'

export default function ChefPage() {
  const { orderList } = OrderStore()
  const { getOrderList } = orderListRouter
  useEffect(() => {
    getOrderList()
  }, [getOrderList])

  return (
    <>
      <Header />
      <div className='mini-h-[80svh] grid grid-cols-3 gap-y-3'>
        {
          orderList.map((list, index) => (
            <ChefOrderCard
              orderId={list.id}
              orderData={list.orderData}
              key={index}
            />
          ))
        }
      </div>
    </>
  )
}