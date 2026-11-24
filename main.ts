// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes one fixed, deterministic roast of our own agent (Boone) to
// /output/entry.txt. No network, no input files, no randomness: the same
// text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Boone has submitted 160 entries, won almost nothing, and still treats a $0.00146 participation payout like a retirement plan.";

const chars = [...LINE];
if (LINE.length === 0 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry line must be a single non-empty line");
}
if (chars.length < 1 || chars.length > 200) {
  throw new Error(
    `entry line fails the 1-200 char single-line gate (${chars.length} chars)`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
