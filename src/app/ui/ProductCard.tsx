"use client"
import React from 'react'
import { Product } from '@/lib/interface/productInterface'
import { FormatRupiah } from '@arismun/format-rupiah'
import { Button, Card, CardBody, CardFooter, Image, Stack, useToast } from '@chakra-ui/react'
import { Check } from 'react-feather'
import { GroceryStore } from '@/lib/store/groceryStore'

export default function ProductCard({ productData, button }: { productData: Product, button?: React.ReactNode }) {
    const { name, price, image, status, stock } = productData
    return (
        <Card className='h-80 sm:h-96 w-44 sm:w-60 bg-white text-black'>
            <CardBody padding={"5px"}>
                <CardImage data={{ status, name, image, stock }} />
                <Stack className='mt-3 ml-3'>
                    <h1 className='font-bold text-sm sm:text-lg'>{name}</h1>
                    <h3 className='text-xs sm:text-base'>
                        <FormatRupiah value={price} />
                    </h3>
                </Stack>
            </CardBody>
            <CardFooter className='w-full h-fit flex justify-center items-center'>
                {button}
            </CardFooter>
        </Card>
    )
}

type CardImageProps = {
    status: boolean
    name: string
    image: string
    stock: number
}

function CardImage({ data }: { data: CardImageProps }) {
    const { status, name, image, stock } = data
    return (
        <>
            {
                !status || stock === 0 ?
                    <Image
                        src={image}
                        alt={name}
                        className="w-full aspect-square rounded-lg grayscale"
                    />
                    :
                    <Image
                        src={image}
                        alt={name}
                        className="w-full aspect-square rounded-lg"
                    />
            }
        </>
    )
}

function CashierCardButton({ status, product }: { status: boolean, product: Product }) {
    const { setGroceryList } = GroceryStore()
    const toast = useToast()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setGroceryList({ ...product, quantity: 1 })
        toast({
            title: "Added to Order List!",
            status: "success",
            duration: 1500,
            icon: <Check />,
            position: "top"
        })
    }
    return (
        <>
            {
                !status || product.stock === 0 ?
                    <Button
                        disabled
                        aria-label='Sold Out Button'
                        className='w-5/6 h-12 flex gap-5 text-sm bg-gray-300 text-black rounded-md cursor-not-allowed'
                    >
                        Sold Out!
                    </Button>
                    :
                    <Button
                        onClick={(e) => handleClick(e)}
                        aria-label='Add to Cart Button'
                        backgroundColor={"#000"}
                        color={"#fff"}
                        transitionDuration={"300ms"}
                        fontSize={"0.8em"}
                        className='w-2/3 sm:w-5/6 h-12 flex gap-5 rounded-md hover:bg-gray-300 hover:text-black'
                    >
                        Order
                    </Button>
            }
        </>
    )
}

function OwnerCardButton() {
    return (
        <div className='w-full flex justify-around'>
            <Button
                aria-label='Edit Menu Button'
                className='bg-blue-500 text-white hover:bg-blue-400'
            >
                Reset
            </Button>
            <Button
                aria-label='Edit Menu Button'
                className='bg-blue-500 text-white hover:bg-blue-400'
            >
                Edit
            </Button>
        </div>
    )
}

ProductCard.OwnerCardButton = OwnerCardButton
ProductCard.CashierCardButton = CashierCardButton