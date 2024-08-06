import React from 'react'
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500", "700"] })

type Props = {
    className?: string
}

export default function Logo({ className }: Props) {
    return <h1 className={`${ubuntu.className} text-2xl ${className}`}>Warung<span className='text-primary-blue'>Web</span></h1>
}
