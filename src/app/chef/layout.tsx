import React from 'react'
import Header from '@/ui/component/NavigationBar/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Chef"
}


type Props = {
    children: React.ReactNode
}

export default function layout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
