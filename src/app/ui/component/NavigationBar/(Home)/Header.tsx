import React from 'react'
import LogoBlack from '../../Logo/LogoBlack'
import { Button } from '@chakra-ui/react'

export default function Header() {
    return (
        <header className="w-full h-16 px-16 bg-white flex justify-between items-center fixed top-0 left-0 z-50 border-b-2">
            <LogoBlack />
            <a href="/login">
                <Button colorScheme='teal'>Login</Button>
            </a>
        </header>
    )
}
