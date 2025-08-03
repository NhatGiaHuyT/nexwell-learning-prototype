import { useState } from "react";
import { useRouter } from "next/navigation";

export function useOnboarding() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const submitOnboarding = async (data: {
    cognitiveQuiz: any;
    goal: string;
    weeklyTime: number;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save onboarding");
      const result = await res.json();
      
      // Handle redirect if provided
      if (result.redirect) {
        router.push(result.redirect);
      }
      
      setLoading(false);
      return true;
    } catch (e: any) {
      setError(e.message || "Unknown error");
      setLoading(false);
      return false;
    }
  };

  return { submitOnboarding, loading, error };
}
