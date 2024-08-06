import { getSession } from "next-auth/react";

export async function useSession() {
    const session = getSession()
    return session
}