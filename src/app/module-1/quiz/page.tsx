import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";
import { ProgressSteps } from "@/components/ProgressSteps";
import { Quiz } from "@/components/Quiz";
import { module1Quiz } from "@/content/module1-quiz";

export const metadata: Metadata = {
  title: "Module 1 Quiz",
};

export default function Module1QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <ProgressSteps current="Quiz" />
      <Disclaimer compact />
      <header className="mb-8 mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Module 1 knowledge check
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          {module1Quiz.length} multiple-choice questions with immediate feedback
          and rationales. Retry anytime.
        </p>
      </header>
      <Quiz questions={module1Quiz} />
    </div>
  );
}
