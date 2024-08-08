"use client"
import { productRouter } from '@/lib/database/productRouter'
import { Product, ProductCategory } from '@/types/productInterface'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ProductForm from './ProductForm'
import { bucketRouter } from '@/lib/database/bucketRouter'

export default function AddProduct() {
    const router = useRouter()
    const { addNewProduct } = productRouter

    const productDataByQuery: Product = {
        id: Date.now(),
        name: "",
        category: ProductCategory.FOOD,
        image: "",
        price: 0,
        sold: 0,
        status: true,
        stock: 0
    }
    const [formState, setFormState] = useState<Product>(productDataByQuery)
    const [productImageFile, setProductImageFile] = useState<File>()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name, type } = e.target
        let updatedValue: string | number | boolean | File = value

        if (type == "file") {
            const inputElement = e.target as HTMLInputElement;
            if (inputElement.files && inputElement.files.length > 0) {
                const previewImageUrl = URL.createObjectURL(inputElement.files[0])
                updatedValue = previewImageUrl
                setProductImageFile(inputElement.files[0])
            }
        }
        if (name === "status") {
            updatedValue = value === "true"
        }
        setFormState((prevValue) => ({ ...prevValue, [name]: updatedValue }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (productImageFile) {
            const publicUrl = await bucketRouter.uploadFile(productImageFile)
            addNewProduct({ ...formState, image: publicUrl })
            router.back()
        }
        return
    }

    const formInputData = [
        {
            label: "Name",
            name: "name",
            value: formState.name,
            type: "text"
        },
        {   label: "Image",
            name: "image",
            type: "file"
        },
        {
            label: "Price",
            name: "price",
            value: formState.price,
            type: "number"
        },
        {
            label: "Stock",
            name: "stock",
            value: formState.stock,
            type: "number"
        },
        {
            label: "Sold",
            name: "sold",
            value: formState.sold,
            type: "number"
        }
    ]

    const formSelectData = [
        {
            label: "Status",
            name: "status",
            value: formState.status?.toString().toLowerCase(),
            options: [
                {
                    value: "true",
                    text: "Ready"
                },
                {
                    value: "false",
                    text: "Not Ready"
                }
            ]
        },
        {
            label: "Category",
            name: "category",
            value: formState.category?.toString().toLowerCase(),
            options: [
                {
                    value: ProductCategory.FOOD,
                    text: "Food"
                },
                {
                    value: ProductCategory.DRINK,
                    text: "Drink"
                },
                {
                    value: ProductCategory.SNACK,
                    text: "Snack"
                }
            ]
        }
    ]

    return (
        <ProductForm
            productData={formState}
            onSubmit={(e) => handleSubmit(e)}
            inputFormData={formInputData}
            selectFormData={formSelectData}
            handleChange={(e) => handleOnChange(e)}
        />
    )
}
