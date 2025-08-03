"use client";

import React, { useState } from "react";

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    question: "Which word does not belong? (Dog, Cat, Apple, Mouse)",
    options: ["Dog", "Cat", "Apple", "Mouse"],
    answer: 2,
  },
  // Add more questions as needed
];

type Props = {
  onComplete: (result: any) => void;
};

export default function CognitiveQuiz({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleSelect = (idx: number) => {
    setAnswers((prev) => [...prev, idx]);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete({ answers });
    }
  };

  const q = questions[current];
  if (!q) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
      <div className="flex flex-col gap-2">
        {q.options.map((opt, idx) => (
          <button
            key={opt}
            className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-300"
            onClick={() => handleSelect(idx)}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Question {current + 1} of {questions.length}
      </div>
    </div>
  );
}
