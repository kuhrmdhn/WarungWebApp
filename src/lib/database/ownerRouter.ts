import { supabase } from "@/config/supabase"
import { OwnerStore } from "../store/ownerStore"
import { UpdatedOwnerData } from "@/types/ownerInterface"

export const ownerRouter = {
    async getOwnerData() {
        const { data: ownerData, error } = await supabase.from("owner").select().single()
        if (error) {
            return error.message
        }
        OwnerStore.setState({ ownerData })
        console.log({ownerData})
        return ownerData
    },
    async updateOwnerData(newOwnerData: UpdatedOwnerData) {
        const currentOwnerData = await this.getOwnerData()
        const updatedOwnerData = { ...currentOwnerData, ...newOwnerData }
        const name = "Kukuh Ardi"
        const { status, error } = await supabase.from("owner").update(updatedOwnerData).eq("name", name).select()
        if (error) {
            return error.message
        }
        this.getOwnerData()
        return status
    }
}