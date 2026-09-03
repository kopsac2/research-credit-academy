import type { QuizQuestion } from "@/lib/types";

export const module1Quiz: QuizQuestion[] = [
  {
    id: "q1",
    prompt:
      "Which of the following best describes the “permitted purpose” requirement under IRC §41(d)?",
    options: [
      {
        id: "a",
        text: "The research must relate primarily to style, taste, or cosmetic design of a business component.",
      },
      {
        id: "b",
        text: "The research must be intended to discover information useful in developing a new or improved business component relating to function, performance, reliability, or quality.",
      },
      {
        id: "c",
        text: "The research must be funded entirely by the taxpayer with no customer involvement.",
      },
      {
        id: "d",
        text: "The research must result in a patentable invention.",
      },
    ],
    correctOptionId: "b",
    rationale:
      "IRC §41(d)(1)(B) and Treas. Reg. §1.41-4 focus permitted purpose on function, performance, reliability, or quality—not aesthetics. A patent is neither required nor conclusive.",
  },
  {
    id: "q2",
    prompt:
      "An activity is “technological in nature” when it fundamentally relies on principles of which fields?",
    options: [
      {
        id: "a",
        text: "Marketing science, consumer psychology, and brand strategy",
      },
      {
        id: "b",
        text: "Physical or biological sciences, engineering, or computer science",
      },
      {
        id: "c",
        text: "Accounting, finance, and tax law",
      },
      {
        id: "d",
        text: "Any STEM-adjacent job title held by project staff",
      },
    ],
    correctOptionId: "b",
    rationale:
      "Treas. Reg. §1.41-4(a)(4) requires reliance on the physical or biological sciences, engineering, or computer science—not social sciences or job titles alone.",
  },
  {
    id: "q3",
    prompt:
      "Under Treas. Reg. §1.41-4, uncertainty concerning which of the following can support the elimination-of-uncertainty prong?",
    options: [
      {
        id: "a",
        text: "Only whether the taxpayer can obtain a patent",
      },
      {
        id: "b",
        text: "Capability or method of developing/improving the business component, or its appropriate design",
      },
      {
        id: "c",
        text: "Only whether customers will buy the product",
      },
      {
        id: "d",
        text: "Whether the project is on schedule",
      },
    ],
    correctOptionId: "b",
    rationale:
      "Uncertainty must relate to capability, method, or appropriate design of the business component—not market demand, schedules, or patentability alone.",
  },
  {
    id: "q4",
    prompt:
      "A process of experimentation generally involves which sequence of activities?",
    options: [
      {
        id: "a",
        text: "Selecting a vendor, signing a PO, and accepting delivery",
      },
      {
        id: "b",
        text: "Identifying uncertainty, identifying one or more alternatives, and evaluating those alternatives through modeling, simulation, or systematic trial and error",
      },
      {
        id: "c",
        text: "Writing a project charter and holding weekly status meetings",
      },
      {
        id: "d",
        text: "Copying a competitor’s publicly available design without testing",
      },
    ],
    correctOptionId: "b",
    rationale:
      "Treas. Reg. §1.41-4(a)(5) describes a process of experimentation as evaluating alternatives to eliminate uncertainty through scientific or engineering methods.",
  },
  {
    id: "q5",
    prompt:
      "Which statement about the “substantially all” rule for process of experimentation is most accurate?",
    options: [
      {
        id: "a",
        text: "At least one hour of experimentation is enough for the entire project.",
      },
      {
        id: "b",
        text: "Substantially all (generally 80% or more) of the research activities for the business component must constitute elements of a process of experimentation for a qualified purpose.",
      },
      {
        id: "c",
        text: "Every employee on the project must spend 100% of their time experimenting.",
      },
      {
        id: "d",
        text: "The rule only applies to software development.",
      },
    ],
    correctOptionId: "b",
    rationale:
      "IRC §41(d)(1)(C) and the regulations require that substantially all of the research activities constitute elements of a process of experimentation for a permitted purpose.",
  },
  {
    id: "q6",
    prompt:
      "A UX team only changes button colors and marketing copy on an existing app. Which four-part element is most clearly lacking?",
    options: [
      {
        id: "a",
        text: "Technological in nature and permitted purpose related to function/performance/reliability/quality",
      },
      {
        id: "b",
        text: "The existence of a business component",
      },
      {
        id: "c",
        text: "The company’s eligibility as a taxpayer",
      },
      {
        id: "d",
        text: "Nothing—cosmetic UI work always qualifies",
      },
    ],
    correctOptionId: "a",
    rationale:
      "Style, taste, and cosmetic design are outside the permitted-purpose focus of §41(d), and color/copy changes typically do not rely on technological principles to eliminate design uncertainty.",
  },
  {
    id: "q7",
    prompt:
      "True or false: Satisfying the four-part test means the activities cannot be excluded under IRC §41(d)(4).",
    options: [
      {
        id: "a",
        text: "True — the four-part test is the only requirement.",
      },
      {
        id: "b",
        text: "False — activities may still be excluded (e.g., funded research, research after commercial production, foreign research).",
      },
      {
        id: "c",
        text: "True — exclusions only apply to the ASC computation method.",
      },
      {
        id: "d",
        text: "False — but only the funded research exclusion can ever apply.",
      },
    ],
    correctOptionId: "b",
    rationale:
      "IRC §41(d)(4) lists multiple exclusions that can disqualify activities even when the four-part test is otherwise met.",
  },
];
