import React from 'react'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <header className='w-full h-24 bg-white flex justify-center items-center border-b-2 fixed top-0 z-50'>
        <Logo/>
    </header>
  )
}
