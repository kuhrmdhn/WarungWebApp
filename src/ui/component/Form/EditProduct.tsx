"use client"
import { bucketRouter } from '@/lib/database/bucketRouter'
import { productRouter } from '@/lib/database/productRouter'
import { Product } from '@/types/productInterface'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import ProductForm from './ProductForm'
import { Check } from 'react-feather'
import { useRouter } from 'next/navigation'

type Props = {
    productData: Product
}

export default function EditProduct({ productData }: Props) {
    const { push } = useRouter()
    const { deleteProduct } = productRouter
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef(null)
    const [isEdit, setIsEdit] = useState(false)
    const [formState, setFormState] = useState<Product>(productData)
    const [productImageFile, setProductImageFile] = useState<File>()
    const toast = useToast()

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

    const submitForm = async (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (productImageFile) {
                const publicUrl = await bucketRouter.uploadFile(productImageFile)
                productRouter.updateProductData(formState.id, JSON.parse(JSON.stringify({ ...formState, image: publicUrl })))
            } else {
                productRouter.updateProductData(formState.id, JSON.parse(JSON.stringify(formState)))
            }
            toast({ title: "Update!" })
        } catch (error) {
            console.error(error);
            toast({ title: "Failed" })
        }
    }
    const toggleEdit = () => {
        if (isEdit) {
            setFormState(productData)
        }
        setIsEdit((state) => !state)
    }
    const deleteSelectedProduct = async () => {
        await deleteProduct(productData.id)
        toast({
            title: `Deleted ${productData.name}!`,
            status: "success",
            duration: 1500,
            icon: <Check />,
            position: "top"
        })
        onClose()
        push("/owner/all-products")
    }

    const formData = [
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
        <div className='w-1/2 h-max'>
            <ProductForm
                productData={formState}
                onSubmit={(e) => submitForm(e)}
                inputFormData={formData}
                selectFormData={selectFormData}
                handleChange={(e) => handleOnChange(e)}
                editable={isEdit}
            >
                <Button className="w-fit" type="button" colorScheme={isEdit ? "red" : "blue"} variant='ghost' onClick={toggleEdit}>{isEdit ? "Cancel" : "Edit"}</Button>
                <Button className="w-fit" type="button" colorScheme="red" onClick={onOpen}>Delete</Button>
            </ProductForm>
            <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete {productData.name}?
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You cant undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button onClick={onClose} ref={cancelRef}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={deleteSelectedProduct} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    )
}
