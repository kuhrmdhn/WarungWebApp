import { User } from "./userInterface";
import { Account, Profile } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface Session {
    sub?: string
    id?: number
    user: User
    iat?: number
    exp?: number
    jti?: string 
}

export interface JWTtypes {
    token: JWT;
    user: User;
    account: Account | null;
    profile?: Profile | undefined;
    trigger?: "signIn" | "signUp" | "update" | undefined;
    isNewUser?: boolean | undefined;
    session?: any;
}