import { groceryRouter } from "@/lib/database/groceryRouter"
import { GroceryStore } from "@/lib/store/groceryStore"
import { UserStore } from "@/lib/store/userStore"
import { GroceryProduct } from "@/types/groceryInterface"
import { Product } from "@/types/productInterface"
import { Button, Card, CardBody, CardFooter, Stack, useToast } from "@chakra-ui/react"
import { Check, Warning } from "@mui/icons-material"
import ProductCardImage from "./ProductCardImage"
import { FormatRupiah } from "@arismun/format-rupiah"

export default function CashierProductCard({ productData }: { productData: Product }) {
    const { name, price, status, stock } = productData
    const invalidMenu = !status || stock === 0
    const toast = useToast()
    const { username } = UserStore()
    const { groceryList } = GroceryStore()
    const { addNewUserGrocery } = groceryRouter

    const addProductToGrocery = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const groceryProductIndex = groceryList.findIndex((groceryItem: GroceryProduct) => groceryItem.id === productData.id)
        if (groceryProductIndex === -1) {
            addNewUserGrocery(username, { ...productData, quantity: 1 })
        } else {
            if (groceryList[groceryProductIndex].quantity === productData.stock) {
                toast({
                    title: "Max quantity!",
                    status: "warning",
                    duration: 1500,
                    icon: <Warning />,
                    position: "top"
                })
                return
            } else {
                const productIndexItemData = { ...groceryList[groceryProductIndex], quantity: groceryList[groceryProductIndex].quantity + 1 }
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

    return (
        <Card className={`h-80 sm:h-96 w-44 sm:w-60 bg-white text-black`}>
            <CardBody padding={"5px"}>
                <ProductCardImage productData={productData} />
                <Stack className='mt-3 ml-3'>
                    <h1 className='font-bold text-sm sm:text-lg'>{name}</h1>
                    <h3 className='text-xs sm:text-base'>
                        <FormatRupiah value={price} />
                    </h3>
                </Stack>
            </CardBody>
            <CardFooter className='w-full h-fit flex justify-center items-center'>
                <Button
                    disabled={invalidMenu}
                    onClick={(e) => !invalidMenu && addProductToGrocery(e)}
                    aria-label={invalidMenu ? "Sold Out Product Button" : "Add To Grocery Button"}
                    backgroundColor={"#000"}
                    color={"#fff"}
                    transitionDuration={"300ms"}
                    fontSize={"0.8em"}
                    className={`w-2/3 sm:w-5/6 h-12 flex gap-5 text-sm ${invalidMenu ? "bg-gray-300 text-black cursor-not-allowed" : "bg-black text-white hover:bg-gray-300 hover:text-black cursor-pointer"} rounded-md `}
                >
                    {invalidMenu ? "Sold Out" : "Order"}
                </Button>
            </CardFooter>
        </Card>
    )
}