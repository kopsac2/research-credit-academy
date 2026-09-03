import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { Disclaimer } from "@/components/Disclaimer";
import { ProgressSteps } from "@/components/ProgressSteps";
import { caseStudy } from "@/content/module1-case-study";

export const metadata: Metadata = {
  title: "Module 1 Case Study",
};

export default function Module1CaseStudyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <ProgressSteps current="Case Study" />
      <Disclaimer compact />
      <header className="mb-8 mt-6">
        <p className="text-sm font-medium text-teal-800">{caseStudy.industry}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          {caseStudy.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Analyze the fact pattern, submit your responses, then compare against
          model answers.
        </p>
      </header>
      <CaseStudy
        factPattern={caseStudy.factPattern}
        questions={caseStudy.questions}
      />
    </div>
  );
}
