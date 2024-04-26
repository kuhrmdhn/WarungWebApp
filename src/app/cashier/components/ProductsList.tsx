"use client"
import ProductCard from '@/app/ui/ProductCard'
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import React from 'react'

export default function ProductsList() {
    const { filteredProducts } = ProductsStore()
    return (
        <section className='min-h-[75svh] mt-7 grid grid-cols-5 justify-items-center gap-y-7'>
            {
                filteredProducts.map((product: Product, index: number) => (
                    <ProductCard
                        key={index}
                        productData={product}
                    />
                ))
            }
        </section>
    )
}
