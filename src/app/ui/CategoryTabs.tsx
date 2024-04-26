"use client"
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { Tab, TabList, Tabs } from '@chakra-ui/react'
import React from 'react'

export default function CategoryTabs() {
    const categories = ["Food", "Drink", "Snack"]
    const { products, setFilteredProducts } = ProductsStore()
    const filterProduct = (key: string) => {
        setFilteredProducts(products.filter((product: Product) => product.category === key.toLowerCase()))
    }

    return (
        <Tabs variant='soft-rounded'>
            <TabList>
                {
                    categories.map((category: string, index: number) => (
                        <Tab
                            key={index}
                            _selected={{color: "white", background: "black"}}
                            onClick={() => filterProduct(category)}
                        >
                            {category}
                        </Tab>
                    ))
                }
            </TabList>
        </Tabs>
    )
}
