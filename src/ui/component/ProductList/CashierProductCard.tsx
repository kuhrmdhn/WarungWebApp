import { Product } from "@/types/productInterface"
import { Button, Card, CardBody, CardFooter, Stack } from "@chakra-ui/react"
import ProductCardImage from "./ProductCardImage"
import { FormatRupiah } from "@arismun/format-rupiah"
import { useProductToGrocery } from "@/hooks/useAddToGrocery"
import { UserStore } from "@/lib/store/userStore"
import Clicked from "@/ui/framer-motion/Animation/Clicked"

export default function CashierProductCard({ productData }: { productData: Product }) {
    const { name, price, status, stock } = productData
    const invalidMenu = !status || stock === 0
    const { username } = UserStore()
    const addProductToGrocery = useProductToGrocery(productData, username)

    const addToGrocery = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addProductToGrocery()
    }

    return (
        <Card className={`h-80 sm:h-96 w-44 sm:w-60 bg-white text-black shadow-xl shadow-gray-200`}>
            <CardBody className="p-2 border-b">
                <div className="h-3/4 w-full">
                <ProductCardImage productData={productData} />
                </div>
                <Stack className='mt-3 ml-3'>
                    <h1 className='font-bold text-sm sm:text-lg'>{name}</h1>
                    <h2 className='text-xs sm:text-base'>
                        <FormatRupiah value={price} />
                    </h2>
                </Stack>
            </CardBody>
            <CardFooter className='w-full h-fit flex justify-center items-center'>
                <Clicked className="w-2/3 sm:w-5/6 h-10" scale={0.95}>
                    <Button
                        disabled={invalidMenu}
                        onClick={(e) => invalidMenu == false && addToGrocery(e)}
                        aria-label={invalidMenu ? "Sold Out Product Button" : "Add To Grocery Button"}
                        transitionDuration={"300ms"}
                        fontSize={"0.8em"}
                        colorScheme={invalidMenu ? "gray" : "green"}
                        className={`w-full h-full flex gap-5 text-sm ${invalidMenu ? "cursor-not-allowed" : "cursor-pointer"} rounded-md `}
                    >
                        {invalidMenu ? "Sold Out" : "Order"}
                    </Button>
                </Clicked>
            </CardFooter>
        </Card>
    )
}