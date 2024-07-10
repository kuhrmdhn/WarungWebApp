import { apiHandler } from "@/config/apiHandler";
import { supabase } from "@/config/supabase";
import { GroceryParam } from "@/types/groceryInterface";
import { User } from "@/types/userInterface";

export const groceryRouter = {
    async getUserGrocery(username: string) {
        if (!username) {
            return apiHandler.error(400, "Username is required")
        }

        try {
            const { data, error } = await supabase.from("users").select().eq("username", username);
            if (error) {
                return apiHandler.error(400, error.message)
            }

            const user: User = data[0];
            if (!user) {
                return apiHandler.error(400, "Can't find user grocery, please checking username or user is available")
            }

            const groceryList = user.grocery_list;
            return apiHandler.success(200, "Success get user grocery", groceryList)
        } catch (error) {
            return apiHandler.error(500, "Internal server error")
        }
    },
    async addNewUserGrocery(username: string, groceryData: GroceryParam) {
        if (!username) {
            return apiHandler.error(400, "Username or new grocery data is required")
        }
        try {
            const { error, data: selectedUser } = await supabase.from("users").select().eq("username", username)
            if (error) {
                return apiHandler.error(400, error.message)
            }
            const user: User = selectedUser[0]
            const userGroceryList = user.grocery_list
            const userGrocery = userGroceryList ? [...userGroceryList, groceryData] : [groceryData]
            const { data } = await supabase.from("users").update({ grocery_list: userGrocery }).eq("username", username)
            return apiHandler.success(200, "Success add new user grocery", data)
        } catch (error) {
            return apiHandler.error(500, "Internal server error")
        }
    }
}