"use client"
import { capitalizeString } from '@/config/capitalize'
import { productRouter } from '@/lib/database/productRouter'
import { ProductCategory } from '@/types/productInterface'
import { Tabs } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import CategoryList from './CategoryLists'

export default function ProductCategoryTabs() {
    const { getProductsByName, getProductByCategory } = productRouter
    const searchParams = useSearchParams()
    const categories = Object.values(ProductCategory).filter((category) => typeof category == "string").map((category: string) => capitalizeString(category))
    const query = new URLSearchParams(searchParams)
    const selectedCategory = query.get("category")?.toLowerCase();

    useEffect(() => {
        const productNameSearchParam = searchParams.get("name")
        const productCategorySearchParam = searchParams.get("category")
        if (productNameSearchParam) {
            getProductsByName(productNameSearchParam)
        }
        if (productCategorySearchParam) {
            getProductByCategory(productCategorySearchParam);
        }
    }, [getProductByCategory, getProductsByName, searchParams])

    return (
        <Tabs variant='soft-rounded' defaultIndex={categories.findIndex(category => category.toLowerCase() === selectedCategory)}>
            <CategoryList categories={categories} />
        </Tabs>
    )
}
