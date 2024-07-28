"use client"
import React, { Suspense, useCallback, useEffect } from 'react'
import ProductsList from '../ui/component/ProductList/ProductsList'
import GroceryList from '../ui/component/GroceryList/GroceryList'
import { getSession } from 'next-auth/react'
import { UserStore } from '@/lib/store/userStore'
import { groceryRouter } from '@/lib/database/groceryRouter'
import Navbar from '../ui/component/NavigationBar/Navbar'
import Loading from '../loading'

export default function Cashier() {
  const { setUsername } = UserStore()
  const fetchUserGroceryList = useCallback(async () => {
    const session = await getSession();
    if (session) {
      const username = session.user?.name;
      if (username) {
        groceryRouter.getUserGrocery(username);
        setUsername(username);
      }
    }
  }, [setUsername]);

  useEffect(() => {
    fetchUserGroceryList();
  }, [fetchUserGroceryList]);

  return (
    <Suspense fallback={<Loading />}>
      <main className='bg-gray-300'>
        <Navbar />
        <ProductsList isOwner={false} />
        <GroceryList />
      </main>
    </Suspense>
  )
}
