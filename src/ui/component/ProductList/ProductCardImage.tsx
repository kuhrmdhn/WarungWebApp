import { Product } from '@/types/productInterface'
import Image from 'next/image'
import React from 'react'

export default function ProductCardImage({ productData }: { productData: Product }) {
    const { status, name, image } = productData
    const cardImage = image ? image : "/default-product-image.webp"
    return (
        <Image
            width={300}
            height={900}
            src={cardImage}
            alt={name}
            className={`w-full aspect-square rounded-lg ${!status && "grayscale"}`}
        />
    )
}
