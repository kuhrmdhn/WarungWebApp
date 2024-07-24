import { motion, useCycle } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import ScaleHover from "../framer-motion/ScaleHover"
import { OwnerStore } from "@/lib/store/ownerStore"
import Logo from "../elements/Logo"
import { Button } from "@chakra-ui/react"

const navLink = [
    {
        title: "Dashboard",
        href: "/owner",
        icon: "/dashboard-icon.svg"
    },
    {
        title: "All Products",
        href: "/owner/all-products",
        icon: "/product-icon.svg"
    },
    {
        title: "New Product",
        href: "/owner/new-product",
        icon: "/new-product-icon.svg"
    },
    {
        title: "Cashier App",
        href: "/cashier",
        icon: "/cashier-icon.svg"
    }
]

export default function OwnerSidebar() {
    const [sidebarOpen, toggleSidebarOpen] = useState(false)

    return (
        <header className="h-24 w-full bg-white relative flex justify-center items-center">
            <button
                type="button"
                className="absolute left-5 z-50"
                onClick={() => toggleSidebarOpen(state => !state)}
            >
                {
                    sidebarOpen ?
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        :
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                }
            </button>
            <Logo>
                <Logo.LogoBlack />
            </Logo>
            <NavList sidebarOpen={sidebarOpen} />
        </header>
    )
}


function NavList({ sidebarOpen }: { sidebarOpen: boolean }) {
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
            className='h-full fixed z-20 left-0 top-0 bg-primary-blue flex flex-col pt-20 px-4 gap-7 font-bold text-black'
        >
            <ul className='h-5/6 flex flex-col items-center gap-2'>
                <NavItem>
                    <div className="flex px-5 items-center gap-3">
                        <Image width={20} height={20} alt="User Account Icon" src={"/user-icon.svg"} className="h-full" />
                        <h1>Profile</h1>
                    </div>
                </NavItem>
                {
                    navLink.map((nav, index: number) => (
                        <li
                            key={index}
                            className="w-full"
                        >
                            <NavItem>
                                <a href={nav.href} className="flex px-5 items-center gap-3">
                                    <Image width={20} height={20} alt="User Account Icon" src={nav.icon} className="h-full" />
                                    {nav.title}
                                </a>
                            </NavItem>
                        </li>
                    ))
                }
                <NavItem>
                    <button className="flex px-5 items-center gap-3">
                        <Image width={20} height={20} alt="Log out button icon" src="/logout-icon.svg" />
                        Logout
                    </button>
                </NavItem>
            </ul>
        </motion.nav>
    )
}

function UserAccount() {
    const { ownerData } = OwnerStore()
    return (
        <ScaleHover className="flex w-full h-14 justify-center space-x-3 items-center gap-3">
            <Image width={20} height={20} alt="User Account Icon" src={"/user-icon.svg"} className="h-full" />
            <h1>Kukuh Ardi</h1>
        </ScaleHover>
    )
}


function NavItem({ children }: { children: React.ReactNode }) {
    return (
        <ScaleHover className="flex w-full h-14 justify-center space-x-3 items-center gap-3 rounded-lg hover:bg-white duration-150 cursor-pointer">
            <div className="w-full">
                {children}
            </div>
        </ScaleHover>
    )
}