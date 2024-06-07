import { create } from "zustand";
import { Product } from "../interface/productInterface";
import axios from "axios";

type ProductsStore = {
    products: Product[]
    productById: Product
    filteredProducts: Product[]
    setProducts: (products: Product[]) => void
    setFilteredProducts: (products: Product[]) => void
    findProductById: (id: number) => void
    updateProduct: (id: number, product: Product) => void
    deleteProduct: (id: number) => void
    addNewProduct: (data: Product) => void
}

const fetchProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products`);
    return response.data;
};

const fetchProductById = async (id: number) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/product/${id}`);
    return response.data[0];
};

export const ProductsStore = create<ProductsStore>((set) => ({
    products: [],
    productById: {id: 0, name: "", category: "", image: "", price: 0, sold: 0, status: false, stock: 0},
    filteredProducts: [],
    setProducts: (products) => set({ products }),
    setFilteredProducts: (filteredProducts) => set({ filteredProducts }),
    findProductById: async (id: number) => {
        const product = await fetchProductById(id);
        set({ productById: product });
    },
    updateProduct: async (id: number, product: Product) => {
        await axios.put(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products/${id}`, product);
        const products = await fetchProducts();
        set({ products });
        const filteredProducts = products.filter((p: Product) => p.category === "food");
        set({ filteredProducts });
    },
    deleteProduct: async (id: number) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products/${id}`)
        initializeProductsStore()
    },
    addNewProduct: async (data: Product) => {
        await axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/products`, data)
        initializeProductsStore()
    }
}));

export const initializeProductsStore = async () => {
    const products = await fetchProducts();
    const sortedProducts = products.sort((a: Product, b: Product) => a.id - b.id);
    ProductsStore.getState().setProducts(sortedProducts);

    const filteredProducts = sortedProducts.filter((product: Product) => product.category === "food");
    ProductsStore.getState().setFilteredProducts(filteredProducts);
};

initializeProductsStore();
