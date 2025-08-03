"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CognitiveQuiz from "./CognitiveQuiz";
import GoalTimeSurvey from "./GoalTimeSurvey";
import { useOnboarding } from "./useOnboarding";

const steps = ["Cognitive Quiz", "Goal & Time Survey"];

export default function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const [quizResult, setQuizResult] = useState<any>(null);
  const [surveyResult, setSurveyResult] = useState<any>(null);
  const router = useRouter();
  const { submitOnboarding, loading, error } = useOnboarding();

  const handleQuizComplete = (result: any) => {
    setQuizResult(result);
    setStep(1);
  };

  const handleSurveyComplete = async (result: any) => {
    setSurveyResult(result);
    if (!quizResult) return;
    const success = await submitOnboarding({
      cognitiveQuiz: quizResult,
      goal: result.goal,
      weeklyTime: result.time,
    });
    if (success) {
      // The API will handle redirection, so we don't need to do anything here
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Onboarding Wizard</h2>
      <div className="mb-6 flex gap-2">
        {steps.map((label, idx) => (
          <div
            key={label}
            className={`flex-1 h-2 rounded ${idx <= step ? "bg-blue-500" : "bg-gray-200"}`}
          />
        ))}
      </div>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {step === 0 && <CognitiveQuiz onComplete={handleQuizComplete} />}
      {step === 1 && <GoalTimeSurvey onComplete={handleSurveyComplete} />}
      {loading && <div className="mt-4 text-blue-600">Saving your onboarding...</div>}
    </div>
  );
}
