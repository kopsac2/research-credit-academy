"use client";

import { useEffect, useRef, useState } from "react";
import {
  interviewMeta,
  partLabels,
} from "@/content/module1-interview";
import {
  buildScorecard,
  getEngineerReply,
  type InterviewState,
  type Scorecard,
} from "@/lib/interview-engine";
import type { FourPartKey, InterviewMessage } from "@/lib/types";
import { ScorecardView } from "@/components/Scorecard";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const initialState: InterviewState = {
  coveredParts: [],
  revealedFactIds: [],
  turnCount: 0,
};

export function InterviewChat() {
  const [messages, setMessages] = useState<InterviewMessage[]>([
    {
      id: "open",
      role: "engineer",
      text: interviewMeta.openingMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [state, setState] = useState<InterviewState>(initialState);
  const [scorecard, setScorecard] = useState<Scorecard | null>(null);
  const [ended, setEnded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, scorecard]);

  function send() {
    const text = input.trim();
    if (!text || ended) return;

    const associateMsg: InterviewMessage = {
      id: uid(),
      role: "associate",
      text,
    };
    setInput("");

    const { reply, nextState, newlyCovered } = getEngineerReply(text, state);
    setState(nextState);

    const engineerMsg: InterviewMessage = {
      id: uid(),
      role: "engineer",
      text: reply,
    };

    const systemMsgs: InterviewMessage[] = newlyCovered.map((part) => ({
      id: uid(),
      role: "system",
      text: `Coverage unlocked: ${partLabels[part]}`,
    }));

    setMessages((prev) => [...prev, associateMsg, engineerMsg, ...systemMsgs]);
  }

  function endSession() {
    setEnded(true);
    setScorecard(buildScorecard(state));
  }

  function restart() {
    setMessages([
      {
        id: "open",
        role: "engineer",
        text: interviewMeta.openingMessage,
      },
    ]);
    setState(initialState);
    setScorecard(null);
    setEnded(false);
    setInput("");
  }

  const covered = new Set(state.coveredParts);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="flex min-h-[520px] flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white">
              JH
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">
                {interviewMeta.personaName}
              </h2>
              <p className="text-xs text-slate-500">
                {interviewMeta.personaTitle}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            {interviewMeta.personaTone}
          </p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5">
          {messages.map((m) => {
            if (m.role === "system") {
              return (
                <div
                  key={m.id}
                  className="mx-auto max-w-md rounded-full bg-teal-50 px-3 py-1 text-center text-xs font-medium text-teal-800"
                >
                  {m.text}
                </div>
              );
            }
            const mine = m.role === "associate";
            return (
              <div
                key={m.id}
                className={`flex ${mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    mine
                      ? "bg-teal-700 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {!ended ? (
          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Ask about goals, unknowns, methods, tests…"
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-teal-600 focus:bg-white focus:ring-2"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800"
              >
                Send
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-slate-500">
                No API key required · scripted SME persona
              </p>
              <button
                type="button"
                onClick={endSession}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                End Session
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t border-slate-200 p-4">
            <button
              type="button"
              onClick={restart}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Restart interview
            </button>
          </div>
        )}
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">
            Live four-part coverage
          </h3>
          <ul className="mt-3 space-y-2">
            {(Object.keys(partLabels) as FourPartKey[]).map((part) => (
              <li
                key={part}
                className="flex items-center gap-2 text-xs text-slate-700"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    covered.has(part) ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                />
                {partLabels[part]}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Turns: {state.turnCount}
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
          <p className="font-semibold text-slate-800">Tip</p>
          <p className="mt-1">
            Avoid leading with “four-part test” jargon. Probe technical goals,
            what was unknown, alternatives considered, and how they were tested.
          </p>
        </div>
      </aside>

      {scorecard && (
        <div className="lg:col-span-2">
          <ScorecardView scorecard={scorecard} />
        </div>
      )}
    </div>
  );
}
