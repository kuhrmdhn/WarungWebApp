"use client"
import { InputGroup, Input, InputRightElement, Kbd } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

export default function SearchBar() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleInput = (e: string) => {
        const key = e.toLowerCase()
        const query = new URLSearchParams(searchParams)
        if (key !== "") {
            query.set('name', key)
            query.delete('category')
        } else {
            query.delete('name')
        }
        replace(`${pathname}?${query.toString()}`)
    }


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <InputGroup className="mb-3">
            <Input
                ref={inputRef}
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                placeholder="Search Product"
                defaultValue={searchParams.get('name')?.toString()}
            />
            <InputRightElement className='mr-7'>
                <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
            </InputRightElement>
        </InputGroup>
    )
}