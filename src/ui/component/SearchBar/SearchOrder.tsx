"use client"
import React from 'react'
import SearchBar from './SearchBar'
import { useSearchOrder } from '@/hooks/useSearchOrder'

export default function SearchOrder() {
    const { defaultInputValue, onSearch } = useSearchOrder()
    return <SearchBar
        onSearch={onSearch}
        defaultInputValue={defaultInputValue}
    />
}
