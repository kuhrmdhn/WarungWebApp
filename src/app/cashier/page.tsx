"use client"
import React, { Suspense } from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/Header'
import ScrollTopButton from '../ui/ScrollTopButton'
import GroceryList from './components/GroceryList'

export default function Cashier() {

  return (
    <main className='bg-gray-300'>
      <Header />
      <Suspense>
        <ProductsList />
      </Suspense>
      <ScrollTopButton />
      <GroceryList />
    </main>
  )
}
