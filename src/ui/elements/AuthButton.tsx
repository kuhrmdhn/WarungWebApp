"use client"
import { Button } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AuthButton() {
  const {status} = useSession()
  return (
    <div>
      {
        status == "authenticated" ? <Link href={"/profile"}>Profile</Link> : <Button onClick={() => signIn()}>Sign In</Button>
      }
    </div>
  )
}
