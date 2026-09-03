"use client";

import { useState } from "react";
import type { CaseStudyQuestion } from "@/lib/types";

export function CaseStudy({
  factPattern,
  questions,
}: {
  factPattern: string;
  questions: CaseStudyQuestion[];
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allFilled = questions.every(
    (q) => (answers[q.id] ?? "").trim().length > 20
  );

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!allFilled) return;
    setSubmitted(true);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900">Fact pattern</h2>
        <div className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
          {factPattern}
        </div>
      </section>

      <form
        onSubmit={submit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Structured questions
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Write a short analysis for each prompt. Model answers appear after
          submit.
        </p>
        <div className="mt-6 space-y-8">
          {questions.map((q, i) => (
            <div key={q.id}>
              <label
                htmlFor={q.id}
                className="block text-sm font-medium text-slate-900"
              >
                {i + 1}. {q.prompt}
              </label>
              <textarea
                id={q.id}
                rows={5}
                disabled={submitted}
                placeholder={q.placeholder}
                value={answers[q.id] ?? ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-teal-600 focus:bg-white focus:ring-2 disabled:opacity-80"
              />
              {submitted && (
                <div className="mt-3 rounded-xl border border-teal-200 bg-teal-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                    Model answer
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">
                    {q.modelAnswer}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
                    {q.scoringHints.map((hint) => (
                      <li key={hint}>{hint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {!submitted ? (
            <button
              type="submit"
              disabled={!allFilled}
              className="rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Submit & show model answers
            </button>
          ) : (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Reset case study
            </button>
          )}
          {!submitted && (
            <p className="self-center text-xs text-slate-500">
              Enter at least ~20 characters per answer to submit.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
