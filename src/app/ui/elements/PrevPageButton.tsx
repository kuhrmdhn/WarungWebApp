"use client"
import { IconButton } from '@chakra-ui/react'
import { ArrowBack } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function PrevPageButton() {
    const router = useRouter()
    const previousPage = () => {
        router.back()
    }
    return (
        <IconButton aria-label="previous page button" onClick={previousPage}>
            <ArrowBack />
        </IconButton>
    )
}
