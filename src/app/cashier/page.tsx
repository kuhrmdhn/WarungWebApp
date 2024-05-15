"use client"
import React, { Suspense } from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/Header'
import GroceryList from './components/GroceryList'

export default function Cashier() {

  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <main className='bg-gray-300'>
        <Header />
        <ProductsList />
        <GroceryList />
      </main>
    </Suspense>
  )
}
