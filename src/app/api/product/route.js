import { NextResponse, NextRequest } from "next/server"
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'


export async function GET(req, res) {
    const id = await req.nextUrl.searchParams.get('id')
    // redirect
    // return redirect('/login')
    return NextResponse.json({ id: id })
}
export async function POST(req, res) {
    // handing for data
    const formData = await req.formData()
    const image = formData.get("image")

    // handing headers
    const headerList = headers()
    const myHeader = headerList.get('auth-token')

    // work with cookies
    const myCookies = req.cookies.getAll()
    console.log("myCookies :", myCookies);




    return NextResponse.json({ image: image, myToken: myHeader }, { status: 200 })
}


