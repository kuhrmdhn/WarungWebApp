import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
    const loginStatus = req.cookies.get("loginStatus")
    if (!loginStatus) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
    return NextResponse.next()

}

export const config = {
    matcher: ["/owner", "/cashier"]
}