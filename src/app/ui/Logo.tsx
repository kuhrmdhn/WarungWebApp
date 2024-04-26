"use client"
import Image from 'next/image'
import React from 'react'

export default function Logo() {
    const goToHome = () => {
        window.location.href = "/"
    }
    return <Image onClick={goToHome} height={70} width={140} className='cursor-pointer' alt='Warung Web logo Icon' src={"/Logo.webp"} />
}
