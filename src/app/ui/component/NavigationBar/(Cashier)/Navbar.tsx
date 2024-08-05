import React from 'react'
import LogoBlack from '../../Logo/LogoBlack'
import SearchBar from '../../../elements/SearchBar'
import GroceryListButton from '../../GroceryList/GroceryListButton'
import ProductCategoryTabs from '../../ProductCategoryTab/ProductCategoryTabs'

export default function Navbar() {
    return (
        <header className='h-[18svh] lg:h-[25svh] w-full py-2 bg-white'>
            <section className='w-full h-1/2 flex justify-around sm:justify-evenly items-center'>
                <div className='w-fit sm:w-1/3 h-full flex justify-start sm:justify-center items-center'>
                    <LogoBlack />
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
