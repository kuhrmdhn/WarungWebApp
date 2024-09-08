import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const token = await getToken({ req })
    const url = req.nextUrl.clone()
    const { pathname } = req.nextUrl

    if (!token) {
        if (pathname !== "/login") {
            url.pathname = "/login"
            return NextResponse.redirect(url)
        }
        return NextResponse.next()
    }

    try {
        const role = token.role as string
        const rolePathname = role.toLowerCase()
        const isRolePath = pathname === `/${rolePathname}`

        if (pathname === "/login") {
            if (role === "OWNER") {
                url.pathname = "/owner"
                return NextResponse.redirect(url)
            } else if (role === "CASHIER") {
                url.pathname = "/cashier"
                return NextResponse.redirect(url)
            } else if (role === "CHEF") {
                url.pathname = "/chef"
                return NextResponse.redirect(url)
            }
        }

        if (role === "OWNER" && !isRolePath) {
            return NextResponse.redirect(`/owner`)
        }
        if ((role === "CASHIER" && pathname !== "/cashier") ||
            (role === "CHEF" && pathname !== "/chef")) {
            url.pathname = `/${rolePathname}`
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