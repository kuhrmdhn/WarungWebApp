"use client"
import React from 'react'
import SearchBar from './SearchBar'
import { useSearchProduct } from '@/hooks/useSearchProduct'

export default function SearchProduct() {
    const { productNameSearchParam, onSearch } = useSearchProduct()
    return <SearchBar
        defaultInputValue={productNameSearchParam}
        onSearch={onSearch}
    />
}
