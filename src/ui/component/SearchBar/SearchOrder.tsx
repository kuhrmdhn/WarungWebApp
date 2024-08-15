"use client"
import React from 'react'
import SearchBar from './SearchBar'
import { useSearchOrder } from '@/hooks/useSearchOrder'

export default function SearchOrder() {
    const { handleInput, defaultInputValue } = useSearchOrder()
    return <SearchBar
        handleInput={handleInput}
        defaultInputValue={defaultInputValue}
    />
}
