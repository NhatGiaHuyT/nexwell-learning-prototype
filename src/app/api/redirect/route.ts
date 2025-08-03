import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("Redirect API called");
  const session = await auth();
  console.log("Session in redirect API:", JSON.stringify(session, null, 2));
  
  if (!session?.user?.email) {
    console.log("No session or email found, redirecting to login");
    // If not logged in, redirect to login page
    return NextResponse.redirect(new URL('/auth/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
  }
  
  console.log("Session found, fetching user from database");
  // Get user from database
  const user = await db.user.findUnique({ 
    where: { email: session.user.email },
    select: { onboardingCompleted: true, id: true, email: true }
  });
  console.log("User from database:", JSON.stringify(user, null, 2));
  
  if (!user) {
    console.log("User not found in database, redirecting to login");
    // If user doesn't exist, redirect to login page
    return NextResponse.redirect(new URL('/auth/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
  }
  
  // Check if user has completed onboarding
  if (!user.onboardingCompleted) {
    console.log("Onboarding not completed, redirecting to onboarding");
    // If not completed onboarding, redirect to onboarding
    return NextResponse.redirect(new URL('/onboarding', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
  }
  
  console.log("Onboarding completed, redirecting to dashboard");
  // If onboarding completed, redirect to dashboard
  return NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
}
