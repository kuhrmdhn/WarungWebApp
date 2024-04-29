"use client"
import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <a href="/">
            <Image priority height={70} width={125} className='h-8 sm:h-auto w-auto' alt='Warung Web logo Icon' src={"/Logo.webp"} />
        </a>
    )
}
