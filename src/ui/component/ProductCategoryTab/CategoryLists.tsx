import { productRouter } from '@/lib/database/productRouter'
import { Tab, TabList } from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function CategoryList({ categories }: { categories: string[] }) {
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const query = new URLSearchParams(searchParams)
    const { getProductByCategory } = productRouter
    const pathname = usePathname()

    function filterProductByCategory(category: string) {
        const key = category.toLowerCase()
        query.set("category", key)
        query.delete("name")
        replace(`${pathname}?${query.toString()}`)
        getProductByCategory(key);
    }

    return (
        <TabList className="flex gap-2">
            {
                categories.map((category: string, index: number) => (
                    <Tab
                        key={index}
                        onClick={() => filterProductByCategory(category)}
                        className={`text-xs sm:text-base`}
                    >
                        {category}
                    </Tab>
                ))
            }
        </TabList>
    )
}
