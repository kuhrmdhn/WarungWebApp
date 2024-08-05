import React from 'react'
import LogoBlack from '../../Logo/LogoBlack'

export default function Header() {
  return (
    <header className='w-full h-24 bg-white flex justify-center items-center border-b-2 fixed top-0 z-50'>
        <LogoBlack/>
    </header>
  )
}
