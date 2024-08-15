"use client"
import ScrollTopButton from '@/ui/elements/ScrollTopButton'
import { Product } from '@/types/productInterface'
import React, { ReactNode, useCallback, useEffect } from 'react'
import FadeInUp from '../../framer-motion/Animation/FadeInUp'
import { ProductsStore } from '@/lib/store/productsStore'
import { useSearchParams } from 'next/navigation'
import { productRouter } from '@/lib/database/productRouter'

type productListProps = {
    className?: string
    renderCard: (params: Product) => ReactNode
}

export default function ProductsList({ className, renderCard }: productListProps) {
    const { products } = ProductsStore()
    const searchParams = useSearchParams()
    const { getProducts, getProductsByName, getProductByCategory } = productRouter
    const productNameSearchParam = searchParams.get("name")?.toString()
    const productCategorySearchParam = searchParams.get("category")?.toString()

    const setInitialProducts = useCallback(async () => {
        if (productCategorySearchParam) {
            getProductByCategory(productCategorySearchParam);
        } else if (productNameSearchParam) {
            getProductsByName(productNameSearchParam)
        } else {
            getProducts()
        }
    },[getProductByCategory, getProductsByName, getProducts, productCategorySearchParam, productNameSearchParam])

    useEffect(() => {
        setInitialProducts()
    }, [setInitialProducts])

    return (
        <section className={`min-h-[75svh] w-full mt-2 sm:mt-7 grid ${className}`}>
            {
                products.map((product: Product, index: number) => (
                    <FadeInUp key={index} delay={index * 0.1}>
                        {renderCard(product)}
                    </FadeInUp>
                ))
            }
            <ScrollTopButton />
        </section>
    )
}
