"use client"
import ProductCard from '@/app/ui/elements/ProductCard'
import ScrollTopButton from '@/app/ui/elements/ScrollTopButton'
import { Product } from '@/types/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type productListProps = {
    isOwner: boolean
}
export default function ProductsList({ isOwner }: productListProps) {
    const { products, filteredProducts } = ProductsStore();
    const searchParams = useSearchParams();
    const cashierClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-2 sm:gap-y-7";
    const ownerClassName = "grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-3";

    let productsData = products;

    const nameParam = searchParams.get("name")?.toLowerCase();
    const categoryParam = searchParams.get("category")?.toLowerCase();

    if (nameParam || categoryParam) {
        const searchByParam = products.filter(product => {
            const productNameMatches = nameParam ? product.name.toLowerCase().includes(nameParam) : true;
            const productCategoryMatches = categoryParam ? product.category.toLowerCase().includes(categoryParam) : true;
            return productNameMatches && productCategoryMatches;
        });
        productsData = searchByParam.sort((a: Product, b: Product) => a.id - b.id)
    }
    return (
        <section className={`min-h-[75svh] w-full mt-2 sm:mt-7 grid ${isOwner ? ownerClassName : cashierClassName}`}>
            {
                productsData.map((product: Product, index: number) => (
                    <ProductCard key={index}>
                        {
                            isOwner ?
                                <ProductCard.OwnerProductCard productData={product}>
                                    <ProductCard.OwnerCardFooter productData={product} />
                                </ProductCard.OwnerProductCard>
                                :
                                <ProductCard.CashierProductCard productData={product} />
                        }
                    </ProductCard>
                ))
            }
            <ScrollTopButton />
        </section>
    )
}
