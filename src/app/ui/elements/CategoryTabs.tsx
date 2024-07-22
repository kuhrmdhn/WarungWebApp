"use client"
import { capitalizeString } from '@/config/capitalize'
import { productRouter } from '@/lib/database/productRouter'
import { ProductCategory } from '@/types/productInterface'
import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function CategoryTabs() {
    const { getProductsByName, getProductByCategory } = productRouter
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
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

    const filterProductByCategory = (category: string) => {
        const key = category.toLowerCase()
        query.set("category", key)
        query.delete("name")
        replace(`${pathname}?${query.toString()}`)
        getProductByCategory(key);
    }

    return (
        <Tabs variant='soft-rounded' defaultIndex={categories.findIndex(category => category.toLowerCase() === selectedCategory)}>
            <TabList>
                {
                    categories.map((category: string, index: number) => (
                        <Tab
                            key={index}
                            onClick={() => filterProductByCategory(category)}
                            className={`text-xs sm:text-base`}
                        >
                            {category}
                        </Tab>
                    ))
                }
            </TabList>
        </Tabs>
    )
}
