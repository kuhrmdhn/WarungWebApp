import { Session } from "@/types/token";
import { useSession as nextAuthUseSession } from "next-auth/react";

export function useUserRole() {
    const { data: session } = nextAuthUseSession() as { data: Session | null };
    if (!session) return "empty"
    if (!session.user) return "User is empty";
    if (!session.user.role) return "Role undefined"
    const userRole = session.user.role;
    return userRole;
}
