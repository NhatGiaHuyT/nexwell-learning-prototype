import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  console.log("Middleware called for:", req.nextUrl.pathname);
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log("Token in middleware:", JSON.stringify(token, null, 2));
  const url = req.nextUrl.clone();

  // Only protect app routes, not static or API
  if (url.pathname.startsWith("/dashboard") || url.pathname.startsWith("/onboarding")) {
    console.log("Protected route accessed");
    if (!token || !token.email) {
      console.log("No token or email, redirecting to login");
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
    console.log("Token and email found, allowing access");
    // Note: We can't check onboarding status here because PrismaClient
    // cannot run in the edge environment where middleware executes
  }
  console.log("Middleware allowing request to proceed");
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding", "/((?!api|_next|static|favicon.ico).*)"],
};
