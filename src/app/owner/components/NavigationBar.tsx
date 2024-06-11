"use client"
import Logo from '@/app/ui/elements/Logo'
import React from 'react'

type NavLink = {
  title: string
  href: string
}

export default function NavigationBar() {
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
              <a
                key={index}
                href={nav.href}
                className='p-2 sm:p-3 hover:bg-owner-purple text-xs sm:text-base hover:text-white duration-300 rounded-md'
              >
                {nav.title}
              </a>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
