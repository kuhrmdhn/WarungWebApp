import { userRouter } from "@/lib/database/userRouter";
import { User, USER_ROLE, UserToken } from "@/types/userInterface";
import { NextAuthOptions, Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const { getUser } = userRouter

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
            async authorize(credentials): Promise<UserToken | null> {
                try {
                    const { username, password } = credentials as { username: string, password: string }
                    const user = await getUser(username, password)
                    if (user) {
                        return {
                            id: user.id,
                            username: user.username,
                            role: user.role
                        };
                    }
                    return null;
                } catch (error) {
                    console.error("Authorize error, ", error)
                    return null
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: User | AdapterUser }): Promise<JWT> {
            if (user) {
                token.user = {
                    id: user.id,
                    username: (user as UserToken).username,  // Ensure user has username and role
                    role: (user as UserToken).role,
                };
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            if (token.user) {
                session.user.id = token.user.id;
                session.user.name = token.user.username;
                session.user.role = token.user.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60,  // 24 hours
        updateAge: 24 * 60 * 60  // Force session update every 24 hours
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
