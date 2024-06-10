"use client"
import PageTitle from '@/app/ui/elements/PageTitle'
import PrevPageButton from '@/app/ui/elements/PrevPageButton'
import ProductCard from '@/app/ui/elements/ProductCard'
import { Product } from '@/lib/interface/productInterface'
import { PageStore } from '@/lib/store/pageStore'
import { ProductsStore, initializeProductsStore } from '@/lib/store/productsStore'
import { Button, Input, InputGroup, Select, useToast, FormLabel, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useRef, useState } from 'react'

type FormData = {
  name: string
  value: string | number | boolean
  type: string
  isReadonly?: boolean
}

function EditProductFormContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)
  const toast = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setPageTitle } = PageStore()
  const { productById, findProductById, updateProduct, deleteProduct } = ProductsStore()
  const [formState, setFormState] = useState<Product>(productById)
  const query = new URLSearchParams(searchParams)
  const id = Number(query.get("productId")?.toString())

  useEffect(() => {
    if (!id) {
      return router.replace("/owner/all-products")
    }
    findProductById(id)
  }, [])

  useEffect(() => {
    if (id) {
      setFormState(productById)
      setPageTitle(`Edit Product | ${productById.name}`)
    }
  }, [productById])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value
    const name = e.target.name
    setFormState((prevValue) => ({ ...prevValue, [name]: value }))
  }

  const formData: FormData[] = [
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
    },
    {
      name: "category",
      value: formState.category,
      type: "text"
    },
  ]

  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    updateProduct(formState.id, JSON.parse(JSON.stringify(formState)))
    toast({ title: "Update!" })
    router.back()
  }
  const deleteProducts = () => {
    deleteProduct(id)
    initializeProductsStore()
    router.back()
    onClose()
  }

  return (
    <section className="h-[100svh] w-full flex flex-col">
      <div className="flex gap-7 pt-5 pl-5" >
        <PrevPageButton />
        <PageTitle>
          <PageTitle.Title>
            Edit Product
          </PageTitle.Title>
        </PageTitle>
      </div>
      <div className="flex justify-around items-center">
        <form className='h-full w-2/5 px-5 pt-10 flex flex-col'>
          <PageTitle className='mb-5'>
            <PageTitle.SubTitle text={productById.name} />
          </PageTitle>
          {
            formData.map((data: FormData, index: number) => (
              <InputGroup key={index} className='w-full flex gap-10 mb-3'>
                <FormLabel className="w-1/5">
                  {data.name}
                </FormLabel>
                <Input
                  readOnly={data.isReadonly}
                  name={data.name}
                  value={typeof data.value !== "string" ? data.value.toString() : data.value}
                  type={data.type}
                  onChange={(e) => handleOnChange(e)}
                />
              </InputGroup>
            ))
          }
          <div className="flex w-full gap-10 mb-5">
            <FormLabel className="w-1/5">Status</FormLabel>
            <Select name="status" value={(formState.status).toString().toLowerCase()} onChange={(e) => handleOnChange(e)}>
              <option value={"true"}>Ready</option>
              <option value={"false"}>Not Ready</option>
            </Select>
          </div>
          <div className="flex gap-5 self-end w-max">
            <Button colorScheme='red' onClick={onOpen}>Delete</Button>
            <Button colorScheme='green' onClick={(e) => submitForm(e)}>Submit</Button>
          </div>
        </form>
        <ProductCard>
          <PageTitle className='mb-5'>
            <PageTitle.SubTitle text='Preview' />
          </PageTitle>
          <ProductCard.OwnerProductCard productData={formState} />
        </ProductCard>
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