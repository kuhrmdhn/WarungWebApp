export interface Owner {
    id: number
    name: string
    password: string
    income: number
    sale: number
    username: string
    categories: number
}

export interface UpdatedOwnerData {
    name?: string
    password?: string
    income?: number
    sale?: number
    username?: string
    categories?: number
}