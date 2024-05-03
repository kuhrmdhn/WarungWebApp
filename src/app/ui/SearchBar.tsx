"use client"
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { InputGroup, Input, InputRightAddon } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { Search } from 'react-feather'

export default function SearchBar() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { products, setFilteredProducts } = ProductsStore()

    const handleInput = (e: string) => {
        const key = e.toLowerCase()
        const query = new URLSearchParams(searchParams)
        if (key !== "") {
            query.set('query', key)
        } else {
            query.delete('query')
        }
        replace(`${pathname}?${query.toString()}`)
    }

    const handleKeyboardEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchProduct()
        }
    }

    const searchProduct = () => {
        const query = searchParams.get('query')?.toString() || ''
        if (query === "") {
            const initialProducts = products.filter((product: Product) => product.category === "food")
            setFilteredProducts(initialProducts)
        } else {
            const searchResult = products.filter((product: Product) => product.name.trim().toLowerCase().includes(query))
            setFilteredProducts(searchResult)
        }
    }

    return (
        <InputGroup>
            <Input
                onKeyDown={handleKeyboardEnter}
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                placeholder="Search Product"
                defaultValue={searchParams.get('query')?.toString()}
            />
            <InputRightAddon className='cursor-pointer' onClick={searchProduct}>
                <Search />
            </InputRightAddon>
        </InputGroup>
    )
}