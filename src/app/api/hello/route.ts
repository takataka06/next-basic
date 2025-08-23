import { NextResponse } from "next/server" // json で返す場合

export async function GET() {
  return NextResponse.json([
    {id:1, name:"taka"},
    {id:2, name:"kuga"},
  ])
}
