import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { ProgressSteps } from "@/components/ProgressSteps";
import {
  exclusionsNote,
  fourPartSections,
  module1Intro,
} from "@/content/module1-lesson";

export const metadata: Metadata = {
  title: "Module 1 · Four-Part Test",
};

export default function Module1LessonPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <ProgressSteps current="Lesson" />
      <Disclaimer compact />

      <header className="mt-6">
        <p className="text-sm font-medium text-teal-800">{module1Intro.statute}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {module1Intro.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          {module1Intro.overview}
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Learning objectives
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {module1Intro.learningObjectives.map((obj) => (
            <li key={obj}>{obj}</li>
          ))}
        </ul>
      </section>

      <div className="mt-8 space-y-6">
        {fourPartSections.map((section, index) => (
          <article
            key={section.id}
            id={section.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Part {index + 1} of 4
              </span>
            </div>
            <p className="mt-2 text-xs font-medium text-teal-800">
              {section.statuteRef}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {section.summary}
            </p>
            <h3 className="mt-6 text-sm font-semibold text-slate-900">
              Key points
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {section.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  Example
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-800">
                  {section.example}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
                  Common pitfall
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-800">
                  {section.commonPitfall}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-slate-300 bg-slate-900 p-6 text-slate-100 sm:p-8">
        <h2 className="text-lg font-semibold">{exclusionsNote.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {exclusionsNote.body}
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/module-1/quiz"
          className="rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-800"
        >
          Continue to quiz
        </Link>
        <Link
          href="/module-1/case-study"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
        >
          Skip to case study
        </Link>
      </div>
    </div>
  );
}
