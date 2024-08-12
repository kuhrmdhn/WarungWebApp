import React from 'react'
import { Ubuntu } from "next/font/google"
import Link from 'next/link'

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500", "700"] })

type Props = {
    className?: string
}

export default function Logo({ className }: Props) {
    return (
        <Link href={"/"}>
            <h1 className={`${ubuntu.className} text-2xl ${className}`}>Warung<span className='text-primary-blue'>Web</span></h1>
        </Link>
    )
}
