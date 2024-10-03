import { bcryptConfig } from "@/config/bcrypt";
import { supabase } from "@/config/supabase";
import { User } from "@/types/userInterface";
import { userManageStore } from "../store/userManageStore";

export const userRouter = {
    async getAllUser() {
        try {
            const { data: users, error } = await supabase.from("users").select()
            if (error) {
                throw new Error(error.message)
            }
            userManageStore.getState().setAllUser(users)
            return users
        } catch (error) {
            console.error(error);
            return error
        }
    },
    async deleteUser(userId: string) {
        try {
            const { error, status } = await supabase.from("users").delete().eq("id", userId)
            if (error) {
                throw new Error(error.message)
            }
            userRouter.getAllUser()
            return status
        } catch (error) {
            console.error(error)
            return error
        }
    },
    async getUser(username: string, password: string) {
        if (!username || !password) {
            throw new Error("Password and Username is Required!")
        }
        try {
            const { data, error } = await supabase.from("users").select().eq("username", username).single()
            if (error) {
                throw new Error(error.message)
            }

            const user = data
            if (!user) {
                throw new Error("Invalid username")
            }

            const checkPassword = await bcryptConfig.verifyPassword(password, user.password)
            if (!checkPassword) {
                throw new Error("Invalid password")
            }
            return user
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    async addNewUser(userData: User) {
        if (!userData) {
            return "Invalid input data"
        }
        try {
            const isSameUserData = await supabase.from("users").select().eq("username", userData.username).single()
            if (isSameUserData.data) {
                throw "Username not available"
            }
            if (userData.password) {
                const hash = await bcryptConfig.hashPassword(userData.password)
                const insertData = { ...userData, password: hash }
                const { error } = await supabase.from("users").insert(insertData)
                if (error) {
                    throw (error.message)
                }
                return userData
            }
        } catch (error) {
            throw error
        }
    },
    async editUser(userData: User) {
        if (!userData) {
            throw new Error("User Data is empty")
        }
        try {
            const { id } = userData
            const { data: currentUserData, error: currentUserDataError } = await supabase.from("users").select().eq("id", id).single()
            if (currentUserDataError) {
                throw new Error(currentUserDataError.message)
            }
            const newUserData = { ...currentUserData, ...userData }
            const { error: updateError } = await supabase.from("users").update(newUserData).eq("id", id)
            if (updateError) {
                throw new Error(updateError.message)
            }
        } catch (error) {
            return error
        }
    },
}