"use client"
import ScrollTopButton from '@/app/ui/elements/ScrollTopButton'
import { Product } from '@/types/productInterface'
import React, { ReactNode } from 'react'
import FadeInUp from '../../framer-motion/FadeInUp'

type productListProps = {
    className?: string
    products: Product[]
    renderCard: (params: Product) => ReactNode
}

export default function ProductsList({ className, products, renderCard }: productListProps) {
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
