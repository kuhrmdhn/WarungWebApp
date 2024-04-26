"use client"
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { InputGroup, Input, InputRightAddon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Search } from 'react-feather'

export default function SearchBar() {
    const [keyword, setKeyword] = useState("")
    const { products, setFilteredProducts } = ProductsStore()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    const handleKeyboardEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchProduct()
        }
    }

    const searchProduct = () => {
        const key = keyword.trim().toLowerCase()
        if (key === "") {
            const initialProducts = products.filter((product: Product) => product.category === "food")
            setFilteredProducts(initialProducts)
            return
        }
        const searchResult = products.filter((product: Product) => product.name.trim().toLowerCase().includes(key))
        setFilteredProducts(searchResult)
    }

    return (
        <InputGroup>
            <Input
                onKeyDown={handleKeyboardEnter}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Search Product"
            />
            <InputRightAddon className='cursor-pointer' onClick={searchProduct}>
                <Search />
            </InputRightAddon>
        </InputGroup>
    )
}
