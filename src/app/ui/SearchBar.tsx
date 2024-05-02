"use client"
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { InputGroup, Input, InputRightAddon } from '@chakra-ui/react'
import axios from 'axios'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Search } from 'react-feather'

export default function SearchBar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const query = searchParams.get('query')?.toString()
    const { replace } = useRouter()
    const [keyword, setKeyword] = useState("")
    const { products, setFilteredProducts } = ProductsStore()

    useEffect(() => {
        const getProduct = async () => {
            const params = new URLSearchParams(searchParams)
            if(query === "") {
                    const initialProducts = products.filter((product: Product) => product.category === "food")
                     setFilteredProducts(initialProducts)
                    params.delete('query')
            } else {
                const { data: searchResult } = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products/query=${query}`)
                setFilteredProducts(searchResult)
            }
        }
        getProduct()
    }, [query])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    const handleKeyboardEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchProduct()
        }
    }

    const searchProduct = async () => {
        const key = keyword.trim().toLowerCase()
        const params = new URLSearchParams(searchParams)
        params.set('query', encodeURIComponent(key))
        if (query === "") {
            const initialProducts = products.filter((product: Product) => product.category === "food")
            setFilteredProducts(initialProducts)
            params.delete('query')
        } else {
            replace(`${pathname}?${params.toString()}`);
            const { data: searchResult } = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products/query=${key}`)
            setFilteredProducts(searchResult)
        }
    }

    return (
        <InputGroup>
            <Input
                onKeyDown={handleKeyboardEnter}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Search Product"
                defaultValue={query}
            />
            <InputRightAddon className='cursor-pointer' onClick={searchProduct}>
                <Search />
            </InputRightAddon>
        </InputGroup>
    )
}
