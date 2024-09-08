import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const token = await getToken({ req })
    const url = req.nextUrl.clone()
    const { pathname } = req.nextUrl

    if (!token || token == null) {
        if (pathname !== "/login") {
            url.pathname = "/login"
            return NextResponse.redirect(url)
        }
        return NextResponse.next()
    }

    try {
        const role = token.role as string
        const rolePathname = role.toLowerCase()
        url.pathname = `/${rolePathname}`
        if (pathname === "/login") {
            return NextResponse.redirect(url)
        }
        if (role === "OWNER" && pathname !== "/login") {
            return NextResponse.next()
        }
        if (role === "CASHIER" || role === "CHEF" && (pathname === "/owner" || pathname === "/chef")) {
            return NextResponse.redirect(url)
        }
        return NextResponse.next()
    } catch (error) {
        console.error(error)
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: ["/owner/:path*", "/cashier", "/login", "/chef"]
}
