"use client"
import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return <Image height={70} width={140} className='cursor-pointer' alt='Warung Web logo Icon' src={"/Logo.webp"} />
}
