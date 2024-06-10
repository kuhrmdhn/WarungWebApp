"use client"
import GroceryCard from '@/app/ui/elements/GroceryCard'
import { GroceryParam } from '@/lib/interface/groceryInterface'
import { GroceryStore } from '@/lib/store/groceryStore'
import { OwnerStore } from '@/lib/store/ownerStore'
import { ProductsStore, initializeProductsStore } from '@/lib/store/productsStore'
import { FormatRupiah } from '@arismun/format-rupiah'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'

export default function GroceryList() {
  const { ownerData, updateOwnerData } = OwnerStore()
  const { updateProduct } = ProductsStore()
  const { groceryList, groceryListOpen, setGroceryListOpen, removeGrocery } = GroceryStore()
  const totalGroceryPrice = groceryList.map((grocery: GroceryParam) => grocery.price * grocery.quantity).reduce((acc: number, prev: number) => acc + prev, 0)
  const totalGroceryQuantity = groceryList.map((grocery: GroceryParam) => grocery.quantity).reduce((acc: number, prev: number) => acc + prev, 0)
  const toast = useToast()

  const onClose = () => {
    setGroceryListOpen(false)
  }
  const payGrocery = () => {
    groceryList.map((grocery: GroceryParam) => {
      const newData = {
        id: grocery.id,
        name: grocery.name,
        price: grocery.price,
        image: grocery.image,
        status: grocery.status,
        stock: grocery.stock - grocery.quantity,
        sold: grocery.sold + grocery.quantity,
        category: grocery.category
      }
      const newOwnerData = {
        income: ownerData.income + totalGroceryPrice,
        sale: ownerData.sale + totalGroceryQuantity
      }
      removeGrocery(grocery.id)
      updateProduct(grocery.id, newData)
      updateOwnerData(ownerData.id, newOwnerData)
      initializeProductsStore()
    })
    toast({
      title: "Payment Success",
      duration: 1500,
      position: "top",
      status: "success"
    })
  }


  return (
    <Drawer
      isOpen={groceryListOpen}
      placement='right'
      onClose={onClose}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Order List</DrawerHeader>
        <DrawerBody className='flex flex-col gap-3'>
          {
            groceryList.map((grocery: GroceryParam, index: number) => (
              <GroceryCard
                key={index}
                grocery={grocery}
              />
            ))
          }
        </DrawerBody>
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={payGrocery}
            minWidth={"45%"}
            bgColor={"black"}
            color={"white"}
            className="hover:text-black"
          >
            Pay {<FormatRupiah value={totalGroceryPrice} />}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
