"use client"
import { userRouter } from '@/lib/database/userRouter'
import { User, USER_ROLE } from '@/types/userInterface'
import { Button, FormControl, FormLabel, Input, InputGroup, Select, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function UserForm() {
  const toast = useToast()
  const { addNewUser } = userRouter
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userData, setUserData] = useState<User>({
    id: Date.now().toString(),
    grocery_list: [],
    password: "",
    username: "",
    role: USER_ROLE.CASHIER
  })
  const inputData = [
    {
      name: "username",
      label: "Username",
      type: "text",
      value: userData.username
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: userData.password
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      value: confirmPassword
    }
  ]

  const userRoleOptions = [
    {
      value: USER_ROLE.CASHIER,
      text: "Cashier"
    },
    {
      value: USER_ROLE.CHEF,
      text: "Chef"
    },
    {
      value: USER_ROLE.OWNER,
      text: "Owner"
    },
  ]

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    e.preventDefault()
    const { name, value } = e.target
    if (name === "confirmPassword") {
      setConfirmPassword(value)
    } else {
      setUserData((state) => ({ ...state, [name]: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLButtonElement | HTMLFormElement>) {
    e.preventDefault()
    const { username, password } = userData
    if (username == "" || password == "") {
      toast({
        title: "Username or password can't empty",
        status: "warning",
        isClosable: true,
        duration: 1500,
        position: "top"
      })
      return
    }
    if (password !== confirmPassword) {
      toast({
        title: "Password not match",
        status: "warning",
        isClosable: true,
        duration: 1500,
        position: "top"
      })
      return
    }
    try {
      await addNewUser(userData)
    } catch (error) {
      toast({
        title: error as React.ReactNode,
        status: "warning",
        isClosable: true,
        duration: 1500,
        position: "top"
      })
    }
  }

  return (
    <form className="h-screen sm:min-h-[50svh] w-11/12 sm:w-3/5 flex flex-col gap-7" onSubmit={(e) => handleSubmit(e)}>
      {
        inputData.map((input, index: number) => (
          <InputGroup key={index} className="flex gap-7 items-center">
            <FormLabel
              htmlFor={input.name}
              className="w-32 lg:w-64 text-xs lg:text-base"
            >
              {input.label}
            </FormLabel>
            <Input
              required
              id={input.name}
              name={input.name}
              value={input.value}
              type={input.type}
              onChange={(e) => handleOnChange(e)}
            />
          </InputGroup>
        ))
      }
      <FormControl className="flex gap-7 items-center">
        <FormLabel htmlFor="userRole" className="w-32 lg:w-64 text-xs lg:text-base">
          Role
        </FormLabel>
        <Select name="role" id="userRole" onChange={(e) => handleOnChange(e)}>
          {
            userRoleOptions.map((option, index: number) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))
          }
        </Select>
      </FormControl>
      <Button className="self-start" colorScheme='blue' type="submit">Add User</Button>
    </form>
  )
}