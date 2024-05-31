"use client"
import { InputGroup, Input } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function SearchBar() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleInput = (e: string) => {
        const key: string = e.toLowerCase()
        const query = new URLSearchParams(searchParams)
        if (key !== "") {
            query.set('name', key)
            query.delete('category')
        } else {
            query.delete('name')
        }
        replace(`${pathname}?${query.toString()}`)
    }

    return (
        <InputGroup>
            <Input
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                placeholder="Search Product"
                defaultValue={searchParams.get('name')?.toString()}
            />
        </InputGroup>
    )
}