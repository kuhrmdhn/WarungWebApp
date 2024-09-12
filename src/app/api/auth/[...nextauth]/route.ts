import { userRouter } from "@/lib/database/userRouter";
import { JWTtypes } from "@/types/token";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "John Doe" },
                password: { label: "Password", type: "password", placeholder: "******" }
            },
            async authorize(credentials): Promise<any> {
                try {
                    const { username, password } = credentials as { username: string, password: string }
                    const user = await userRouter.getUser(username, password)
                    return user
                } catch (error) {
                    console.error("Authorize error, ", error)
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
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: { session: any, token: JWT }): Promise<any> {
            if (token) {
                session.user.id = token.id
                session.user.name = token.username
                session.user.role = token.role
            }
            return session
        },
    },
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }