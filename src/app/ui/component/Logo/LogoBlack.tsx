import Image from 'next/image'
import React from 'react'

export default function LogoBlack({ className }: { className?: string }) {
    return <Image priority height={70} width={125} className={`h-8 sm:h-auto w-auto ${className}`} alt='Warung Web logo Icon' src={"/Logo-Black.webp"} />
}