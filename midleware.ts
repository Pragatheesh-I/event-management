import { NextRequest, NextResponse } from "next/server"
import { verifyToken } from "./lib/auth"
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value
 
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
 
  try {
    const decoded: any = verifyToken(token)
 
    const { role } = decoded
 
    if (
      request.nextUrl.pathname.startsWith("/dashboard/organizer") &&
      role !== "ORGANIZER"
    ) {
      return NextResponse.redirect(new URL("/dashboard/user", request.url))
    }
 
    if (
      request.nextUrl.pathname.startsWith("/dashboard/user") &&
      role !== "USER"
    ) {
      return NextResponse.redirect(new URL("/dashboard/organizer", request.url))
    }
 
    return NextResponse.next()
 
  } catch {
    return NextResponse.redirect(new URL("/login", request.url))
  }
}
 
export const config = {
  matcher: ["/dashboard/:path*"]
}