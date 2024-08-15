"use client"
import { capitalizeString } from '@/config/capitalize'
import { ProductCategory } from '@/types/productInterface'
import { Tabs } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import CategoryList from './CategoryLists'

export default function ProductCategoryTabs() {
    const searchParams = useSearchParams()
    const query = new URLSearchParams(searchParams)
    const categories = Object.values(ProductCategory).filter((category) => typeof category == "string").map((category: string) => capitalizeString(category))
    const selectedCategory = query.get("category")?.toLowerCase();

    return (
        <Tabs variant='soft-rounded' colorScheme='blackAlpha' defaultIndex={categories.findIndex(category => category.toLowerCase() === selectedCategory)}>
            <CategoryList categories={categories} />
        </Tabs>
    )
}
