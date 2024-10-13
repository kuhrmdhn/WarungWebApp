import { Product } from '@/types/productInterface'
import Image from 'next/image'
import React from 'react'

export default function ProductCardImage({ productData }: { productData: Product }) {
    const { status, name, image } = productData
    const cardImage = image ? image : "/images/default-product-image.webp"
    return (
        <Image
            width={300}
            height={900}
            src={cardImage}
            alt={name}
            className={`h-full w-full aspect-square rounded-lg object-cover object-center ${!status && "grayscale"}`}
        />
    )
}
