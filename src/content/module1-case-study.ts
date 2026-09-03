import type { CaseStudyQuestion } from "@/lib/types";

export const caseStudy = {
  title: "Case Study: Apex Motion Controls",
  company: "Apex Motion Controls",
  industry: "Industrial automation — servo drive firmware",
  factPattern: `Apex Motion Controls develops servo drives sold to robotics OEMs. In tax year 2025, Project Helix aimed to ship a new firmware release that would:

• Cut motor settling time by 30% on high-inertia loads
• Maintain thermal limits already validated on the prior generation hardware
• Support a new encoder protocol requested by two strategic customers

The firmware team (3 engineers) spent most of Q2–Q3 evaluating competing control-loop algorithms (PID variants vs. adaptive observers), running hardware-in-the-loop simulations, and bench-testing prototypes against measured vibration and heat data. Early builds overshot thermal limits; the team revised gain schedules and filtering after each test cycle.

Separately, a technical writer updated the user manual’s screenshots and a product marketer drafted launch copy. One engineer also spent two days porting an unchanged utility library to a new compiler with no functional changes.

Customer contracts for the two OEMs are fixed-price for finished drives; Apex retains all IP and bears the cost if Helix slips or fails validation.`,
  questions: [
    {
      id: "cs1",
      prompt:
        "Identify the business component(s) and explain whether Project Helix’s primary technical work appears aimed at a permitted purpose under §41(d).",
      placeholder:
        "Discuss business component, function/performance/reliability/quality…",
      modelAnswer:
        "The relevant business component is the servo drive / its firmware (a product held for sale). Reducing settling time on high-inertia loads while respecting thermal limits is aimed at function, performance, and reliability—not style or cosmetics. Manual screenshots and launch copy are not permitted-purpose research. The unchanged library port is unlikely to involve uncertainty about capability, method, or design.",
      scoringHints: [
        "Names a business component (drive/firmware)",
        "Ties goals to function/performance/reliability",
        "Flags non-qualified collateral work (docs/marketing/port)",
      ],
    },
    {
      id: "cs2",
      prompt:
        "Analyze elimination of uncertainty and process of experimentation for the control-loop work. What facts support (or weaken) those prongs?",
      placeholder: "Capability/method/design uncertainty; alternatives; testing…",
      modelAnswer:
        "Uncertainty: the team did not know which control approach (PID variants vs. adaptive observers) and gain/filter design would meet settling-time and thermal constraints on the target loads—classic capability/method/design uncertainty. Process of experimentation: they identified alternatives, used HIL simulation and bench tests, and iterated based on measured vibration/thermal data. Weaknesses: ensure “substantially all” of the Helix research activities (not the writer/marketer time) are elements of that process, and keep records of alternatives evaluated—not only the final algorithm.",
      scoringHints: [
        "States capability/method/or design uncertainty",
        "Describes alternatives + evaluation (sim/test/iterate)",
        "Notes documentation / substantially-all considerations",
      ],
    },
    {
      id: "cs3",
      prompt:
        "Does the customer relationship described suggest a funded research problem under §41(d)(4)(H)? Briefly explain.",
      placeholder: "Risk of loss, substantial rights, fixed-price sales…",
      modelAnswer:
        "On these facts, Helix looks more like Apex’s own product development than funded research: Apex develops firmware for drives it sells, retains IP, and bears cost if the project fails. Fixed-price sales of finished products typically do not mean the customer funded the research. (A deeper funded-research analysis belongs in Module 3—amounts paid under a research contract, risk of loss, and substantial rights.)",
      scoringHints: [
        "Distinguishes product R&D from customer-funded research",
        "Mentions risk of loss / IP retention",
        "Avoids a definitive legal conclusion without Module 3 depth",
      ],
    },
  ] as CaseStudyQuestion[],
};
