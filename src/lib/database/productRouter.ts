import { supabase } from "@/config/supabase"
import { ProductsStore } from "../store/productsStore"
import { Product, UpdateProductType } from "@/types/productInterface"

export const productRouter = {
    async getProducts(): Promise<Product[] | any> {
        try {
            const { data: products, error } = await supabase.from("products").select()
            if (error) {
                throw new Error(error.message)
            }
            const sortedProductById = products.sort((a, b) => a.id - b.id)
            ProductsStore.getState().setProducts(sortedProductById)
            return products
        } catch (error) {
            return error
        }
    },
    async getProductById(id: number) {
        if (id === undefined || id === null) {
            throw new Error("Product ID is required");
        }
        try {
            const { data, error } = await supabase
                .from("products")
                .select()
                .eq("id", id)
                .single();

            if (error || !data) {
                console.error("Supabase error:", error);
                return null;
            }

            const product: Product = data;
            ProductsStore.setState({ productById: product });
            return product;
        } catch (error) {
            console.error("Unexpected error:", error);
            return null;
        }
    },
    async getProductsByName(productName: string) {
        try {
            const { data: products, error } = await supabase.from("products").select()
            if (error) {
                return error.message
            }
            const productByName = products.filter((product: Product) => product.name.toLowerCase().trim().includes(productName.toLowerCase().trim()))
            ProductsStore.setState({ products: productByName })
        } catch (error) {
            return error
        }
    },
    async getProductByCategory(productCategory: string) {
        ProductsStore.setState({ products: [] })
        let category = productCategory;
        try {
            const { data: products, error } = await supabase.from("products").select().eq("category", category)
            if (!products || error) {
                return error.message
            }
            ProductsStore.setState({ products })
        } catch (error) {
            return error
        }
    },
    async updateProductData(id: number, newProductData: UpdateProductType) {
        if (!id || !newProductData) {
            return "Product ID and new product data is required, you can't edit product ID"
        }
        try {
            const { data: currentProductData } = await supabase.from("products").select().eq("id", id).single()
            const updatedProductData = { ...currentProductData, ...newProductData }
            const { status, error } = await supabase.from("products").update(updatedProductData).eq("id", id)
            if (error) {
                return error.message
            }
            this.getProducts()
            return status
        } catch (error) {
            return error
        }
    },
    async deleteProduct(id: number) {
        if (!id) {
            return "Product ID is required"
        }
        try {
            const { data: product } = await supabase.from("products").select().eq("id", id).single()
            if (!product || product.length == 0) {
                return "Invalid Product ID"
            }
            const { status, error } = await supabase.from("products").delete().eq("id", id)
            if (error) {
                return error.message
            }
            this.getProducts()
            return status
        } catch (error) {
            return error
        }
    },
    async addNewProduct(newProductData: Product) {
        if (!newProductData) {
            return "Product Data is required"
        }
        try {
            const { status, error } = await supabase.from("products").insert(newProductData).select()
            if (error) {
                return error.message
            }
            this.getProducts()
            return status
        } catch (error) {
            return error
        }
    }
}