import ProductsList from '@/app/ui/components/ProductsList'
import SearchBar from '@/app/ui/elements/SearchBar'
import React, { Suspense } from 'react'
import NavigationBar from '../components/NavigationBar'
import CategoryTabs from '@/app/ui/elements/CategoryTabs'

export default function AllProducts() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <main id='allProduct' className='min-h-screen h-max w-full flex flex-col'>
        <section className="w-11/12 sm:w-1/3 h-max self-end mr-5">
          <SearchBar />
        </section>
        <CategoryTabs/>
        <section className='bg-body-gray mt-5'>
          <ProductsList isOwner={true} />
        </section>
      </main>
    </Suspense>
  )
}
