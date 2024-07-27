"use client"
import ScrollTopButton from '@/app/ui/elements/ScrollTopButton'
import { Product } from '@/types/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import React from 'react'
import FadeInUp from '../../framer-motion/FadeInUp'
import CashierProductCard from './CashierProductCard'
import OwnerProductCard from './OwnerProductCard'

type productListProps = {
    isOwner: boolean
}

export default function ProductsList({ isOwner }: productListProps) {
    const { products } = ProductsStore();
    const cashierClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-2 sm:gap-y-7";
    const ownerClassName = "grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-3";
    return (
        <section className={`min-h-[75svh] w-full mt-2 sm:mt-7 grid ${isOwner ? ownerClassName : cashierClassName}`}>
            {
                products.map((product: Product, index: number) => (
                    <FadeInUp key={index} delay={index * 0.1}>
                        {
                            isOwner ?
                                <OwnerProductCard productData={product} />
                                :
                                <CashierProductCard productData={product} />
                        }
                    </FadeInUp>
                ))
            }
            <ScrollTopButton />
        </section>
    )
}
