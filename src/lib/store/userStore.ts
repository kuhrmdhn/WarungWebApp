import { defaultUserData } from "@/app/constant/defaultUserData";
import { User } from "@/types/userInterface";
import { create } from "zustand";

type UserStore = {
    userData: User
    setUserData: (param: any) => void
    username: string
    setUsername: (username: string) => void
}

export const UserStore = create<UserStore>()((set) => ({
    userData: defaultUserData,
    setUserData: (userData) => {
        set({ userData })
    },
    username: "",
    setUsername: (username: string) => {
        set({ username })
    }
}))