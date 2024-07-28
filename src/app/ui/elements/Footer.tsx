import { NavigationItem } from '@/types/NavigationItemInterface'
import React from 'react'
import Image from 'next/image'
import ScaleHover from '../framer-motion/ScaleHover'

const contactList: NavigationItem[] = [
    {
        title: "Github",
        href: "https://github.com/kuhrmdhn",
        icon: "/github-icon.svg"
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/kukuh-ardi-ramadhan",
        icon: "/linkedin-icon.svg"
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/kuh.rmdhn",
        icon: "/instagram-icon.svg"
    },
    {
        title: "Personal Web",
        href: "https://kuhrmdhn.vercel.app",
        icon: "/user-circle-icon.svg"
    }
]


export default function Footer() {
    return (
        <footer className="w-full h-32 flex flex-col justify-center items-center gap-5 mt-7">
            <h1>Get In Touch</h1>
            <div className="flex items-center gap-5">
                {
                    contactList.map((contact: NavigationItem, index: number) => (
                        <ScaleHover key={index} className="w-fit h-fit">
                            <a href={contact.href} target='_blank'>
                                <Image src={contact.icon} height={20} width={20} alt={contact.title} />
                            </a>
                        </ScaleHover>
                    ))
                }
            </div>
        </footer>
    )
}
