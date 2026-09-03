import { partLabels } from "@/content/module1-interview";
import type { Scorecard } from "@/lib/interview-engine";

export function ScorecardView({ scorecard }: { scorecard: Scorecard }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Interview scorecard
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {scorecard.summary}
          </p>
        </div>
        <div className="rounded-2xl bg-teal-50 px-5 py-3 text-center">
          <div className="text-3xl font-bold text-teal-800">
            {scorecard.coveragePercent}%
          </div>
          <div className="text-xs font-medium text-teal-700">
            four-part coverage
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Covered</h3>
          <ul className="mt-2 space-y-1 text-sm text-emerald-800">
            {scorecard.coveredParts.length === 0 && (
              <li className="text-slate-500">None yet</li>
            )}
            {scorecard.coveredParts.map((p) => (
              <li key={p}>✓ {partLabels[p]}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Missed</h3>
          <ul className="mt-2 space-y-1 text-sm text-rose-800">
            {scorecard.missedParts.length === 0 && (
              <li className="text-emerald-700">All prongs covered</li>
            )}
            {scorecard.missedParts.map((p) => (
              <li key={p}>○ {partLabels[p]}</li>
            ))}
          </ul>
        </div>
      </div>

      {scorecard.missedProbes.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-900">
            Missed probes
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {scorecard.missedProbes.map((probe) => (
              <li key={probe}>{probe}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-slate-900">
          Better questions to try
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {scorecard.betterQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>

      {scorecard.revealedFacts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-900">
            Facts you surfaced
          </h3>
          <ul className="mt-2 space-y-2">
            {scorecard.revealedFacts.map((f) => (
              <li
                key={f.id}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                <span className="font-medium text-teal-800">
                  {partLabels[f.part]}:
                </span>{" "}
                {f.revealText}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
