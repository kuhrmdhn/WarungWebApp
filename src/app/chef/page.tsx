"use client"
import React, { useCallback, useEffect } from 'react'
import { OrderStore } from '@/lib/store/orderStore'
import ChefOrderCard from '../../ui/component/ProductList/ChefOrderCard'
import { useSearchParams } from 'next/navigation'
import { orderListRouter } from '@/lib/database/orderListRouter'

export default function ChefPage() {
  const { orderList } = OrderStore()
  const searchParams = useSearchParams()
  const { filterOrderList, getOrderList } = orderListRouter
  const orderNameParams = searchParams.get('order-name')?.toString()

  const handleSearchParams = useCallback(async () => {
    if (orderNameParams) {
      await filterOrderList(orderNameParams)
    } else {
      await getOrderList()
    }
  }, [filterOrderList, getOrderList, orderNameParams])

  useEffect(() => {
    handleSearchParams()
  }, [handleSearchParams])

  return (
    <div className='min-h-[80svh] grid grid-cols-2 lg:grid-cols-3 gap-y-3 pt-28'>
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
  )
}