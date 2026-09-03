import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";
import { InterviewChat } from "@/components/InterviewChat";
import { ProgressSteps } from "@/components/ProgressSteps";
import { interviewMeta } from "@/content/module1-interview";

export const metadata: Metadata = {
  title: "Module 1 Mock Interview",
};

export default function Module1InterviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <ProgressSteps current="Interview" />
      <Disclaimer compact />
      <header className="mb-8 mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {interviewMeta.title}
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          {interviewMeta.scenario} End the session to receive a scorecard on
          four-part coverage, missed probes, and better questions.
        </p>
      </header>
      <InterviewChat />
    </div>
  );
}
