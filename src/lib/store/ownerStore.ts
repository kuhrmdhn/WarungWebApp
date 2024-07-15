import { create } from "zustand";
import { Owner } from "../../types/ownerInterface";

type EditOwnerData = {
    id: number
    name: string
    password?: string
    income?: number
    sale?: number
    username?: string
    categories?: number
}

type OwnerStore = {
    ownerData: Owner
    setOwnerData: (param: Owner) => void
}

export const OwnerStore = create<OwnerStore>()((set) => ({
    ownerData: {
        id: 1,
        name: "",
        password: "",
        income: 0,
        sale: 0,
        username: "",
        categories: 0
    },
    setOwnerData: (body: Owner) => {
        set({ ownerData: body })
    }
}))