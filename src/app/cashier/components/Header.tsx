import CategoryTabs from '@/app/ui/CategoryTabs'
import GroceryListButton from '@/app/ui/GroceryListButton'
import Logo from '@/app/ui/Logo'
import SearchBar from '@/app/ui/SearchBar'
import React from 'react'

export default function Header() {
    return (
        <header className='h-[18svh] lg:h-[25svh] w-full pb-2 bg-white shadow-md shadow-gray-300'>
            <section className='w-full h-1/2 flex justify-around sm:justify-evenly items-center'>
                <div className='w-fit sm:w-1/3 h-full flex justify-start sm:justify-center items-center'>
                    <Logo>
                        <Logo.LogoBlack/>
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
