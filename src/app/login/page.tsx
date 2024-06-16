"use client"
import { Button, FormLabel, Input, InputGroup } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginPage() {
  const { push } = useRouter()
  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    document.cookie = "loginStatus=true; path=/"
    push("/owner")
  }

  return (
    <section className="h-[100svh] w-full flex justify-around items-center">
      <Image src={"/auth-icon.svg"} alt="Authentication Image" height={10} width={20} className='w-1/5 aspect-square' />
      <form className="w-1/3 h-full flex justify-center items-center flex-col gap-3">
        <InputGroup className="flex justify-center items-center gap-5">
          <FormLabel className='w-1/2'>
            Username
          </FormLabel>
          <Input type="text" placeholder='John Doe' />
        </InputGroup>
        <InputGroup className="flex justify-center items-center gap-5">
          <FormLabel className='w-1/2'>
            Password
          </FormLabel>
          <Input type='password' placeholder='johndoe' />
        </InputGroup>
        <Button onClick={(e) => handleLogin(e)} type="submit" colorScheme='blue' className="w-1/4 self-end">Submit</Button>
      </form>
    </section>
  )
}
