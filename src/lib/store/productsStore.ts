import { create } from "zustand";
import { Product } from "../../types/productInterface";

type ProductsStore = {
    products: Product[]
    productById: Product | null
    setProductById: (product: Product) => void
    setProducts: (products: Product[]) => void
}

export const ProductsStore = create<ProductsStore>((set) => ({
    products: [],
    productById: null,
    setProductById: (product) => set({ productById: product }),
    setProducts: (products) => set({ products }),
}));
