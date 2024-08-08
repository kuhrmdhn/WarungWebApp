"use client"
import { Button } from '@chakra-ui/react'
import { ArrowBack } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function MovePageButton({ link }: { link?: string }) {
    const router = useRouter()
    const previousPage = () => {
        if (!link) {
            router.back()
        } else {
            router.replace(link)
        }
    }
    return (
        <Button aria-label="previous page button" onClick={previousPage} className="h-6 lg:h-10 w-4 lg:w-8">
            <ArrowBack className="text-xs sm:text-base" />
        </Button>
    )
}
