import React, { useCallback, useEffect, useState } from "react"
import NavList from "./NavList"
import NavItem from "./NavItem"
import LogOutButton from "../../elements/LogOutButton"
import ToggleButton from "./ToggleButton"
import LogoBlack from "../Logo/LogoBlack"

const navLink = [
    {
        title: "Profile",
        href: "/profile",
        icon: "/user-icon.svg"
    },
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
            <LogoBlack />
            <NavList sidebarOpen={sidebarOpen} navItems={navLink}>
                <NavItem>
                    <LogOutButton />
                </NavItem>
            </NavList>
        </header>
    )
}
