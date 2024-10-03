import { DefaultSession } from "next-auth";
import { USER_ROLE } from "./userInterface";

declare module "next-auth/jwt" {
    interface JWT {
        user : {
            id: string;
            username: string;
            role: USER_ROLE;
        }
    }
}

declare module "next-auth" {
    interface Session {
        user: DefaultSession["user"] & {
            id: string;
            username: string;
            role: USER_ROLE
        };
    }
}