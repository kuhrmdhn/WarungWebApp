import Navbar from '@/ui/component/NavigationBar/CashierNavbar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Cashier"
}


type Props = {
    children: React.ReactNode
}

export default function CashierLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
