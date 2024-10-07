"use client"
import Loading from '@/app/loading'
import ProductCategoryTabs from '@/ui/component/ProductCategoryTab/ProductCategoryTabs'
import OwnerProductCard from '@/ui/component/ProductList/OwnerProductCard'
import ProductsList from '@/ui/component/ProductList/ProductsList'
import SearchProduct from '@/ui/component/SearchBar/SearchProduct'
import { Suspense } from 'react'

export default function AllProducts() {
  return (
    <Suspense fallback={<Loading />}>
      <main id='allProduct' className='min-h-screen h-max w-full flex flex-col'>
        <section className="w-11/12 sm:w-1/3 h-max self-end mr-5">
          <SearchProduct />
        </section>
        <ProductCategoryTabs />
        <section className='bg-body-gray mt-5'>
          <ProductsList
            className='grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 justify-items-center gap-y-3'
            renderCard={(product) => <OwnerProductCard productData={product} />}
          />
        </section>
      </main>
    </Suspense>
  )
}
