import { create } from "zustand";
import { Owner } from "../../types/ownerInterface";

type OwnerStore = {
    ownerData: Owner
    setOwnerData: (data: Owner) => void
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
    setOwnerData: (ownerData: Owner) => {
        set({ ownerData })
    }
}))