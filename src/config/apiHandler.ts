export const apiHandler = {
    error(status: number, message: string) {
        return { status, message }
    },
    success(status: number, message: string, data: any) {
        return { status, message, data }
    }
}