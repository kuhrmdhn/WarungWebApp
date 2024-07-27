"use client"
import { GroceryProduct } from '@/types/groceryInterface'
import { GroceryStore } from '@/lib/store/groceryStore'
import { OwnerStore } from '@/lib/store/ownerStore'
import { UserStore } from '@/lib/store/userStore'
import { FormatRupiah } from '@arismun/format-rupiah'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { groceryRouter } from '@/lib/database/groceryRouter'
import { productRouter } from '@/lib/database/productRouter'
import { ownerRouter } from '@/lib/database/ownerRouter'
import { getSession } from 'next-auth/react'
import { Session } from '@/types/token'
import GroceryCard from './GroceryCard'

export default function GroceryList() {
  const { ownerData } = OwnerStore()
  const { username } = UserStore()
  const { groceryList, groceryListOpen, setGroceryListOpen, removeGrocery } = GroceryStore()
  const totalGroceryPrice = groceryList.map((grocery: GroceryProduct) => grocery.price * grocery.quantity).reduce((acc: number, prev: number) => acc + prev, 0)
  const totalGroceryQuantity = groceryList.map((grocery: GroceryProduct) => grocery.quantity).reduce((acc: number, prev: number) => acc + prev, 0)
  const toast = useToast()

  const onCloseGrocery = () => {
    setGroceryListOpen(false)
  }
  const payGrocery = async () => {
    groceryList.map((grocery: GroceryProduct) => {
      let productStatus = true
      if (grocery.stock - grocery.quantity == 0) {
        productStatus = false
      }
      const newProductData = {
        status: productStatus,
        stock: grocery.stock - grocery.quantity,
        sold: grocery.sold + grocery.quantity,
        category: grocery.category
      }
      groceryRouter.deleteUserGroceryItem(username, grocery.id)
      productRouter.updateProductData(grocery.id, newProductData)
    })
    const session: Session | null = await getSession() as Session | null
    const userRole = session?.user.role
    if (userRole === "CASHIER" || userRole === "OWNER") {
      const newOwnerData = {
        income: ownerData.income + totalGroceryPrice,
        sale: ownerData.sale + totalGroceryQuantity
      }
      ownerRouter.updateOwnerData(newOwnerData)
    }
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
      onClose={onCloseGrocery}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Order List</DrawerHeader>
        <DrawerBody className='flex flex-col gap-3'>
          {
            groceryList.map((grocery: GroceryProduct, index: number) => (
              <GroceryCard
                key={index}
                grocery={grocery}
              />
            ))
          }
        </DrawerBody>
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onCloseGrocery}>
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
