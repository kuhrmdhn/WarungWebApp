"use client"
import { Product } from '@/types/productInterface'
import { Card, CardBody } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ProductCardImage from './ProductCardImage'

export default function OwnerProductCard({ productData }: { productData: Product }) {
    const { name, stock, sold, id } = productData
    const pathname = usePathname()
    const productUrl = `${pathname}/product-detail/${id}`

    return (
        <Card className="h-80 sm:h-72 w-[95%] lg:w-60 bg-white text-black flex justify-center items-center">
            <CardBody className="w-full h-full flex flex-col justify-between items-center">
                <section className="h-3/5">
                    <ProductCardImage productData={productData} />
                </section>
                <section className='h-1/4 w-full flex flex-col justify-center items-center'>
                    <Link className="font-bold hover:underline underline-offset-2" href={productUrl}>{name}</Link>
                    <div className="h-1/2 w-full flex justify-around items-end">
                        <h2>Sold: <span className="font-semibold">{sold}</span></h2>
                        <h2>Stock: <span className="font-semibold">{stock}</span></h2>
                    </div>
                </section>
            </CardBody>
        </Card>
    )
}