"use client"
import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function CategoryTabs() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const categories = ["Food", "Drink", "Snack"]
    const query = new URLSearchParams(searchParams)
    const selectedCategory = query.get("category")?.toLowerCase();

    const filterProduct = (key: string) => {
        query.set("category", key.toLowerCase())
        query.delete("name")
        replace(`${pathname}?${query.toString()}`)
    }

    return (
        <Tabs variant='soft-rounded' defaultIndex={categories.findIndex(category => category.toLowerCase() === selectedCategory)}>
            <TabList>
                {
                    categories.map((category: string, index: number) => (
                        <Tab
                            key={index}
                            onClick={() => filterProduct(category)}
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
