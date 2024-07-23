import bcrypt from "bcryptjs"

export const bcryptConfig = {
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    },
    async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        const result = await bcrypt.compare(plainPassword, hashedPassword);
        return result
    }
}