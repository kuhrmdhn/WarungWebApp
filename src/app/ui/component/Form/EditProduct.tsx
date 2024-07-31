import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm'
import { useRouter, useSearchParams } from 'next/navigation'
import { PageStore } from '@/lib/store/pageStore'
import { ProductsStore } from '@/lib/store/productsStore'
import { Product } from '@/types/productInterface'
import { useToast } from '@chakra-ui/react'
import { productRouter } from '@/lib/database/productRouter'
import { bucketRouter } from '@/lib/database/bucketRouter'

export default function EditProduct() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { setPageTitle } = PageStore()
    const { productById } = ProductsStore()
    const [formState, setFormState] = useState<Product>(productById)
    const [productImageFile, setProductImageFile] = useState<File>()
    const query = new URLSearchParams(searchParams)
    const id = Number(query.get("productId")?.toString())
    const toast = useToast()

    useEffect(() => {
        if (!id) {
            return router.replace("/owner/all-products")
        }
        productRouter.getProductById(id)
    }, [id, router])

    useEffect(() => {
        if (id) {
            setFormState(productById)
            setPageTitle(`Edit Product | ${productById.name}`)
        }
    }, [productById, id, setPageTitle])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name, type } = e.target
        let updatedValue: string | number | boolean | File = value

        if (type == "file") {
            if (e.target.files && e.target.files.length > 0) {
                const previewImageUrl = URL.createObjectURL(e.target.files[0])
                updatedValue = previewImageUrl
                setProductImageFile(e.target.files[0])
            }
        }
        if (name === "status") {
            updatedValue = value === "true"
        }
        setFormState((prevValue) => ({ ...prevValue, [name]: updatedValue }))
    }

    const submitForm = async (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (productImageFile) {
            const publicUrl = await bucketRouter.uploadFile(productImageFile)
            productRouter.updateProductData(formState.id, JSON.parse(JSON.stringify({ ...formState, image: publicUrl })))
        } else {
            productRouter.updateProductData(formState.id, JSON.parse(JSON.stringify(formState)))
        }
        toast({ title: "Update!" })
        router.back()
    }

    const formData = [
        {
            label: "Id",
            required: true,
            name: "id",
            value: formState.id,
            type: "number",
            isReadonly: true
        },
        {
            label: "Name",
            required: true,
            name: "name",
            value: formState.name,
            type: "text"
        },
        {
            label: "Image",
            name: "image",
            type: "file"
        },
        {
            label: "Price",
            required: true,
            name: "price",
            value: formState.price,
            type: "number"
        },
        {
            label: "Stock",
            required: true,
            name: "stock",
            value: formState.stock,
            type: "number"
        },
        {
            label: "Sold",
            required: true,
            name: "sold",
            value: formState.sold,
            type: "number"
        }
    ]
    const selectFormData = [
        {
            name: "status",
            label: "Status",
            required: true,
            value: (formState.status).toString().toLowerCase(),
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
            name: "category",
            label: "Category",
            required: true,
            value: formState.category,
            options: [
                {
                    value: "food",
                    text: "Food"
                },
                {
                    value: "drink",
                    text: "Drink"
                }, {
                    value: "snack",
                    text: "Snack"
                }
            ]
        }
    ]

    return (
        <ProductForm
            productData={formState}
            onSubmit={(e) => submitForm(e)}
            inputFormData={formData}
            selectFormData={selectFormData}
            handleChange={(e) => handleOnChange(e)}
        />
    )
}
