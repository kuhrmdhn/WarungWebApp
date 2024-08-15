import Clicked from '@/ui/framer-motion/Animation/Clicked'
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
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-gray-900">
            <Image height={100} width={200} className="rounded-t-lg w-full aspect-video" src={icon} alt={name} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
                <p className="mb-3 font-normal">{description}</p>
                <Clicked>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Try it
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </Clicked>
            </div>
        </div>
    )
}
