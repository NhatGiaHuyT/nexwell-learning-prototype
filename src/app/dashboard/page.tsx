import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import DashboardMain from "./DashboardMain";

export default async function DashboardPage() {
  console.log("Dashboard page called");
  const session = await auth();
  console.log("Session in dashboard:", JSON.stringify(session, null, 2));
  
  // Redirect to login if not authenticated
  if (!session?.user) {
    console.log("No session found, redirecting to /auth/login");
    redirect("/auth/login");
  }
  
  console.log("Session found, fetching user from database");
  // Get user from database to check onboarding status
  const user = await db.user.findUnique({ 
    where: { email: session.user.email ?? undefined } 
  });
  
  console.log("User from database:", JSON.stringify(user, null, 2));
  
  // Redirect to onboarding if not completed
  if (user && !user.onboardingCompleted) {
    console.log("Onboarding not completed, redirecting to /onboarding");
    redirect("/onboarding");
  }
  
  console.log("Rendering dashboard page");
  return <DashboardMain />;
}
