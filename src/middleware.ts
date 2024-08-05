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
        if (pathname === "/login") {
            if (token.role === "OWNER") {
                url.pathname = "/owner"
                return NextResponse.redirect(url)
            } else if (token.role === "CASHIER") {
                url.pathname = "/cashier"
                return NextResponse.redirect(url)
            }
            else if (token.role === "CHEF") {
                url.pathname = "/chef"
                return NextResponse.redirect(url)
            }
        }

        if (token.role === "OWNER") {
            if (pathname !== "/login") {
                return NextResponse.next()
            }
        } else if (token.role === "CASHIER") {
            if (pathname === "/owner" || pathname === "/chef") {
                url.pathname = "/cashier"
                return NextResponse.redirect(url)
            }
            return NextResponse.next()
        } else if (token.role === "CHEF") {
            if (pathname === "/owner" || pathname === "/cashier") {
                url.pathname = "/chef"
                return NextResponse.redirect(url)
            }
        }
    } catch (error) {
        console.error(error)
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: ["/owner/:path*", "/cashier", "/login", "/chef"]
}
