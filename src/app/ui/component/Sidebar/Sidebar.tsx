import React, { useCallback, useEffect, useState } from "react"
import Logo from "../../elements/Logo"
import NavList from "./NavList"
import NavItem from "./NavItem"
import LogOutButton from "../../elements/LogOutButton"
import ToggleButton from "./ToggleButton"

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
    function handleSidebar() {
        setSidebarOpen(state => !state)
    }

    const handleBodyClick = useCallback(() => {
        if (sidebarOpen) {
            setSidebarOpen(false);
        }
    }, [sidebarOpen])

    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick);
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        }
    }, [sidebarOpen, handleBodyClick])

    return (
        <header className="h-24 w-full z-50 fixed bg-white flex justify-center items-center">
            <ToggleButton
                toggleMenu={handleSidebar}
                menuOpen={sidebarOpen}
            />
            <Logo>
                <Logo.LogoBlack />
            </Logo>
            <NavList sidebarOpen={sidebarOpen} navItems={navLink}>
                <NavItem>
                    <LogOutButton />
                </NavItem>
            </NavList>
        </header>
    )
}