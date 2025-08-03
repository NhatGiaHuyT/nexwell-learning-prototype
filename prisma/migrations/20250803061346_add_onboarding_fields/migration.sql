-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "cognitiveQuiz" JSONB,
ADD COLUMN     "goal" TEXT,
ADD COLUMN     "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "weeklyTime" INTEGER;
