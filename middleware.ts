import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  let res = NextResponse.next();
  let supabase = createMiddlewareClient({
    req,
    res,
  });

  await supabase.auth.getSession();
  return res;
}
