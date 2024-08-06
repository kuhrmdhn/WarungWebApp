import { ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import React from 'react'

export interface PreviewCardProps {
    icon: string
    name: string
    link: string
    description: string
}

export default function PreviewCard({ icon, name, link, description }: PreviewCardProps) {
    return (
        <section className="w-96 h-80 bg-white flex flex-col items-center border rounded-xl">
            <div className="h-1/3 w-full">
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>{description}</p>
            </div>
            <div className='h-1/2 w-11/12 flex justify-center items-center'>
                <Image src={icon} alt="" height={100} width={200} className="w-full aspect-video rounded-lg" />
            </div>
            <div className="h-1/3 w-full flex justify-end items-center pr-7">
                <a href={link} target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center'>
                    Preview
                    <ExternalLinkIcon />
                </a>
            </div>
        </section>
    )
}
