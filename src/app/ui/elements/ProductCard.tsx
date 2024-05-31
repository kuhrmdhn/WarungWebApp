"use client"
import React from 'react'
import { Product } from '@/lib/interface/productInterface'
import { FormatRupiah } from '@arismun/format-rupiah'
import { Button, Card, CardBody, CardFooter, Image, Stack, Table, Tbody, Td, Tr, useToast } from '@chakra-ui/react'
import { AlertCircle, Check } from 'react-feather'
import { GroceryStore } from '@/lib/store/groceryStore'
import { ProductsStore } from '@/lib/store/productsStore'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type productCardProps = {
    children: React.ReactNode
}
export default function ProductCard({ children }: productCardProps) {
    return (
        <div>
            {children}
        </div>
    )
}


type cardProps = {
    productData: Product
    children?: React.ReactNode
}
function CardImage({ productData }: cardProps) {
    const { status, name, image, stock } = productData
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


function CashierProductCard({ productData }: cardProps) {
    const { name, price, status, stock } = productData
    const { setGroceryList } = GroceryStore()
    const toast = useToast()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setGroceryList({ ...productData, quantity: 1 })
        toast({
            title: "Added to Order List!",
            status: "success",
            duration: 1500,
            icon: <Check />,
            position: "top"
        })
    }
    return (
        <Card className='h-80 sm:h-96 w-44 sm:w-60 bg-white text-black'>
            <CardBody padding={"5px"}>
                <CardImage productData={productData} />
                <Stack className='mt-3 ml-3'>
                    <h1 className='font-bold text-sm sm:text-lg'>{name}</h1>
                    <h3 className='text-xs sm:text-base'>
                        <FormatRupiah value={price} />
                    </h3>
                </Stack>
            </CardBody>
            <CardFooter className='w-full h-fit flex justify-center items-center'>
                {
                    !status || stock === 0 ?
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
            </CardFooter>
        </Card>
    )
}

function OwnerProductCard({ productData, children }: cardProps) {
    const { name, price, status, stock, sold } = productData

    const tableData = [
        {
            name: "Name",
            value: name
        },
        {
            name: "Price",
            value: price
        },
        {
            name: "Status",
            value: status ? "Ready" : "Not Ready"
        },
        {
            name: "Stock",
            value: stock
        },
        {
            name: "Sold",
            value: sold
        }
    ]
    return (
        <Card className='h-80 w-44 sm:w-[430px] bg-white text-black'>
            <CardBody className='w-full h-3/5 flex flex-col'>
                <div className="flex h-max">
                    <div className="w-2/5">
                        <CardImage productData={productData} />
                    </div>
                    <Table className='flex justify-around'>
                        <Tbody className="overflow-y-auto max-h-[75%] w-11/12 overflow-scrollbar-small">
                            {
                                tableData.map((data, index: number) => (
                                    <Tr key={index}>
                                        <Td>{data.name}: {data.value}</Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </div>
            </CardBody>
            {children}
        </Card>
    )
}

function OwnerCardFooter({ productData }: cardProps) {
    const searchParams = useSearchParams()
    const toast = useToast()
    const router = useRouter()
    const pathname = usePathname()
    const query = new URLSearchParams(searchParams)
    const { updateProduct } = ProductsStore()
    const { id } = productData

    const resetSoldProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (productData.sold === 0) {
            toast({
                title: "Product Not Sale Yet!",
                status: "warning",
                duration: 1500,
                icon: <AlertCircle />,
                position: "top"
            })
            return
        }
        const data = { ...productData, sold: 0 }
        updateProduct(id, data)
        toast({
            title: `Success Reset ${data.name} Sold Data!`,
            status: "success",
            duration: 1500,
            icon: <Check />,
            position: "top"
        })
    }
    const editProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        query.set("productId", `${productData.id}`)
        query.delete("category")
        query.delete("name")

        router.push(`${pathname}/edit-product?${query.toString()}`)
    }

    return (
        <CardFooter className="w-full flex justify-end items-center gap-3 mt-5">
            <Button
                onClick={(e) => resetSoldProduct(e)}
                aria-label='Edit Menu Button'
                colorScheme="red"
            >
                Reset Sold Data
            </Button>
            <Button
                onClick={(e) => editProduct(e)}
                aria-label='Edit Menu Button'
                colorScheme="blue"
            >
                Edit Menu Data
            </Button>
        </CardFooter>
    )
}

ProductCard.CashierProductCard = CashierProductCard
ProductCard.OwnerProductCard = OwnerProductCard
ProductCard.OwnerCardFooter = OwnerCardFooter