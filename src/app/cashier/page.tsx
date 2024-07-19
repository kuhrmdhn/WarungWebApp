"use client"
import React, { Suspense, useCallback, useEffect } from 'react'
import ProductsList from '../ui/components/ProductsList'
import GroceryList from './components/GroceryList'
import { getSession } from 'next-auth/react'
import { UserStore } from '@/lib/store/userStore'
import { groceryRouter } from '@/lib/database/groceryRouter'
import NavigationBar from '../ui/elements/NavigationBar'

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
    <Suspense fallback={<h1>loading...</h1>}>
      <main className='bg-gray-300'>
        <NavigationBar>
          <NavigationBar.CashierNavbar />
        </NavigationBar>
        <ProductsList isOwner={false} />
        <GroceryList />
      </main>
    </Suspense>
  )
}
