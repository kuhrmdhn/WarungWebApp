"use client"
import React, { Suspense, useEffect } from 'react'
import ProductsList from '../ui/components/ProductsList'
import Header from './components/Header'
import GroceryList from './components/GroceryList'
import { getSession } from 'next-auth/react'
import { UserStore } from '@/lib/store/userStore'
import { groceryRouter } from '@/lib/database/groceryRouter'

export default function Cashier() {
  const { setUsername } = UserStore()

  async function fetchUserGroceryList() {
    const session = await getSession();
    if (session) {
      const username = session.user?.name;
      if (username) {
        groceryRouter.getUserGrocery(username);
        setUsername(username)
      }
    }
  }

  useEffect(() => {
    fetchUserGroceryList()
  }, [])
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <main className='bg-gray-300'>
        <Header />
        <ProductsList isOwner={false} />
        <GroceryList />
      </main>
    </Suspense>
  )
}
