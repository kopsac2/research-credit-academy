export type ModuleStatus = "available" | "coming_soon";

export interface CurriculumModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  status: ModuleStatus;
  href?: string;
  estimatedMinutes?: number;
  activities?: { label: string; href: string }[];
}

export interface LessonSection {
  id: string;
  title: string;
  statuteRef: string;
  summary: string;
  keyPoints: string[];
  example: string;
  commonPitfall: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  rationale: string;
}

export interface CaseStudyQuestion {
  id: string;
  prompt: string;
  placeholder: string;
  modelAnswer: string;
  scoringHints: string[];
}

export interface InterviewMessage {
  id: string;
  role: "engineer" | "associate" | "system";
  text: string;
}

export type FourPartKey =
  | "permittedPurpose"
  | "technologicalInNature"
  | "eliminationOfUncertainty"
  | "processOfExperimentation";

export interface QualifyingFact {
  id: string;
  part: FourPartKey;
  keywords: string[];
  revealText: string;
  probeHint: string;
}

export interface ScriptedReply {
  triggers: string[];
  reply: string;
  revealsFactIds?: string[];
  coversParts?: FourPartKey[];
}
