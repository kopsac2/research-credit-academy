import type { CurriculumModule } from "@/lib/types";

export const curriculum: CurriculumModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "The Four-Part Test",
    subtitle: "IRC §41(d) Qualified Research",
    description:
      "Master the statutory and regulatory framework for determining whether activities constitute qualified research under IRC §41(d) and Treas. Reg. §1.41-4.",
    status: "available",
    href: "/module-1",
    estimatedMinutes: 45,
    activities: [
      { label: "Lesson", href: "/module-1" },
      { label: "Quiz", href: "/module-1/quiz" },
      { label: "Case Study", href: "/module-1/case-study" },
      { label: "Mock Interview", href: "/module-1/interview" },
    ],
  },
  {
    id: "module-2",
    number: 2,
    title: "Qualified Research Expenses",
    subtitle: "QREs under §41(b)",
    description:
      "Identify and quantify wages, supply costs, and contract research expenses that may be included in the credit computation.",
    status: "coming_soon",
  },
  {
    id: "module-3",
    number: 3,
    title: "Funded Research",
    subtitle: "Exclusions & risk of loss",
    description:
      "Apply the funded research exclusion, including payments under contracts, risk of loss analysis, and substantial rights considerations.",
    status: "coming_soon",
  },
  {
    id: "module-4",
    number: 4,
    title: "Documentation & Interviews",
    subtitle: "Evidence & SME engagement",
    description:
      "Build defensible study files, structure SME interviews, and align contemporaneous records with the four-part test.",
    status: "coming_soon",
  },
];

export const academyMeta = {
  name: "Research Credit Academy",
  tagline: "Training for new R&D tax credit associates",
  disclaimer:
    "Educational demo only. Not legal, tax, or accounting advice. Always consult applicable statutes, regulations, and firm guidance.",
};
