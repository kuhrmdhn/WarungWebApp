"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import { Button, FormLabel, Input, InputGroup } from '@chakra-ui/react'
import { User } from '@/lib/interface/userInterface'
import { Session } from '@/lib/interface/token'

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const { push } = useRouter()

  async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      username: formData.username,
      password: formData.password,
    })

    if (res && res.ok) {
      const session: Session | null = await getSession() as Session | null
      if (session?.role === "OWNER") {
        push('/owner')
      } else if (session?.role === "CASHIER") {
        push('/cashier')
      }
    } else {
      console.error('Failed to sign in')
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value

    setFormData((current) => ({ ...current, [name]: value }))
  }

  return (
    <section className="h-[100svh] w-full flex justify-around items-center">
      <Image src={"/auth-icon.svg"} alt="Authentication Image" height={10} width={20} className='w-1/5 aspect-square' />
      <form className="w-1/3 h-full flex justify-center items-center flex-col gap-3">
        <InputGroup className="flex justify-center items-center gap-5">
          <FormLabel className='w-1/2'>
            Username
          </FormLabel>
          <Input type="text" placeholder='John Doe' name='username' value={formData.username} onChange={(e) => handleOnChange(e)} />
        </InputGroup>
        <InputGroup className="flex justify-center items-center gap-5">
          <FormLabel className='w-1/2'>
            Password
          </FormLabel>
          <Input type='password' placeholder='johndoe' name="password" value={formData.password} onChange={(e) => handleOnChange(e)} />
        </InputGroup>
        <Button onClick={(e) => handleLogin(e)} type="submit" colorScheme='blue' className="w-1/4 self-end">Submit</Button>
      </form>
    </section>
  )
}
