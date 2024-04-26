import { create } from "zustand";
import { Product } from "../interface/productInterface";
import axios from "axios";

type ProductsStore = {
    products: Product[]
    filteredProducts: Product[]
    setProducts: (params: Product[]) => void
    setFilteredProducts: (params: Product[]) => void
}

const getProducts = async () => await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products`)
    .then(({ data: products }) => {
        ProductsStore.getInitialState().setProducts(products)
    })
getProducts()
const filterProduct = async () => await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products`)
    .then(({ data: products }) => {
        const foodProducts = products.filter((product: Product) => product.category === "food") 
        ProductsStore.getInitialState().setFilteredProducts(foodProducts)
    })
filterProduct()

export const ProductsStore = create<ProductsStore>()((set) => ({
    products: [],
    filteredProducts: [],
    setProducts: (products) => {
        set({ products })
    },
    setFilteredProducts: (filteredProducts) => {
        set({ filteredProducts })
    }
}))