import { supabase } from "@/config/supabase"
import { OwnerStore } from "../store/ownerStore"

export const ownerRouter = {
    async getOwnerData() {
        const { data: ownerData, error } = await supabase.from("owner").select().single()
        if (error) {
            return error.message
        }
        OwnerStore.setState({ ownerData })
        return ownerData
    }
}