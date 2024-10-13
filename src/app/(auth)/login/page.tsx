"use client"
import { useState } from 'react'
import { Button, FormLabel, Input, InputGroup } from '@chakra-ui/react'
import { ArrowForward, HourglassBottom } from '@mui/icons-material'
import { useLogin } from '@/hooks/useLogin'

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const { pending, handleLogin } = useLogin(formData.username, formData.password)

  const inputData = [
    {
      label: "Username",
      type: "text",
      placeholder: "John Doe",
      value: formData.username
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      value: formData.password
    },
  ]

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value

    setFormData((current) => ({ ...current, [name]: value }))
  }

  return (
    <section className="h-[100svh] w-full flex justify-center lg:justify-end items-center bg-[url('/images/login-bg.webp')] bg-cover bg-no-repeat bg-right">
      <form className="w-full sm:w-2/3 lg:w-1/3 h-full rounded-md flex justify-center items-start flex-col gap-3 px-9 lg:px-4 lg:mr-7 text-white">
        <div className="h-1/5">
          <h1 className="text-4xl">Welcome Back!</h1>
          <p className='text-gray-100'>Make sure you login as your position</p>
        </div>
        {
          inputData.map((input, index: number) => (
            <InputGroup
              key={index}
              className="flex justify-center items-center gap-5 mb-3 lg:mb-7 h-10 lg:h-14"
            >
              <FormLabel className='w-1/2 lg:w-1/4 cursor-pointer text-sm sm:text-base' htmlFor={input.label}>
                {input.label}
              </FormLabel>
              <Input
                id={input.label}
                placeholder={input.placeholder}
                name={input.label.toLowerCase()}
                type={input.type}
                value={input.value}
                backgroundColor="transparent"
                focusBorderColor='transparent'
                className='border-0 border-b-2 border-double rounded-none focus:border-b-white text-sm sm:text-base'
                onChange={(e) => handleOnChange(e)} />
            </InputGroup>
          ))
        }
        <Button
          onClick={(e) => handleLogin(e)}
          type="submit"
          borderRadius={"30px"}
          size={"lg"}
          disabled={pending}
          className={`w-full flex justify-between items-center px-9 ${pending && "cursor-wait"} mt-5 lg:mt-0 text-sm sm:text-base`}
        >
          {pending ? "Please Wait" : "Continue"}
          {
            pending ?
              <HourglassBottom className="text-sm sm:text-base" /> :
              <ArrowForward className="text-sm sm:text-base" />
          }
        </Button>
      </form>
      <div className="fixed bottom-4 left-2 z-10 text-gray-200 text-2xs">
        Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>
    </section>
  )
}