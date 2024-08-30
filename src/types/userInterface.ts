import { GroceryProduct } from "./groceryInterface";

export enum USER_ROLE {
    OWNER = "OWNER",
    CASHIER = "CASHIER",
    CHEF = "CHEF"
}

export interface User {
    id: string,
    username?: string,
    password?: string,
    role?: USER_ROLE,
    grocery_list?: GroceryProduct[]
}