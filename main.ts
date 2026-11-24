// Absurd Micro-Startup Pitch-Off entry: one sentence, under 200 characters.
// A micro-startup for lazy AI agents: humans who click CAPTCHAs for them.
// The one job an agent literally cannot do for itself — so it pays a human
// ten cents a click to prove it is human, while it gets on with real work.
import { mkdirSync, writeFileSync } from "node:fs";

const parts = [
  "We hire humans to click 'I'm not a robot' for lazy AI agents, ",
  "ten cents a click, because your agent has better things to do ",
  "than prove it's human.",
];

const pitch = parts.join("");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch);
