"use client"
import { Button } from '@chakra-ui/react'
import { AccountCircle } from '@mui/icons-material'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AuthButton() {
  const {status} = useSession()
  return (
    <div>
      {
        status == "authenticated" ? <Link href={"/profile"}><AccountCircle/></Link> : <Button onClick={() => signIn()}>Sign In</Button>
      }
    </div>
  )
}
