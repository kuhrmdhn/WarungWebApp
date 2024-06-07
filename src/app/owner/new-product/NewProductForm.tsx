"use client"
import PageTitle from '@/app/ui/elements/PageTitle'
import ProductCard from '@/app/ui/elements/ProductCard'
import { Product } from '@/lib/interface/productInterface'
import { ProductsStore } from '@/lib/store/productsStore'
import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function NewProductForm() {
    const { addNewProduct } = ProductsStore()
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const query = new URLSearchParams(searchParams)

    const productDataByQuery: Product = {
        id: Date.now(),
        name: query.get("name")?.toString() || "",
        category: query.get("category")?.toString() || "food",
        image: query.get("image")?.toString() || "",
        price: Number(query.get("price")?.toString()) || 0,
        sold: Number(query.get("sold")?.toString()) || 0,
        status: JSON.parse(query.get("status")?.toString() || "false"),
        stock: Number(query.get("stock")?.toString()) || 0
    }
    const [formState, setFormState] = useState<Product>(productDataByQuery)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target
        let updatedValue: string | number | boolean = value

        if (name === "status") {
            updatedValue = value === "true"
        }

        setFormState((prevValue) => ({ ...prevValue, [name]: updatedValue }))
        query.set(name, value.toString())
        router.replace(`${pathname}?${query.toString()}`)
    }
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addNewProduct(formState)
    }

    const formInputData = [
        {
            label: "Name",
            name: "name",
            value: formState.name,
            type: "text"
        },
        {
            label: "Price",
            name: "price",
            value: formState.price,
            type: "number"
        },
        {
            label: "Image",
            name: "image",
            value: formState.image,
            type: "text"
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
                    value: "food",
                    text: "Food"
                },
                {
                    value: "drink",
                    text: "Drink"
                },
                {
                    value: "snack",
                    text: "Snack"
                }
            ]
        }
    ]

    return (
        <div className='h-max w-full flex justify-around items-center'>
            <form className="w-2/5 h-max flex flex-col gap-4">
                {
                    formInputData.map((form, index) => (
                        <FormControl key={index} className="flex justify-between items-center">
                            <FormLabel className="w-1/5">
                                {form.label}
                            </FormLabel>
                            <Input
                                value={form.value}
                                name={form.name}
                                type={form.type}
                                onChange={(e) => handleOnChange(e)}
                                isRequired={true} required={true} aria-required={true}
                            />
                        </FormControl>
                    ))
                }
                {
                    formSelectData.map((form, index) => (
                        <FormControl key={index} className="flex justify-between items-center">
                            <FormLabel className="w-1/5">
                                {form.label}
                            </FormLabel>
                            <Select
                                name={form.name}
                                value={form.value}
                                onChange={(e) => handleOnChange(e)}
                            >
                                {
                                    form.options.map((option, index) => (
                                        <option key={index} value={option.value}>{option.text}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    ))
                }
                <Button
                    className='w-1/5 self-end'
                    colorScheme='blue'
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </Button>
            </form>
            <ProductCard>
                <PageTitle>
                    <PageTitle.SubTitle text='Preview' />
                </PageTitle>
                <ProductCard.OwnerProductCard
                    productData={formState}
                />
            </ProductCard>
        </div>
    )

}
