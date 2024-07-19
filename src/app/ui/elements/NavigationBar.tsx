import React from 'react'
import LogOutButton from './LogOutButton'
import Logo from './Logo'
import SearchBar from './SearchBar'
import GroceryListButton from './GroceryListButton'
import CategoryTabs from './CategoryTabs'

type NavLink = {
    title: string
    href: string
}

export default function NavigationBar({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex justify-center items-center'>
            {children}
            <LogOutButton/>
        </div>
    )
}

function CashierNavbar() {
  return (
      <header className='h-[18svh] lg:h-[25svh] w-full pb-2 bg-white shadow-md shadow-gray-300'>
          <section className='w-full h-1/2 flex justify-around sm:justify-evenly items-center'>
              <div className='w-fit sm:w-1/3 h-full flex justify-start sm:justify-center items-center'>
                  <Logo>
                      <Logo.LogoBlack />
                  </Logo>
              </div>
              <div className='w-2/3 sm:w-1/2 lg:w-1/3 flex gap-2 sm:gap-3'>
                  <SearchBar />
                  <GroceryListButton />
              </div>
          </section>
          <section className='w-fit sm:w-full h-1/2 pl-7 flex items-end sm:items-center'>
              <CategoryTabs />
          </section>
      </header>

  )
}


function OwnerNavbar() {
    const navLink: NavLink[] = [
        {
            title: "Dashboard",
            href: "/owner"
        },
        {
            title: "All Products",
            href: "/owner/all-products"
        },
        {
            title: "New Product",
            href: "/owner/new-product"
        }
    ]

    return (
        <header className='w-full h-[15svh] sm:h-[13svh] bg-white flex flex-col sm:flex-row items-center justify-between mb-3'>
            <section className='w-full sm:w-2/5 h-1/2 sm:h-full flex justify-center items-center'>
                <Logo>
                    <Logo.LogoBlack />
                </Logo>
            </section>
            <nav className='w-full lg:w-1/2 h-1/2 sm:h-full'>
                <ul className='text-gray-600 w-full sm:w-2/3 h-full flex justify-evenly items-center'>
                    {
                        navLink.map((nav: NavLink, index: number) => (
                            <li key={index}>
                                <a
                                    href={nav.href}
                                    className='p-2 sm:p-3 hover:bg-owner-purple text-xs sm:text-base hover:text-white duration-300 rounded-md'
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

NavigationBar.OwnerNavbar = OwnerNavbar
NavigationBar.CashierNavbar = CashierNavbar