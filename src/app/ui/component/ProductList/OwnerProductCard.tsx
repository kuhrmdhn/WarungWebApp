import { Product } from '@/types/productInterface'
import { Button, Card, CardBody, CardFooter, Table, Tbody, Td, Tr, useToast } from '@chakra-ui/react'
import React from 'react'
import ProductCardImage from './ProductCardImage'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AlertCircle, Check } from 'react-feather'
import { Brush, RestartAlt } from '@mui/icons-material'
import { productRouter } from '@/lib/database/productRouter'

export default function OwnerProductCard({ productData }: { productData: Product }) {
    const { name, price, status, stock, sold } = productData
    const searchParams = useSearchParams()
    const toast = useToast()
    const router = useRouter()
    const pathname = usePathname()
    const query = new URLSearchParams(searchParams)
    const { updateProductData } = productRouter
    const { id } = productData

    const resetSoldProduct = () => {
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
        updateProductData(id, data)
        toast({
            title: `Success Reset ${data.name} Sold Data!`,
            status: "success",
            duration: 1500,
            icon: <Check />,
            position: "top"
        })
    }
    const editProduct = () => {
        query.set("productId", `${productData.id}`)
        query.delete("category")
        query.delete("name")

        router.push(`${pathname}/edit-product?${query.toString()}`)
    }

    const buttonData = [
        {
            onClick: resetSoldProduct,
            ariaLabel: 'Reset Sold Menu Button',
            title: 'Reset Sold Menu',
            colorScheme: 'red',
            children: <RestartAlt className="text-xs lg:text-xl" />
        },
        {
            onClick: editProduct,
            ariaLabel: 'Edit Menu Button',
            title: 'Edit Menu',
            colorScheme: "blue",
            children: <Brush className="text-xs lg:text-xl" />
        }
    ]

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
        <Card className="h-80 sm:h-96 w-[95%] lg:w-[430px] bg-white text-black flex justify-center items-center">
            <CardBody className="w-full h-full flex pl-3 overflow-auto overflow-scrollbar-hide">
                <div className="flex flex-col sm:flex-row h-max items-center lg:items-start">
                    <div className="h-1/3 w-2/3 lg:w-2/5">
                        <ProductCardImage productData={productData} />
                    </div>
                    <Table className='h-1/2 sm:min-h-[280px] lg:h-max w-full flex sm:justify-around'>
                        <Tbody className="h-full w-full sm:w-11/12 text-2xs sm:text-sm">
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
            <CardFooter className="w-full flex justify-end items-center gap-3 h-1/6">
                {
                    buttonData.map((button, index: number) => (
                        <Button
                            key={index}
                            onClick={button.onClick}
                            aria-label={button.ariaLabel}
                            title={button.title}
                            colorScheme={button.colorScheme}
                            className="h-6 lg:h-10 w-6 lg:w-16"
                        >
                            {button.children}
                        </Button>
                    ))
                }
            </CardFooter>
        </Card>
    )
}