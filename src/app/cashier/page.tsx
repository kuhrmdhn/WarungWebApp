"use client"
import React, { Suspense, useEffect } from 'react'
import ProductsList from '../ui/components/ProductsList'
import Header from './components/Header'
import GroceryList from './components/GroceryList'
import { GroceryStore } from '@/lib/store/groceryStore'
import { getSession } from 'next-auth/react'
import { UserStore } from '@/lib/store/userStore'

export default function Cashier() {
  const { getGroceryList } = GroceryStore()
  const { setUsername } = UserStore()

  async function fetchUserGroceryList() {
    const session = await getSession();
    if (session) {
      const username = session.user?.name;
      if (username) {
        getGroceryList(username);
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
