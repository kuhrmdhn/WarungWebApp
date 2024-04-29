"use client"
import React from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/Header'
import ScrollTopButton from '../ui/ScrollTopButton'
import GroceryList from './components/GroceryList'

export default function Cashier() {

  return (
    <main className='bg-gray-300'>
      <Header />
      <ProductsList />
      <ScrollTopButton />
      <GroceryList />
    </main>
  )
}
