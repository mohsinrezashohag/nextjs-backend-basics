// Auth login
// Cookies
// Session
// CSRF
// Rate Limiting
// Token Refresh
// JWT Token Encode- Decode
// private key

import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

/*
set headers from NextResponse
*/


export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith('/api/product')) {
        const requestHeaders = new Headers(req.headers)
        const token = requestHeaders.get('auth-token')


        if (token === 'xyz-my-auth-23') {
            const response = NextResponse.next()
            response.headers.set('Set-Cookie', [
                `name=mohsin reza; Path=/; Max-Age=3600; path=/; HttpOnly`,
            ])
            return response
        }
        else {
            return NextResponse.json({
                msg: "something wrong in middleware"
            })
        }
    }
}






/*
set headers from NextRequest
export function middleware(req, res) {
    // conditional middleware concept
    if (req.nextUrl.pathname.startsWith('/api/product')) {
        const requestHeaders = new Headers(req.headers)
        const token = requestHeaders.get('auth-token')

        if (token === 'xyz-my-auth-23') {
            // setting middleware through backend which is accessible on GET Request
            requestHeaders.set('user_name', 'mohsin reza')
            requestHeaders.set('user_id', '0009')
            return NextResponse.next({
                request: { headers: requestHeaders },
            })
        } else {
            return NextResponse.json(
                { message: 'something went wrong on middleware' },
                { status: 401 }
            )
        }
    }
}
*/
export const config = {
    matcher: '/api/:path*',
}
