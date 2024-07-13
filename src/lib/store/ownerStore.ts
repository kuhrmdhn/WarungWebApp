import { create } from "zustand";
import { Owner } from "../../types/ownerInterface";
import axios from "axios";

type EditOwnerData = {
    id?: number
    name?: string
    password?: string
    income?: number
    sale?: number
    username?: string
    categories?: number
}

type OwnerStore = {
    ownerData: Owner
    setOwnerData: (param: Owner) => void
    updateOwnerData: (id: number, data: EditOwnerData) => void
}

// async function getOwnerData() {
//     // await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/owner`).
//     //     then(({ data: ownerData }) => {
//     //         OwnerStore.setState({ ownerData: ownerData[0] })
//     //     })
// }
// getOwnerData()

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
    },
    updateOwnerData: (id: number, data: EditOwnerData) => {
        axios.patch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/owner/${id}`, data)
        // getOwnerData()
    }
}))