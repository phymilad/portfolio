import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    if (pathname === "/") {
        const url = new URL("/en", request.url);
        return NextResponse.redirect(url);
    }
}