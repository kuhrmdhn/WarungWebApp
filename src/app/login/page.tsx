"use client"
import { UserStore } from '@/lib/store/userStore'
import { Button, FormLabel, Input, InputGroup } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
  const [formData, setFormData] = useState({username: "", password: ""})
  const { getUser } = UserStore()
  const { push } = useRouter()

  async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    alert("click")
    const user = await getUser(formData.username, formData.password)
    if(user.role === "OWNER") {
      push("/owner")
    } else if(user.role === "CASHIER") {
      push("/cashier")
    }
  }


  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value

    setFormData((current) => ({...current, [name]: value}))
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
