"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/lib/types";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = questions[index];
  const progress = useMemo(
    () => Math.round(((index + (finished ? 1 : 0)) / questions.length) * 100),
    [finished, index, questions.length]
  );

  function submit() {
    if (!selected || revealed) return;
    setRevealed(true);
    setAnswers((prev) => ({ ...prev, [question.id]: selected }));
    if (selected === question.correctOptionId) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  function retry() {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
    setAnswers({});
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Quiz results</h2>
        <p className="mt-2 text-slate-600">
          You scored{" "}
          <span className="font-semibold text-teal-800">
            {score} / {questions.length}
          </span>{" "}
          ({pct}%).
        </p>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-teal-600 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <ul className="mt-8 space-y-4">
          {questions.map((q, i) => {
            const chose = answers[q.id];
            const ok = chose === q.correctOptionId;
            return (
              <li
                key={q.id}
                className={`rounded-xl border p-4 ${
                  ok
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-rose-200 bg-rose-50"
                }`}
              >
                <p className="text-sm font-medium text-slate-900">
                  {i + 1}. {q.prompt}
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Your answer:{" "}
                  {q.options.find((o) => o.id === chose)?.text ?? "—"}
                </p>
                {!ok && (
                  <p className="mt-1 text-xs text-slate-600">
                    Correct:{" "}
                    {q.options.find((o) => o.id === q.correctOptionId)?.text}
                  </p>
                )}
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  {q.rationale}
                </p>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={retry}
          className="mt-8 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800"
        >
          Retry quiz
        </button>
      </div>
    );
  }

  const isCorrect = selected === question.correctOptionId;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">
          Question {index + 1} of {questions.length}
        </p>
        <p className="text-sm text-slate-500">{progress}% through</p>
      </div>
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-teal-600"
          style={{ width: `${((index) / questions.length) * 100}%` }}
        />
      </div>
      <h2 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
        {question.prompt}
      </h2>
      <fieldset className="mt-6 space-y-3">
        <legend className="sr-only">Answer choices</legend>
        {question.options.map((option) => {
          const checked = selected === option.id;
          let styles =
            "border-slate-200 hover:border-teal-300 hover:bg-teal-50/50";
          if (revealed && option.id === question.correctOptionId) {
            styles = "border-emerald-400 bg-emerald-50";
          } else if (revealed && checked && !isCorrect) {
            styles = "border-rose-400 bg-rose-50";
          } else if (checked) {
            styles = "border-teal-500 bg-teal-50";
          }
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer gap-3 rounded-xl border p-4 text-sm leading-relaxed text-slate-800 transition ${styles}`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={checked}
                disabled={revealed}
                onChange={() => setSelected(option.id)}
                className="mt-1"
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </fieldset>

      {revealed && (
        <div
          className={`mt-6 rounded-xl border p-4 text-sm leading-relaxed ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50 text-emerald-950"
              : "border-rose-200 bg-rose-50 text-rose-950"
          }`}
        >
          <p className="font-semibold">
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="mt-1">{question.rationale}</p>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {!revealed ? (
          <button
            type="button"
            disabled={!selected}
            onClick={submit}
            className="rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Check answer
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            {index + 1 >= questions.length ? "See results" : "Next question"}
          </button>
        )}
      </div>
    </div>
  );
}
