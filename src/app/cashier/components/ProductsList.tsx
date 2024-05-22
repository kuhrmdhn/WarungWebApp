"use client"
import ProductCard from '@/app/ui/ProductCard'
import ScrollTopButton from '@/app/ui/ScrollTopButton'
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function ProductsList() {
    const { products, filteredProducts } = ProductsStore()
    const searchParams = useSearchParams()
    let productsData = filteredProducts
    if(searchParams.get("query")) {
        const res = products.filter((products: Product) => products.name.toLowerCase().includes(searchParams.get("query")?.toString() || ''))
        productsData = res
    }
    return (
        <section className='min-h-[75svh] w-full mt-2 sm:mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-2 sm:gap-y-7'>
            {
                productsData.map((product: Product, index: number) => (
                    <ProductCard
                        key={index}
                        productData={product}
                        button={<ProductCard.CashierCardButton product={product} status={product.status}/>}
                    />
                ))
            }
            <ScrollTopButton />
        </section>
    )
}
