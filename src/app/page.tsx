import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { db } from "@/server/db";

export default async function Page() {
  console.log("Main page called");
  const session = await auth();
  
  // Debugging: Log session information
  console.log("Session in main page:", JSON.stringify(session, null, 2));
  
  // If not authenticated, show homepage
  if (!session?.user) {
    console.log("No session found, redirecting to /home");
    redirect("/home");
  }
  
  console.log("Session found, checking user in database");
  
  // Check if user exists in database
  const user = await db.user.findUnique({ 
    where: { email: session.user.email ?? undefined } 
  });
  
  console.log("User from database:", JSON.stringify(user, null, 2));
  
  // If onboarding not completed, redirect to onboarding
  if (user && !user.onboardingCompleted) {
    console.log("Onboarding not completed, redirecting to /onboarding");
    redirect("/onboarding");
  }
  
  // If authenticated and onboarding completed, redirect to dashboard
  console.log("Onboarding completed, redirecting to /dashboard");
  redirect("/dashboard");
}
