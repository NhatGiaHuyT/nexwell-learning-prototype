"use client";

import React, { useState } from "react";

type Props = {
  onComplete: (result: any) => void;
};

export default function GoalTimeSurvey({ onComplete }: Props) {
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ goal, time });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-medium">What is your main learning goal?</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        >
          <option value="" disabled>Select a goal</option>
          <option value="career">Advance my career</option>
          <option value="skills">Learn new skills</option>
          <option value="hobby">Personal interest/hobby</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">How many hours per week can you dedicate?</label>
        <input
          type="number"
          min={1}
          max={40}
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Finish Onboarding
      </button>
    </form>
  );
}
