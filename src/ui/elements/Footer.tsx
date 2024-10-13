import { NavigationItem } from '@/types/NavigationItemInterface'
import React from 'react'
import ScaleHover from '../framer-motion/Animation/ScaleHover'
import Logo from '../component/Logo/Logo'
import Link from 'next/link'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { User } from 'react-feather'

const contactList: NavigationItem[] = [
    {
        title: "Github",
        href: "https://github.com/kuhrmdhn",
        icon: <GitHub/>
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/kukuh-ardi-ramadhan",
        icon: <LinkedIn/>
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/kuh.rmdhn",
        icon: <Instagram/>
    },
    {
        title: "Personal Web",
        href: "https://kuhrmdhn.vercel.app",
        icon: <User/>
    }
]


export default function Footer() {
    return (
        <footer className="w-full h-32 flex flex-col justify-center items-center gap-5 bg-white">
            <Logo />
            <div className="flex items-center gap-5">
                {
                    contactList.map((contact: NavigationItem, index: number) => (
                        <ScaleHover key={index} className="w-fit h-fit">
                            <Link href={contact.href} target='_blank'>
                                {contact.icon}
                            </Link>
                        </ScaleHover>
                    ))
                }
            </div>
        </footer>
    )
}
