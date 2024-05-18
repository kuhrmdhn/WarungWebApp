import ProductsList from '@/app/cashier/components/ProductsList'
import SearchBar from '@/app/ui/SearchBar'
import React, { Suspense } from 'react'
import NavigationBar from '../components/NavigationBar'

export default function AllProducts() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <NavigationBar />
      <main id='allProduct' className='min-h-screen h-max w-full flex flex-col'>
        <section className="w-11/12 sm:w-1/3 h-max self-end mr-5">
          <SearchBar />
        </section>
        <section className='bg-body-gray mt-5'>
          <ProductsList />
        </section>
      </main>
    </Suspense>
  )
}
