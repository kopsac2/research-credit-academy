import {
  betterQuestionExamples,
  defaultBusyReplies,
  partLabels,
  qualifyingFacts,
  scriptedReplies,
} from "@/content/module1-interview";
import type { FourPartKey, QualifyingFact } from "@/lib/types";

export interface InterviewState {
  coveredParts: FourPartKey[];
  revealedFactIds: string[];
  turnCount: number;
}

export interface Scorecard {
  coveredParts: FourPartKey[];
  missedParts: FourPartKey[];
  revealedFacts: QualifyingFact[];
  missedFacts: QualifyingFact[];
  missedProbes: string[];
  betterQuestions: string[];
  coveragePercent: number;
  turnCount: number;
  summary: string;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

export function getEngineerReply(
  userText: string,
  state: InterviewState
): { reply: string; nextState: InterviewState; newlyCovered: FourPartKey[] } {
  const normalized = normalize(userText);
  const nextState: InterviewState = {
    coveredParts: [...state.coveredParts],
    revealedFactIds: [...state.revealedFactIds],
    turnCount: state.turnCount + 1,
  };
  const newlyCovered: FourPartKey[] = [];

  for (const script of scriptedReplies) {
    const hit = script.triggers.some((t) => normalized.includes(t));
    if (!hit) continue;

    for (const factId of script.revealsFactIds ?? []) {
      if (!nextState.revealedFactIds.includes(factId)) {
        nextState.revealedFactIds.push(factId);
      }
    }
    for (const part of script.coversParts ?? []) {
      if (!nextState.coveredParts.includes(part)) {
        nextState.coveredParts.push(part);
        newlyCovered.push(part);
      }
    }
    return { reply: script.reply, nextState, newlyCovered };
  }

  // Soft keyword coverage if associate asks in natural language close to a fact
  for (const fact of qualifyingFacts) {
    const hit = fact.keywords.some((k) => normalized.includes(k));
    if (!hit) continue;
    if (!nextState.revealedFactIds.includes(fact.id)) {
      nextState.revealedFactIds.push(fact.id);
    }
    if (!nextState.coveredParts.includes(fact.part)) {
      nextState.coveredParts.push(fact.part);
      newlyCovered.push(fact.part);
    }
    return {
      reply: fact.revealText + " Happy to go deeper if you ask about tests or what was unclear at the start.",
      nextState,
      newlyCovered,
    };
  }

  const fallback =
    defaultBusyReplies[nextState.turnCount % defaultBusyReplies.length];
  return { reply: fallback, nextState, newlyCovered };
}

export function buildScorecard(state: InterviewState): Scorecard {
  const allParts = Object.keys(partLabels) as FourPartKey[];
  const coveredParts = allParts.filter((p) => state.coveredParts.includes(p));
  const missedParts = allParts.filter((p) => !state.coveredParts.includes(p));
  const revealedFacts = qualifyingFacts.filter((f) =>
    state.revealedFactIds.includes(f.id)
  );
  const missedFacts = qualifyingFacts.filter(
    (f) => !state.revealedFactIds.includes(f.id)
  );
  const missedProbes = missedFacts.map((f) => f.probeHint);
  const coveragePercent = Math.round(
    (coveredParts.length / allParts.length) * 100
  );

  let summary: string;
  if (coveragePercent === 100) {
    summary =
      "Excellent interview coverage. You surfaced facts for every prong of the four-part test.";
  } else if (coveragePercent >= 50) {
    summary =
      "Solid start, but one or more prongs were thin. Review the missed probes and try again with more specific engineering questions.";
  } else {
    summary =
      "Limited coverage. Avoid tax jargon—probe technical goals, unknowns, methods, and how alternatives were tested.";
  }

  return {
    coveredParts,
    missedParts,
    revealedFacts,
    missedFacts,
    missedProbes,
    betterQuestions: betterQuestionExamples,
    coveragePercent,
    turnCount: state.turnCount,
    summary,
  };
}
