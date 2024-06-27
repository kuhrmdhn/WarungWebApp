import axios from "axios";
import { create } from "zustand";
import { User } from "../interface/userInterface";

type UserStore = {
    getUser: (username: string, password: string) => Promise<User>
}

export const UserStore = create<UserStore>((set) => ({
    getUser: async (username: string, password: string) => {
        const { data: user } = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user?username=${username}&&password=${[password]}`)
        if(user) {
            document.cookie = "loginStatus: true; path: /"
        }
        return user
    }
}))