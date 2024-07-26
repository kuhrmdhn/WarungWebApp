import ProductsList from '@/app/ui/component/ProductList/ProductsList'
import SearchBar from '@/app/ui/elements/SearchBar'
import React, { Suspense } from 'react'
import ProductCategoryTabs from '@/app/ui/component/ProductCategoryTab/ProductCategoryTabs'

export default function AllProducts() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <main id='allProduct' className='min-h-screen h-max w-full flex flex-col'>
        <section className="w-11/12 sm:w-1/3 h-max self-end mr-5">
          <SearchBar />
        </section>
        <ProductCategoryTabs />
        <section className='bg-body-gray mt-5'>
          <ProductsList isOwner={true} />
        </section>
      </main>
    </Suspense>
  )
}
