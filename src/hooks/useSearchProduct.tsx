"use client"
import { productRouter } from "@/lib/database/productRouter"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useSearchProduct() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { getProductsByName } = productRouter
    const productNameSearchParam = searchParams.get("name")?.toString()

    async function onSearch(keyword: string) {
        const key = keyword.toLowerCase()
        const query = new URLSearchParams(searchParams)
        if (key !== "") {
            getProductsByName(key)
            query.set('name', key)
            query.delete('category')
        } else {
            query.delete('name')
        }
        replace(`${pathname}?${query.toString()}`)
    }

    return { productNameSearchParam, onSearch }
}
