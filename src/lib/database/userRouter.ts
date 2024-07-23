import { bcryptConfig } from "@/config/bcrypt";
import { supabase } from "@/config/supabase";
import { User } from "@/types/userInterface";

export const userRouter = {
    async getUser(username: string, password: string) {
        if (!username || !password) {
            throw new Error("Password and Username is Required!")
        }
        try {
            const { data, error } = await supabase.from("users").select().eq("username", username)
            if (error) {
                throw new Error(error.message)
            }

            const user = data[0]
            if (!user) {
                throw new Error("Invalid username")
            }

            const checkPassword = await bcryptConfig.verifyPassword(password, user.password)
            if (!checkPassword) {
                throw new Error("Invalid password")
            }

            return user
        } catch (error) {
            return "Internal server error"
        }
    },
    async addNewUser(userData: User) {
        if (!userData) {
            return "Invalid input data"
        }
        try {
            const isSameUserData = await supabase.from("users").select().eq("username", userData.username).single()
            if (isSameUserData.data) {
                return "Username not available"
            }
            if (userData.password) {
                const hash = await bcryptConfig.hashPassword(userData.password)
                const insertData = { ...userData, password: hash }
                const { error } = await supabase.from("users").insert(insertData).select()
                if (error) {
                    return error.message
                }
                return userData
            }
        } catch (error) {
            return "Internal server error"
        }
    }
}