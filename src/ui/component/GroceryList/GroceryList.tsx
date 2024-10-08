"use client"
import { groceryRouter } from '@/lib/database/groceryRouter'
import { orderListRouter } from '@/lib/database/orderListRouter'
import { ownerRouter } from '@/lib/database/ownerRouter'
import { productRouter } from '@/lib/database/productRouter'
import { GroceryStore } from '@/lib/store/groceryStore'
import { OwnerStore } from '@/lib/store/ownerStore'
import { UserStore } from '@/lib/store/userStore'
import { GroceryProduct } from '@/types/groceryInterface'
import { FormatRupiah } from '@arismun/format-rupiah'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useToast } from '@chakra-ui/react'
import GroceryCard from './GroceryCard'

export default function GroceryList() {
  const { ownerData } = OwnerStore()
  const { username } = UserStore()
  const { groceryList, groceryListOpen, setGroceryListOpen } = GroceryStore()
  const totalGroceryPrice = groceryList.map((grocery: GroceryProduct) => grocery.price * grocery.quantity).reduce((acc: number, prev: number) => acc + prev, 0)
  const totalGroceryQuantity = groceryList.map((grocery: GroceryProduct) => grocery.quantity).reduce((acc: number, prev: number) => acc + prev, 0)
  const toast = useToast()

  const onCloseGrocery = () => {
    setGroceryListOpen(false)
  }
  const payGrocery = async () => {
    for (let grocery of groceryList) {
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
      await groceryRouter.clearUserGroceryList(username)
      await productRouter.updateProductData(grocery.id, newProductData)
    }
    const newOwnerData = {
      income: ownerData.income + totalGroceryPrice,
      sale: ownerData.sale + totalGroceryQuantity
    }
    await ownerRouter.updateOwnerData(newOwnerData)
    const { error } = await orderListRouter.addNewOrderList(groceryList)
    toast({
      title: error ? "Payment Failed" : "Payment Success",
      duration: 1500,
      position: "top",
      status: error ? "warning" : "success"
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
