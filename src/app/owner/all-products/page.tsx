import React, { Suspense } from 'react'
import Loading from '@/app/loading'
import SearchBar from '@/app/ui/elements/SearchBar'
import ProductCategoryTabs from '@/app/ui/component/ProductCategoryTab/ProductCategoryTabs'
import ProductsList from '@/app/ui/component/ProductList/ProductsList'

export default function AllProducts() {
  return (
    <Suspense fallback={<Loading />}>
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
