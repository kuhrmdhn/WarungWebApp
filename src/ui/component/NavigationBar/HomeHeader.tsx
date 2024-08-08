import React from 'react'
import LogoBlack from '../Logo/LogoBlack'
import { Button } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import { useSession } from '@/hooks/useSession'
import Link from 'next/link'

export default async function Header() {
    const session = await useSession()
    return (
        <header className="w-full h-16 px-16 bg-white flex justify-between items-center fixed top-0 left-0 z-50 border-b-2">
            <LogoBlack />
            {
                session ? <Button onClick={() => signOut()}>Logout</Button> :
                    <Link href={"/login"} passHref>
                        <Button as={"a"} colorScheme='teal'>Login</Button>
                    </Link>
            }
        </header>
    )
}
