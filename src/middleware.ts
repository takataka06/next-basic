import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.includes(".")) {
    console.log("middleware test");
  }
  return NextResponse.next(); //リクエストを続行
}

export const config = {
  matcher: ["/blog/:path*"], //blogフォルダ以下にミドルウェアを適用するパス
}