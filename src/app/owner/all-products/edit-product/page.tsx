"use client"
import PageTitle from '@/app/ui/elements/PageTitle'
import ProductCard from '@/app/ui/elements/ProductCard'
import { Product } from '@/lib/interface/productInterface'
import { PageStore } from '@/lib/store/pageStore'
import { ProductsStore } from '@/lib/store/productsStore'
import { Button, Input, InputGroup, Select, useToast, IconButton, FormLabel } from '@chakra-ui/react'
import { ArrowBack } from '@mui/icons-material'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'

type FormData = {
  name: string
  value: string | number | boolean
  type: string
  isReadonly?: boolean
}

function EditProductFormContent() {
  const toast = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setPageTitle } = PageStore()
  const { productById, findProductById, updateProduct } = ProductsStore()
  const [formState, setFormState] = useState<Product>(productById)

  useEffect(() => {
    const query = new URLSearchParams(searchParams)
    const id = Number(query.get("productId")?.toString())
    findProductById(id)
  }, [])

  useEffect(() => {
    setFormState(productById)
    setPageTitle(`Edit Product | ${productById.name}`)
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

  const previousPage = () => {
    router.back()
  }

  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    updateProduct(formState.id, JSON.parse(JSON.stringify(formState)))
    toast({ title: "Update!" })
    previousPage()
  }

  return (
    <section className="h-[100svh] w-full flex flex-col">
      <div className="flex gap-7 pt-5 pl-5">
        <IconButton aria-label="previous page button" onClick={previousPage}>
          <ArrowBack />
        </IconButton>
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
          <Button className='self-end w-max' colorScheme='green' onClick={(e) => submitForm(e)}>Submit!</Button>
        </form>
        <ProductCard>
          <PageTitle className='mb-5'>
            <PageTitle.SubTitle text='Preview' />
          </PageTitle>
          <ProductCard.OwnerProductCard productData={formState} />
        </ProductCard>
      </div>
    </section>
  )
}

export default function EditProductForm() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <EditProductFormContent />
    </Suspense>
  )
}
