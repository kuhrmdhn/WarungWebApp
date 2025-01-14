"use client"
import { productRouter } from '@/lib/database/productRouter'
import { ProductsStore } from '@/lib/store/productsStore'
import { Product } from '@/types/productInterface'
import ScrollTopButton from '@/ui/elements/ScrollTopButton'
import FadeInUp from '@/ui/framer-motion/Animation/FadeInUp'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useCallback, useEffect } from 'react'

type productListProps = {
    className?: string
    renderCard: (params: Product) => ReactNode
}

export default function ProductsList({ className, renderCard }: productListProps) {
    const { products } = ProductsStore()
    const searchParams = useSearchParams()
    const { getProductsByName, getProductByCategory } = productRouter
    const productNameSearchParam = searchParams.get("name")?.toString()
    const productCategorySearchParam = searchParams.get("category")?.toString()
    const setInitialProducts = useCallback(async () => {
        if (productCategorySearchParam) {
            getProductByCategory(productCategorySearchParam);
        } else if (productNameSearchParam) {
            getProductsByName(productNameSearchParam)
        } else {
            getProductByCategory("food");
        }
    }, [getProductByCategory, getProductsByName, productCategorySearchParam, productNameSearchParam])

    useEffect(() => {
        setInitialProducts()
    }, [setInitialProducts])


    return (
        <section className={`min-h-[75svh] w-full mt-2 sm:mt-7 grid ${className}`}>
            {
                products.sort((a,b) => a.id - b.id).map((product: Product, index: number) => (
                    <FadeInUp key={index} delay={index * 0.1}>
                        {renderCard(product)}
                    </FadeInUp>
                ))
            }
            <ScrollTopButton />
        </section>
    )
}
