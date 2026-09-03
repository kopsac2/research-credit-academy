import type { FourPartKey, QualifyingFact, ScriptedReply } from "@/lib/types";

export const interviewMeta = {
  title: "Mock Interview: Jordan Hale, Senior Firmware Engineer",
  personaName: "Jordan Hale",
  personaTitle: "Senior Firmware Engineer, Apex Motion Controls",
  personaTone:
    "Busy, technical, slightly impatient. Answers briefly unless probed. Will not volunteer credit jargon.",
  scenario:
    "You are interviewing Jordan about Project Helix for a research credit study. Your goal is to surface facts supporting each prong of the four-part test without leading with tax jargon.",
  openingMessage:
    "Hey — I’ve got about 20 minutes before a bring-up. What do you need on Helix? We shipped the RC build last week.",
};

export const partLabels: Record<FourPartKey, string> = {
  permittedPurpose: "Permitted Purpose",
  technologicalInNature: "Technological in Nature",
  eliminationOfUncertainty: "Elimination of Uncertainty",
  processOfExperimentation: "Process of Experimentation",
};

export const qualifyingFacts: QualifyingFact[] = [
  {
    id: "fact-purpose",
    part: "permittedPurpose",
    keywords: [
      "goal",
      "objective",
      "settling",
      "performance",
      "thermal",
      "why",
      "improve",
      "purpose",
      "target",
      "spec",
    ],
    revealText:
      "Helix targeted a 30% reduction in motor settling time on high-inertia loads while staying within existing thermal limits—performance and reliability goals for the drive product.",
    probeHint:
      "Ask what technical outcomes Helix was trying to improve (speed, heat, reliability), not “was this R&D?”",
  },
  {
    id: "fact-tech",
    part: "technologicalInNature",
    keywords: [
      "algorithm",
      "control",
      "pid",
      "observer",
      "firmware",
      "engineering",
      "signal",
      "filter",
      "encoder",
      "computer",
      "principles",
    ],
    revealText:
      "Work centered on control-loop algorithms, observers, filtering, and encoder protocol implementation—firmware engineering grounded in computer science and electrical/control engineering principles.",
    probeHint:
      "Ask what disciplines or technical methods the team relied on (controls, signal processing, simulation).",
  },
  {
    id: "fact-uncertainty",
    part: "eliminationOfUncertainty",
    keywords: [
      "uncertain",
      "uncertainty",
      "know",
      "unknown",
      "could we",
      "capable",
      "method",
      "design",
      "not sure",
      "risk",
      "fail",
      "didn't know",
      "did not know",
    ],
    revealText:
      "At kickoff, the team did not know which control approach or gain/filter design would hit settling-time targets without exceeding thermal limits on the target loads.",
    probeHint:
      "Ask what was unknown at the start: could you do it, how would you do it, or what design was right?",
  },
  {
    id: "fact-experiment",
    part: "processOfExperimentation",
    keywords: [
      "test",
      "trial",
      "alternative",
      "compare",
      "simul",
      "hil",
      "bench",
      "iterate",
      "prototype",
      "evaluat",
      "experiment",
      "variant",
    ],
    revealText:
      "The team compared PID variants vs. adaptive observers, ran hardware-in-the-loop simulations and bench tests, and iterated gain schedules after each thermal/vibration failure.",
    probeHint:
      "Ask what alternatives were considered and how they were evaluated (sims, benches, iterations).",
  },
];

export const scriptedReplies: ScriptedReply[] = [
  {
    triggers: ["hello", "hi ", "hey", "thanks", "thank you"],
    reply: "Yep. Clock’s ticking — shoot.",
  },
  {
    triggers: [
      "goal",
      "objective",
      "trying to",
      "purpose",
      "why helix",
      "what was helix",
      "settling",
      "performance",
      "thermal",
      "improve",
      "target",
      "spec",
    ],
    reply:
      "Helix was about cutting settling time ~30% on high-inertia loads without blowing our thermal envelope. Same hardware gen — firmware had to do the heavy lifting. Customers care about cycle time and not cooking the drive.",
    revealsFactIds: ["fact-purpose"],
    coversParts: ["permittedPurpose"],
  },
  {
    triggers: [
      "algorithm",
      "control loop",
      "pid",
      "observer",
      "firmware",
      "how did you",
      "technical",
      "engineering",
      "encoder",
      "filter",
      "signal",
    ],
    reply:
      "We were deep in control theory / firmware territory — PID variants, adaptive observers, filtering, plus a new encoder protocol. Not a config tweak; actual control-loop design work.",
    revealsFactIds: ["fact-tech"],
    coversParts: ["technologicalInNature"],
  },
  {
    triggers: [
      "uncertain",
      "uncertainty",
      "didn't know",
      "did not know",
      "not sure",
      "could you",
      "capable",
      "what was unknown",
      "risk of failing",
      "know how",
    ],
    reply:
      "Honestly? At the start we weren’t sure we could hit the settling target on those loads without overheating. We didn’t know which approach would work — capability and design were both open questions.",
    revealsFactIds: ["fact-uncertainty"],
    coversParts: ["eliminationOfUncertainty"],
  },
  {
    triggers: [
      "test",
      "trial",
      "alternative",
      "compare",
      "simul",
      "hil",
      "bench",
      "iterate",
      "prototype",
      "evaluat",
      "experiment",
      "what did you try",
      "how did you evaluate",
    ],
    reply:
      "We tried classic PID tunes and adaptive observer setups, ran HIL sims, then bench tests. Early builds overshot thermals — we changed gain schedules and filters, retested, repeated. Pretty systematic once we had a failure mode.",
    revealsFactIds: ["fact-experiment"],
    coversParts: ["processOfExperimentation"],
  },
  {
    triggers: ["document", "wiki", "ticket", "jira", "record", "wrote down"],
    reply:
      "We’ve got tickets, sim configs, and bench logs. Not a novel. If you need artifacts, ask my manager — I can point you to the Helix Confluence space.",
  },
  {
    triggers: ["funded", "customer pay", "contract", "who paid"],
    reply:
      "We sell finished drives. Customers aren’t funding our firmware science project — if Helix slipped, that was our problem. We keep the IP.",
  },
  {
    triggers: ["marketing", "manual", "writer", "cosmetic", "ui color"],
    reply:
      "Docs and launch fluff weren’t my lane. I was in the lab. Someone else updated screenshots.",
  },
];

export const defaultBusyReplies = [
  "Can you be more specific? I’ve got a bring-up in a bit.",
  "Not sure what you’re asking. Are you talking goals, methods, or test results?",
  "We did a lot on Helix. Narrow it down — performance targets, algorithms, or how we validated?",
  "Mm. If this is about tax forms I won’t be useful. Ask me about the engineering.",
];

export const betterQuestionExamples = [
  "What performance or reliability outcomes was Helix trying to achieve on the drive?",
  "What was technically uncertain at kickoff — capability, method, or design?",
  "Which alternative control approaches did you evaluate, and how (simulation, bench, iteration)?",
  "What engineering or computer-science methods did the team rely on?",
];
