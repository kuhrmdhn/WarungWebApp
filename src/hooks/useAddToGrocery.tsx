import { groceryRouter } from "@/lib/database/groceryRouter"
import { GroceryStore } from "@/lib/store/groceryStore"
import { GroceryProduct } from "@/types/groceryInterface"
import { Product } from "@/types/productInterface"
import { useToast } from "@chakra-ui/react"
import { Check, Warning } from "@mui/icons-material"

export function useProductToGrocery(productData: Product, username: string) {
    const { groceryList } = GroceryStore()
    const toast = useToast()

    function addProductToGrocery() {
        const groceryProductIndex = groceryList.findIndex((groceryItem: GroceryProduct) => groceryItem.id === productData.id)
        if (groceryProductIndex === -1) {
            groceryRouter.addNewUserGrocery(username, { ...productData, quantity: 1 })
        } else {
            const currentQuantity = groceryList[groceryProductIndex].quantity
            if (currentQuantity === productData.stock) {
                toast({
                    title: "Max quantity!",
                    status: "warning",
                    duration: 1500,
                    icon: <Warning />,
                    position: "top"
                })
                return
            } else {
                const productIndexItemData = { ...groceryList[groceryProductIndex], quantity: currentQuantity + 1 }
                groceryRouter.updateUserGroceryItem(username, productIndexItemData)
            }
        }
        toast({
            title: "Added to Order List!",
            status: "success",
            duration: 1500,
            icon: <Check />,
            position: "top"
        })
    }
    return addProductToGrocery
}