"use client"
import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    image: string
    description: string
    url: string
    buttonText: string
    className?: string
}

export default function AppList({ title, image, description, url, buttonText, className }: Props) {
    return (
        <section className={`h-max lg:h-[50svh] w-full px-10 flex justify-evenly flex-col ${className}`}>
            <div className="w-full lg:w-2/5 min-h-[50svh] h-full flex justify-center items-center">
                <Image src={image} alt={title} width={3840} height={2160} className='aspect-auto w-full object-cover object-center' />
            </div>
            <div className='w-full lg:w-1/2 h-full text-justify flex flex-col justify-around gap-4'>
                <h1 className="font-bold text-2xl">{title}</h1>
                <p>{description}</p>
                <Link href={url}>
                    <Button colorScheme='blue' variant={"link"}>{buttonText}</Button>
                </Link>
            </div>
        </section>
    )
}
