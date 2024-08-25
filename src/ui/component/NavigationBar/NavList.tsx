import { motion } from 'framer-motion'
import NavItem from './NavItem'
import Image from 'next/image'
import { NavigationItem } from '@/types/NavigationItemInterface'

type NavListProps = {
    sidebarOpen: boolean,
    navItems: NavigationItem[],
    children?: React.ReactNode
}

export default function NavList({ sidebarOpen, navItems, children }: NavListProps) {
    const variants = {
        open: {
            x: 0,
            width: "240px",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                width: { duration: 0.2 }
            }
        },
        closed: {
            x: -1000,
            width: "0px",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                width: { duration: 0.2 }
            }
        }
    }

    return (
        <motion.nav
            variants={variants}
            initial="closed"
            animate={sidebarOpen ? "open" : "closed"}
            className='h-full fixed z-20 left-0 top-0 bg-white flex flex-col pt-20 px-4 gap-7 font-bold text-black shadow-2xl shadow-gray-400 overflow-auto overflow-scrollbar-small'
        >
            <ul className='h-5/6 flex flex-col items-center gap-2'>
                {
                    navItems.map((nav: NavigationItem, index: number) => (
                        <NavItem key={index}>
                            <a href={nav.href} className="flex px-5 items-center gap-3">
                                <Image width={20} height={20} alt="User Account Icon" src={nav.icon} className="h-full" />
                                {nav.title}
                            </a>
                        </NavItem>
                    ))
                }
                {children}
            </ul>
        </motion.nav>
    )
}