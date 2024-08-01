import { Product } from "./productInterface";

export interface GroceryProduct extends Product {
    orderData: any;
    quantity : number
}
