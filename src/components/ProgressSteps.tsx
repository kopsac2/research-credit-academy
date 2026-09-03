import Link from "next/link";

const steps = [
  { label: "Lesson", href: "/module-1" },
  { label: "Quiz", href: "/module-1/quiz" },
  { label: "Case Study", href: "/module-1/case-study" },
  { label: "Interview", href: "/module-1/interview" },
];

export function ProgressSteps({ current }: { current: string }) {
  return (
    <nav aria-label="Module progress" className="mb-8">
      <ol className="flex flex-wrap gap-2">
        {steps.map((step, index) => {
          const active = step.label.toLowerCase() === current.toLowerCase();
          return (
            <li key={step.href}>
              <Link
                href={step.href}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-teal-700 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                    active ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {index + 1}
                </span>
                {step.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
