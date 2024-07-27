"use client"
import PageTitle from '@/app/ui/elements/PageTitle'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import MovePageButton from '@/app/ui/elements/MovePageButton'
import { Product } from '@/types/productInterface'
import { PageStore } from '@/lib/store/pageStore'
import { ProductsStore } from '@/lib/store/productsStore'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, InputGroup, Select, useDisclosure, useToast } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { productRouter } from '@/lib/database/productRouter'
import OwnerProductCard from '@/app/ui/component/ProductList/OwnerProductCard'

function EditProductFormContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setPageTitle } = PageStore()
  const { productById } = ProductsStore()
  const [formState, setFormState] = useState<Product>(productById)
  const query = new URLSearchParams(searchParams)
  const id = Number(query.get("productId")?.toString())
  const toast = useToast()

  const { onOpen, onClose, isOpen } = useDisclosure()
  const cancelRef = useRef(null)

  const deleteProducts = () => {
    productRouter.deleteProduct(id)
    router.back()
    onClose()
  }

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
    const value = e.target.value
    const name = e.target.name
    setFormState((prevValue) => ({ ...prevValue, [name]: value }))
  }

  const submitForm = (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    productRouter.updateProductData(formState.id, JSON.parse(JSON.stringify(formState)))
    toast({ title: "Update!" })
    router.back()
  }

  const formData = [
    {
      name: "id",
      value: formState.id,
      type: "number",
      isReadonly: true
    },
    {
      name: "name",
      value: formState.name,
      type: "text"
    },
    {
      name: "price",
      value: formState.price,
      type: "number"
    },
    {
      name: "image",
      value: formState.image,
      type: "text"
    },
    {
      name: "stock",
      value: formState.stock,
      type: "number"
    },
    {
      name: "sold",
      value: formState.sold,
      type: "number"
    }
  ]
  const selectFormData = [
    {
      name: "status",
      label: "Status",
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
    <section className="h-[100svh] w-full flex flex-col">
      <div className="flex gap-7 pt-5 pl-5 mb-5" >
        <MovePageButton />
        <PageTitle>
          <PageTitle.Title>
            Edit Product
          </PageTitle.Title>
        </PageTitle>
      </div>
      <div className="flex justify-around items-center flex-col-reverse lg:flex-row">
        <form onSubmit={(e) => submitForm(e)} className='h-full w-11/12 lg:w-2/5 px-5 pt-10 flex flex-col'>
          <PageTitle className='mb-5'>
            <PageTitle.SubTitle text={productById.name} />
          </PageTitle>
          {
            formData.map((data, index: number) => (
              <InputGroup key={index} className='w-full flex gap-10 mb-3'>
                <FormLabel className="w-1/5 text-2xs sm:text-base">
                  {data.name}
                </FormLabel>
                <Input
                  className="text-2xs sm:text-base"
                  readOnly={data.isReadonly}
                  name={data.name}
                  value={typeof data.value !== "string" ? data.value.toString() : data.value}
                  type={data.type}
                  onChange={(e) => handleOnChange(e)}
                />
              </InputGroup>
            ))
          }
          {
            selectFormData.map((select, index) => (
              <FormControl key={index} className="flex gap-10 mb-3">
                <FormLabel className="w-1/5 text-2xs sm:text-base">{select.label}</FormLabel>
                <Select name={select.name} value={select.value} onChange={(e) => handleOnChange(e)}>
                  {
                    select.options.map((option, index) => (
                      <option className="text-2xs sm:text-base" key={index} value={option.value}>{option.text}</option>
                    ))
                  }
                </Select>
              </FormControl>
            ))
          }
          <div className="flex gap-5 self-end w-max">
            <Button colorScheme='red' onClick={onOpen}>Delete</Button>
            <Button colorScheme='green' onClick={(e) => submitForm(e)} type='submit'>Submit</Button>
          </div>
        </form>
        <PageTitle className='mb-5'>
          <PageTitle.SubTitle text='Preview' />
        </PageTitle>
        <OwnerProductCard productData={formState} />
      </div>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Product
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You cant undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={deleteProducts} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </section >
  )
}

export default function EditProductForm() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <EditProductFormContent />
    </Suspense>
  )
}