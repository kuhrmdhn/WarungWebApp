import React from 'react'
import SearchBar from '../../elements/SearchBar'
import GroceryListButton from '../GroceryList/GroceryListButton'
import ProductCategoryTabs from '../ProductCategoryTab/ProductCategoryTabs'
import Logo from '../Logo/Logo'

export default function Navbar() {
    return (
        <header className='h-[18svh] lg:h-1/3 w-full pt-2 bg-white mb-4'>
            <section className='w-full h-1/2 flex justify-around sm:justify-evenly items-center'>
                <div className='w-fit sm:w-1/3 h-full flex justify-start sm:justify-center items-center'>
                    <Logo />
                </div>
                <div className='w-2/3 sm:w-1/2 lg:w-1/3 flex gap-2 sm:gap-3'>
                    <SearchBar />
                    <GroceryListButton />
                </div>
            </section>
            <section className='w-fit sm:w-full h-1/2 pl-7 flex items-end sm:items-center'>
                <ProductCategoryTabs />
            </section>
        </header>
    )
}
