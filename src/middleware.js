import { NextResponse, NextRequest } from "next/server";

export function middleware(req, res) {

    // conditional middleware concept
    if (req.nextUrl.pathname.startsWith('/api/product')) {
        console.log("middleware getting in product api");
    }
}

export const config = {
    matcher: '/api/:path*',
}