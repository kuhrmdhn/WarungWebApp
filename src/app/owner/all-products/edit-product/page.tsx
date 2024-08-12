"use client"
import Loading from '@/app/loading'
import EditProduct from '@/ui/component/Form/EditProduct'
import Title from '@/ui/component/SectionTitle/Title'
import MovePageButton from '@/ui/elements/MovePageButton'
import React, { Suspense } from 'react'

function EditProductFormContent() {
  return (
    <section className="h-[100svh] w-full flex flex-col">
      <div className="flex gap-7 pt-5 pl-5 mb-5" >
        <MovePageButton />
        <Title>Edit Product</Title>
      </div>
      <EditProduct />
    </section >
  )
}

export default function EditProductForm() {
  return (
    <Suspense fallback={<Loading />}>
      <EditProductFormContent />
    </Suspense>
  )
}