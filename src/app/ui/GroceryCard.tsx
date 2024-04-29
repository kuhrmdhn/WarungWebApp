"use client"
import { GroceryParam } from '@/lib/interface/groceryInterface'
import { GroceryStore } from '@/lib/store/groceryStore'
import { Card, CardBody, CardFooter, CardHeader, IconButton, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MinusCircle, PlusCircle, Trash } from 'react-feather'

export default function GroceryCard({ grocery }: { grocery: GroceryParam }) {
    const [inputValue, setInputValue] = useState<number>(grocery.quantity)
    const { removeGrocery, updateSelectedGrocery } = GroceryStore()
    const toast = useToast()

    const updateQuantity = async (newQuantity: number) => {
        const data = { ...grocery, quantity: newQuantity }
        setInputValue(newQuantity)
        updateSelectedGrocery(grocery.id, data)
    }
    const incrementQuantity = () => {
        let newQuantity = grocery.quantity + 1
        if (newQuantity > grocery.stock) {
            updateQuantity(grocery.stock)
            toast({
                title: `Maximum order quantity, due to remaining stock ${grocery.stock}`,
                duration: 1500,
                position: "top",
                status: "warning"
            })
            return
        }
        updateQuantity(newQuantity)
    }
    const decrementQuantity = () => {
        let newQuantity = grocery.quantity - 1
        if (newQuantity === 0) {
            removeGrocery(grocery.id)
        } else {
            updateQuantity(newQuantity)
        }
    }
    const inputQuantity = (input: React.ChangeEvent<HTMLInputElement>) => {
        let newQuantity = Number(input.target.value)
        if (newQuantity > grocery.stock) {
            setInputValue(grocery.stock)
            updateQuantity(grocery.stock)
            toast({
                title: `Maximum order quantity, due to remaining stock ${grocery.stock}`,
                duration: 1500,
                position: "top",
                status: "warning"
            })
        } else if (newQuantity === 0) {
            setInputValue(1)
            updateQuantity(1)
        } else {
            setInputValue(newQuantity)
            updateQuantity(newQuantity)
        }
    }

    return (
        <Card className='w-full h-24 border-2 border-red-300' direction={{ base: "row" }}>
            <CardHeader className='flex justify-center items-center gap-2'>
                <IconButton
                    onClick={decrementQuantity}
                    aria-label='minus button'
                    variant={"ghost"}
                    size={"sm"}
                    icon={<MinusCircle />}
                    colorScheme='red'
                />
                <Input
                    onChange={(event) => inputQuantity(event)}
                    width={"52px"}
                    padding={"0 4px"}
                    type='number'
                    min={1}
                    value={inputValue}
                />
                <IconButton
                    onClick={incrementQuantity}
                    aria-label='plus button'
                    variant={"ghost"}
                    size={"sm"}
                    icon={<PlusCircle />}
                    colorScheme='green'
                />
            </CardHeader>
            <CardBody className="flex flex-col justify-center items-center">
                <h1>{grocery.name}</h1>
                <h2>{grocery.price} x {grocery.quantity}</h2>
            </CardBody>
            <CardFooter className="flex justify-center items-center">
                <IconButton
                    onClick={() => removeGrocery(grocery.id)}
                    variant={"ghost"}
                    size={"sm"}
                    aria-label='delete button'
                    icon={<Trash />}
                    colorScheme='pink'
                />
            </CardFooter>
        </Card>
    )
}
