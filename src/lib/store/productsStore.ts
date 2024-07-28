import { create } from "zustand";
import { Product, ProductCategory } from "../../types/productInterface";

type ProductsStore = {
    products: Product[]
    productById: Product
    setProducts: (products: Product[]) => void

}

export const ProductsStore = create<ProductsStore>((set) => ({
    products: [],
    productById: { id: 0, name: "", category: ProductCategory.FOOD, image: "", price: 0, sold: 0, status: false, stock: 0 },
    setProducts: (products) => set({ products }),
}));
