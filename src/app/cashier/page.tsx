"use client"
import { groceryRouter } from '@/lib/database/groceryRouter'
import { UserStore } from '@/lib/store/userStore'
import CashierProductCard from '@/ui/component/ProductList/CashierProductCard'
import { useSession } from 'next-auth/react'
import { Suspense, useCallback, useEffect } from 'react'
import GroceryList from '../../ui/component/GroceryList/GroceryList'
import Loading from '../loading'
import { ownerRouter } from '@/lib/database/ownerRouter'
import ProductsList from '@/ui/component/ProductList/ProductsList'

export default function Cashier() {
  const { getOwnerData } = ownerRouter
  const { setUsername } = UserStore()
  const { data } = useSession()

  const fetchUserGroceryList = useCallback(async () => {
    if (data) {
      const username = data.user.name;
      if (username) {
        groceryRouter.getUserGrocery(username);
        setUsername(username);
      }
    }
  }, [data, setUsername]);

  useEffect(() => {
    getOwnerData()
    fetchUserGroceryList();
  }, [fetchUserGroceryList, getOwnerData]);

  return (
    <Suspense fallback={<Loading />}>
      <ProductsList
        className='grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-2 sm:gap-y-7 pt-3'
        renderCard={(product) => <CashierProductCard productData={product} />}
      />
      <GroceryList />
    </Suspense>
  )
}
