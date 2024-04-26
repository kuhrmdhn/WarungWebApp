"use client"
import { IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ShoppingBag } from 'react-feather'

export default function GroceryListButton() {
  const [notification, setNotification] = useState(false)
  return (
    <div className='relative'>
      <span className={`absolute ${notification ? "z-10 h-6 w-6" : "-z-10 h-0 w-0"} -top-2 -right-2 rounded-full bg-black text-white font-semibold flex justify-center items-center duration-500`}>10</span>
      <IconButton aria-label='Grocery list button' onClick={() => setNotification(!notification)} icon={<ShoppingBag />} />
    </div>
  )
}
