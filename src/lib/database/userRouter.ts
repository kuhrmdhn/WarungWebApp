import { apiHandler } from "@/config/apiHandler";
import { bcryptConfig } from "@/config/bcrypt";
import { supabase } from "@/config/supabase";
import { User } from "@/types/userInterface";

export const userRouter = {
    async getUser(username: string, password: string) {
        if (!username || !password) {
            return apiHandler.error(400, "Password and Username is Required!")
        }
        try {
            const { data, error } = await supabase.from("users").select().eq("username", username)
            if (error) {
                throw new Error(error.message)
            }

            const user = data[0]
            if (!user) {
                return apiHandler.error(400, "Invalid username")
            }

            const checkPassword = await bcryptConfig.verifyPassword(password, user.password)
            if (!checkPassword) {
                return apiHandler.error(400, "Invalid password")
            }

            return apiHandler.success(200, "Success get user", user)
        } catch (error) {
            return apiHandler.error(500, "Internal server error")
        }
    },
    async addNewUser(userData: User) {
        if (!userData) {
            return apiHandler.error(400, "Invalid input data")
        }
        try {
            const isSameUserData = await supabase.from("users").select().eq("username", userData.username).single()
            if (isSameUserData.data) {
                return apiHandler.error(400, "Username not available")
            }
            if (userData.password) {
                const hash = await bcryptConfig.hashPassword(userData.password)
                const insertData = { ...userData, password: hash }
                const { error } = await supabase.from("users").insert(insertData).select()
                if (error) {
                    return apiHandler.error(400, error.message)
                }
                return apiHandler.success(200, "Success add new user", userData)
            }
        } catch (error) {
            return apiHandler.error(500, "Internal server error")
        }
    }
}