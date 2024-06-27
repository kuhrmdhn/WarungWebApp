import { JWTtypes } from "@/lib/interface/token";
import { User } from "@/lib/interface/userInterface";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


async function getUser(username: string, password: string) {
    const { data: user } = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user?username=${username}&&password=${[password]}`)
    return user
}

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "John Doe" },
                password: { label: "Password", type: "password", placeholder: "******" }
            },
            async authorize(credentials): Promise<any> {
                const { username, password } = credentials as { username: string, password: string }
                const user = await getUser(username, password)
                if (user) {
                    return user
                } else {
                    return null
                }
            },
        })
    ],
    callbacks: {
        async jwt(params: JWTtypes): Promise<any> {
            const { token, user } = params;
            if (user) {
                token.id = user.id
                token.username = user.username
                token.password = user.password
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: { session: any, token: JWT }): Promise<any> {
            if (token) {
                session.user.id = token.id
                session.user.username = token.username
                session.user.password = token.password
                session.user.role = token.role
            }
            return token
        },
    },
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }