import React from 'react'
import Logo from '../Logo/Logo'
import SearchOrder from '../SearchBar/SearchOrder'

export default function ChefHeader() {
  return (
    <header className='w-full h-24 bg-white flex justify-evenly items-center border-b-2 fixed top-0 z-50'>
      <Logo />
      <div className='w-1/2 lg:w-1/4'>
        <SearchOrder />
      </div>
    </header>
  )
}
