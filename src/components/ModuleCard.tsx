import Link from "next/link";
import type { CurriculumModule } from "@/lib/types";

export function ModuleCard({ module }: { module: CurriculumModule }) {
  const available = module.status === "available";

  const inner = (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition ${
        available
          ? "border-teal-200 bg-white hover:border-teal-400 hover:shadow-md"
          : "border-slate-200 bg-slate-50 opacity-90"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
            available
              ? "bg-teal-100 text-teal-800"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          {module.number}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            available
              ? "bg-emerald-100 text-emerald-800"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {available ? "Available" : "Coming soon"}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {module.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-teal-800">{module.subtitle}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {module.description}
      </p>
      {available && module.estimatedMinutes && (
        <p className="mt-4 text-xs text-slate-500">
          ~{module.estimatedMinutes} minutes · Lesson, quiz, case study,
          interview
        </p>
      )}
      {available && module.activities && (
        <div className="mt-4 flex flex-wrap gap-2">
          {module.activities.map((a) => (
            <span
              key={a.href}
              className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700"
            >
              {a.label}
            </span>
          ))}
        </div>
      )}
    </article>
  );

  if (available && module.href) {
    return (
      <Link href={module.href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
