"use client"
import Image from 'next/image'
import React from 'react'

function Logo({ children }: { children: React.ReactElement<HTMLElement> }) {
    return (
        <a href="/">
            {children}
        </a>
    )
}

function LogoWhite() {
    return <Image priority height={70} width={125} className='h-8 sm:h-auto w-auto' alt='Warung Web logo Icon' src={"/Logo-White.webp"} />
}

function LogoBlack({ className }: { className?: string }) {
    return <Image priority height={70} width={125} className={`h-8 sm:h-auto w-auto ${className}`} alt='Warung Web logo Icon' src={"/Logo-Black.webp"} />
}

Logo.LogoBlack = LogoBlack
Logo.LogoWhite = LogoWhite
export default Logo