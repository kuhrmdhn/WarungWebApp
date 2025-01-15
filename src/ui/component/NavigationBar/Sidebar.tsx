"use client"
import React, { useCallback, useEffect, useState } from "react"
import NavList from "./NavList"
import NavItem from "./NavItem"
import LogOutButton from "../../elements/LogOutButton"
import ToggleButton from "./ToggleButton"
import Logo from "../Logo/Logo"
import { User } from "react-feather"
import { Dashboard, FolderShared, OutdoorGrill, PersonAdd, PointOfSale, PostAdd, ShoppingBag } from "@mui/icons-material"

const navLink = [
    {
        title: "Owner Profile",
        href: "owner/profile",
        icon: <User/>
    },
    {
        title: "Dashboard",
        href: "/owner",
        icon: <Dashboard/>
    },
    {
        title: "All Products",
        href: "/owner/all-products",
        icon: <ShoppingBag/>
    },
    {
        title: "Manage User",
        href: "/owner/manage-user",
        icon: <FolderShared/>
    },
    {
        title: "New Product",
        href: "/owner/new-product",
        icon: <PostAdd />
    },
    {
        title: "New User",
        href: "/owner/new-user",
        icon: <PersonAdd />
    },
    {
        title: "Cashier App",
        href: "/cashier",
        icon: <PointOfSale />
    },
    {
        title: "Chef App",
        href: "/chef",
        icon: <OutdoorGrill />
    },
]

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const handleSidebarToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        setSidebarOpen(state => !state)
    }

    const handleBodyClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('.toggle-button')) {
            setSidebarOpen(false)
        }
    }, [])

    useEffect(() => {
        const body = document.body
        body.addEventListener('click', handleBodyClick)
        return () => {
            body.removeEventListener('click', handleBodyClick)
        }
    }, [handleBodyClick])

    return (
        <header className="h-24 w-full z-50 fixed bg-white flex justify-center items-center">
            <ToggleButton
                toggleMenu={handleSidebarToggle}
                menuOpen={sidebarOpen}
            />
            <Logo />
            <NavList sidebarOpen={sidebarOpen} navItems={navLink} >
                <NavItem>
                    <LogOutButton />
                </NavItem>
            </NavList>
        </header>
    )
}
