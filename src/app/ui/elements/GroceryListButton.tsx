"use client"
import { GroceryStore, getGroceryList } from '@/lib/store/groceryStore'
import { IconButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ShoppingBag } from 'react-feather'

export default function GroceryListButton() {
  const { groceryList, setGroceryListOpen } = GroceryStore()
  const [loading, setLoading] = useState(true);
  let groceryLength = groceryList.length
  useEffect(() => {
    getGroceryList()
    setLoading(false)

  }, [])


  if (loading) {
    return <IconButton aria-label='Grocery list button skeleton loading' />
  }

  return (
    <div className='relative'>
      <span className={`absolute ${groceryLength > 0 ? "z-10 h-6 w-6" : "-z-10 h-0 w-0"} -top-1 -right-1 rounded-full bg-black text-white font-semibold flex justify-center items-center duration-500`}>
        {groceryLength}
      </span>
      <IconButton onClick={() => setGroceryListOpen(true)} aria-label='Grocery list button' icon={<ShoppingBag />} />
    </div>
  )
}
