export enum ProductCategory {
    FOOD = "food",
    DRINK = "drink",
    SNACK = "snack"
}

export interface Product {
    id: number
    name: string
    price: number
    image: string | File
    status: boolean
    stock: number
    sold: number
    category: ProductCategory
}

export interface UpdateProductType {
    name?: string
    price?: number
    image?: string
    status?: boolean
    stock?: number
    sold?: number
    category?: ProductCategory
}