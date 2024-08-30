import { User } from "@/types/userInterface"
import { create } from "zustand"

type UserManage = {
    allUser: User[] | [],
    setAllUser: (params: User[]) => void
}

export const userManageStore = create<UserManage>()((set) => ({
    allUser: [],
    setAllUser(allUser) {
        set({ allUser })
    },
}))