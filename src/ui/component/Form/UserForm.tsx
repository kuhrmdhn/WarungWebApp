import { USER_ROLE } from '@/types/userInterface'
import { FormLabel, Input, InputGroup, Select } from '@chakra-ui/react'
import React from 'react'

export default function UserForm() {
    const inputData = [
        {
            
        }
    ]
  return (
    <form>
      <InputGroup>
        <FormLabel htmlFor='username'>
            username
        </FormLabel>
        <Input 
            id="username"
        />
      </InputGroup>
      <InputGroup>
        <FormLabel htmlFor='username'>
            password
        </FormLabel>
        <Input 
            id="username"
        />
      </InputGroup>
      <Select>
        <option>
            {USER_ROLE.OWNER}
        </option>
      </Select>
    </form>
  )
}
