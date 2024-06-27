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
        }

        if (token.role === "OWNER") {
            if (pathname !== "/login") {
                return NextResponse.next()
            }
        } else if (token.role === "CASHIER") {
            if (pathname === "/owner") {
                url.pathname = "/cashier"
                return NextResponse.redirect(url)
            }
            return NextResponse.next()
        } else {
            url.pathname = "/login"
            return NextResponse.redirect(url)
        }
    } catch (error) {
        console.error(error)
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: ["/owner", "/cashier", "/login"]
>>>>>>> f6c5385f08cecc5469601c2d61842bbd09df05ec
}