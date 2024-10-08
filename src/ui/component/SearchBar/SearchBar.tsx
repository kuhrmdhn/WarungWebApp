"use client"
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useCallback, useEffect, useRef } from 'react'
import { Search } from 'react-feather'

type Props = {
    defaultInputValue?: string
    onSearch: (keyword: string) => void
}

export default function SearchBar({ defaultInputValue, onSearch }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSearch = useCallback(() => {
        const inputElement = inputRef.current
        if (inputElement) {
            const value = inputElement.value
            onSearch(value)
        }
    }, [onSearch])
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handleSearch()
            }
        })
    }, [handleSearch])

    return (
        <InputGroup className="mb-3">
            <Input
                ref={inputRef}
                type="text"
                placeholder="Search Product"
                defaultValue={defaultInputValue}
                className='text-sm'
            />
            <InputRightElement>
                <IconButton onClick={handleSearch} aria-label='Search Button'>
                    <Search />
                </IconButton>
            </InputRightElement>
        </InputGroup>
    )
}