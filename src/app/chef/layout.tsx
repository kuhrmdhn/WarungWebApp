import React from 'react'
import { Metadata } from 'next'
import ChefHeader from '@/ui/component/NavigationBar/ChefHeader'

export const metadata: Metadata = {
    title: "Chef"
}


type Props = {
    children: React.ReactNode
}

export default function layout({ children }: Props) {
    return (
        <>
            <ChefHeader />
            {children}
        </>
    )
}
