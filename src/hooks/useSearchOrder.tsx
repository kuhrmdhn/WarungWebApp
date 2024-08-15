"use client"
import { orderListRouter } from "@/lib/database/orderListRouter"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useSearchOrder() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { filterOrderList, getOrderList } = orderListRouter
    const defaultInputValue = searchParams.get('order-name')?.toString()

    async function handleInput(e: string) {
        const key = e.toLowerCase()
        const query = new URLSearchParams(searchParams)
        if (key !== "") {
            await filterOrderList(key)
            query.set('order-name', key)
        } else {
            query.delete('order-name')
            await getOrderList()
        }
        replace(`${pathname}?${query.toString()}`)
    }

    return { defaultInputValue, handleInput }
}
