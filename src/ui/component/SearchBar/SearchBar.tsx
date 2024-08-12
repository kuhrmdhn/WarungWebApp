"use client"
import { InputGroup, Input, InputRightElement, Kbd } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'

type Props = {
    defaultInputValue?: string
    handleInput: (e: string) => void
}

export default function SearchBar({ defaultInputValue, handleInput }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
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
                defaultValue={defaultInputValue}
                className='text-sm'
            />
            <InputRightElement className='text-sm hidden lg:flex mr-7'>
                <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
            </InputRightElement>
        </InputGroup>
    )
}