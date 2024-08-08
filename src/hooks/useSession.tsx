import { Session } from "@/types/token";
import { getSession } from "next-auth/react";

export async function useSession() {
    const session: Session | null = await getSession() as Session | null
    return session
}