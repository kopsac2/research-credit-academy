import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { ModuleCard } from "@/components/ModuleCard";
import { academyMeta, curriculum } from "@/content/curriculum";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-teal-200">
            R&D tax credit training
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {academyMeta.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            {academyMeta.tagline}. Build fluency in the four-part test, then
            practice with quizzes, case studies, and scripted SME interviews.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/module-1"
              className="rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-teal-400"
            >
              Start Module 1
            </Link>
            <Link
              href="/module-1/interview"
              className="rounded-lg border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Try mock interview
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Disclaimer />
        <div className="mt-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Curriculum overview
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Module 1 is available in this demo. Modules 2–4 are outlined for
              future expansion.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {curriculum.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>
    </div>
  );
}
