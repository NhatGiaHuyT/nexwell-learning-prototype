import { getToken } from "next-auth/jwt";
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (!token?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { cognitiveQuiz, goal, weeklyTime } = await req.json();
  try {
    const updatedUser = await db.user.update({
      where: { email: token.email },
      data: {
        onboardingCompleted: true,
        cognitiveQuiz,
        goal,
        weeklyTime,
      },
    });
    console.log("User onboarding completed:", updatedUser.email);
    // Return JSON with redirect URL after successful onboarding
    return NextResponse.json({ redirect: '/dashboard' });
  } catch (e: any) {
    console.error("Failed to save onboarding:", e);
    return NextResponse.json({ error: "Failed to save onboarding: " + e.message }, { status: 500 });
  }
}
