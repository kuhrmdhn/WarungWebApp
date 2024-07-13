import { create } from "zustand";

type UserStore = {
    username: string
    setUsername: (username: string) => void
}

export const UserStore = create<UserStore>()((set) => ({
    username: "",
    setUsername: (username: string) => {
        set({ username })
    }
}))