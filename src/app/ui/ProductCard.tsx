import React from 'react'
import { Product } from '@/lib/interface/productInterface'
import { FormatRupiah } from '@arismun/format-rupiah'
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack } from '@chakra-ui/react'
import { ShoppingCart, Slash } from 'react-feather'

export default function ProductCard({ productData }: { productData: Product }) {
    const { name, price, image, status } = productData
    return (
        <Card className='h-96 w-60 bg-white text-black rounded-lg'>
            <CardBody>
                <CardImage data={{ status, name, image }} />
                <Stack className='mt-3 ml-3'>
                    <Heading className='font-bold' fontSize={"1.1em"}>{name}</Heading>
                    <FormatRupiah value={price} />
                </Stack>
            </CardBody>
            <CardFooter className='w-full h-fit flex justify-center items-center'>
                <CardButton status={status} />
            </CardFooter>
        </Card>
    )
}

type CardImageProps = {
    status: boolean
    name: string
    image: string
}

function CardImage({ data }: { data: CardImageProps }) {
    const { status, name, image } = data
    return (
        <>
            {
                status ?
                    <Image
                        src={image}
                        alt={name}
                        className="w-full aspect-square rounded-lg"
                    />
                    :
                    <Image
                        src={image}
                        alt={name}
                        className="w-full aspect-square rounded-lg grayscale"
                    />
            }
        </>
    )
}

function CardButton({ status }: { status: boolean }) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        alert("Add to Cart")
    }
    return (
        <>
            {
                status ?
                    <Button
                        onClick={(e) => handleClick(e)}
                        aria-label='Add to Cart Button'
                        backgroundColor={"#000"}
                        color={"#fff"}
                        transitionDuration={"300ms"}
                        fontSize={"0.8rem"}
                        className='w-5/6 h-12 flex gap-5 rounded-md hover:bg-gray-300 hover:text-black'
                    >
                        <ShoppingCart />
                        Order
                    </Button>
                    :
                    <Button
                        disabled
                        aria-label='Sold Out Button'
                        className='w-5/6 h-12 flex gap-5 text-sm bg-gray-300 text-black rounded-md cursor-not-allowed'
                    >
                        <Slash />
                        Sold Out!
                    </Button>
            }
        </>
    )
}