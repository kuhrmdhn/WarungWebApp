import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const token = await getToken({ req })
    const url = req.nextUrl.clone()
    const { pathname } = req.nextUrl
    if (!token) {
        if (pathname !== "/login") {
            const callbackUrl = `/login?callback=${url.pathname}`
            return NextResponse.redirect(new URL(callbackUrl, req.url))
        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ["/owner/:path*", "/cashier", "/login", "/chef", "/profile"]
}