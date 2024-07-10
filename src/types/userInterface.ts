import { Product } from "./productInterface";

export enum USER_ROLE {
    OWNER = "OWNER",
    CASHIER = "CASHIER"
}

export interface User {
    id?: number | string,
    username?: string,
    password?: string,
    role?: USER_ROLE,
    grocery_list?: Product[]
}