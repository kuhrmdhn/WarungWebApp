"use client"
import { productRouter } from "@/lib/database/productRouter"
import { ProductsStore } from "@/lib/store/productsStore"
import { Product } from "@/types/productInterface"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useSearchProduct() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { getProducts } = productRouter
    const defaultInputValue = searchParams.get('name')?.toString()

    async function handleInput(e: string) {
        const key = e.toLowerCase()
        const query = new URLSearchParams(searchParams)
        if (key !== "") {
            query.set('name', key)
            query.delete('category')
        } else {
            query.delete('name')
            const allProduct: Product[] = await getProducts()
            const foodProducts = allProduct.filter((product: Product) => product.category === "food")
            ProductsStore.setState({ products: foodProducts })
        }
        replace(`${pathname}?${query.toString()}`)
    }

    return { defaultInputValue, handleInput }
}
