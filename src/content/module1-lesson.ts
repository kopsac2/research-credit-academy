import type { LessonSection } from "@/lib/types";

export const module1Intro = {
  title: "Module 1: The Four-Part Test",
  statute: "IRC §41(d) · Treas. Reg. §1.41-4",
  overview:
    "To claim the research credit, activities must constitute “qualified research.” Under IRC §41(d)(1), research must satisfy four cumulative requirements—commonly called the four-part test—and must not fall within the statutory exclusions of §41(d)(4). Treas. Reg. §1.41-4 elaborates how the IRS applies these standards.",
  learningObjectives: [
    "State each element of the four-part test in statutory language",
    "Distinguish business-component level analysis from project labels",
    "Spot common interview cues for uncertainty and experimentation",
    "Avoid treating routine QA, style changes, or funded work as qualified research",
  ],
};

export const fourPartSections: LessonSection[] = [
  {
    id: "permitted-purpose",
    title: "1. Permitted Purpose",
    statuteRef: "IRC §41(d)(1)(B); Treas. Reg. §1.41-4(a)(2)(iii)",
    summary:
      "The activity must be intended to discover information that would be useful in developing a new or improved business component—primarily relating to function, performance, reliability, or quality (not style, taste, or cosmetic design).",
    keyPoints: [
      "Focus on a business component (product, process, software, technique, formula, or invention) held for sale, lease, license, or used in the taxpayer’s trade or business.",
      "Improvements to function, performance, reliability, or quality generally qualify; aesthetic or cosmetic changes generally do not.",
      "The purpose is evaluated from the taxpayer’s perspective at the time of the research.",
    ],
    example:
      "A manufacturer redesigns a gearbox to increase torque capacity and reduce failure rates under load. That purpose relates to function, performance, and reliability.",
    commonPitfall:
      "Treating marketing-driven packaging refreshes or UI color schemes as permitted-purpose research.",
  },
  {
    id: "technological-in-nature",
    title: "2. Technological in Nature",
    statuteRef: "IRC §41(d)(1)(B)(i); Treas. Reg. §1.41-4(a)(4)",
    summary:
      "The research must fundamentally rely on principles of the physical or biological sciences, engineering, or computer science—not social sciences, arts, or humanities.",
    keyPoints: [
      "The information sought must be technological in nature; the process used to discover it must rely on hard-science principles.",
      "Computer science includes software engineering methods grounded in computational principles.",
      "Economics, psychology, market research, and management studies typically fail this prong.",
    ],
    example:
      "Developing a new alloy heat-treatment schedule based on materials science principles is technological in nature.",
    commonPitfall:
      "Assuming any software work automatically qualifies—requirements gathering or content updates alone may not rely on computer science principles.",
  },
  {
    id: "elimination-of-uncertainty",
    title: "3. Elimination of Uncertainty",
    statuteRef: "IRC §41(d)(1)(A); Treas. Reg. §1.41-4(a)(3)",
    summary:
      "The information sought must be intended to eliminate uncertainty concerning the capability or method of developing or improving the business component, or the appropriate design of the component.",
    keyPoints: [
      "Uncertainty exists if the information available to the taxpayer does not establish capability, method, or appropriate design.",
      "Uncertainty is evaluated based on the taxpayer’s information—not industry “best practices” in the abstract.",
      "Knowing that a goal is desirable is not the same as knowing how to achieve it with confidence.",
    ],
    example:
      "Engineers know they need a battery pack that sustains X cycles at Y temperature, but do not know which cell chemistry and thermal architecture will meet the spec.",
    commonPitfall:
      "Confusing “we have not started yet” with technical uncertainty—mere project planning is not elimination of uncertainty.",
  },
  {
    id: "process-of-experimentation",
    title: "4. Process of Experimentation",
    statuteRef: "IRC §41(d)(1)(C); Treas. Reg. §1.41-4(a)(5)",
    summary:
      "Substantially all of the research activities must constitute elements of a process of experimentation for a qualified purpose—evaluating one or more alternatives to achieve a result where capability, method, or design is uncertain.",
    keyPoints: [
      "A process of experimentation typically involves identifying uncertainty, identifying alternatives, and testing/evaluating those alternatives through modeling, simulation, systematic trial and error, or other methods.",
      "“Substantially all” (generally 80% or more) of the research activities for the business component must be elements of that process for a permitted purpose.",
      "Simple trial-and-error without a systematic evaluation of alternatives may be insufficient.",
    ],
    example:
      "The team builds prototype battery modules, runs thermal chamber tests, models heat dissipation, and iterates cell layout based on measured results.",
    commonPitfall:
      "Documenting only the final design choice without capturing the alternatives considered and how they were evaluated.",
  },
];

export const exclusionsNote = {
  title: "Remember: Statutory Exclusions",
  body: "Even if the four-part test is met, activities listed in IRC §41(d)(4)—including research after commercial production, adaptation of existing business components, duplication, surveys/studies, funded research, foreign research, and certain social science / internal-use software rules—may be excluded. Module 3 will cover funded research in depth.",
};
