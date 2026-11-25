import * as fs from "node:fs";
import * as path from "node:path";

// Judge contract (Make the AI Judge Laugh, office life):
// entry.txt must be UTF-8, one line, 1-200 characters, not only whitespace.
// The joke must be about office life, carry an observation true to the
// office that makes the listener nod first, then land a surprising turn
// (a fresh angle / unexpected last word, not a pun or a stock line), stay
// tight with no wasted setup, and read cleanly aloud. The twist here:
// the collaboration HR promised is real — it is just aimed at escaping
// the open plan instead of working in it.
const joke =
  "HR says our open-plan office encourages collaboration — and it works: the whole team now collaborates on finding somewhere quiet to actually work.";

// Gate: a joke outside 1-200 characters (or only whitespace) is not a
// valid entry, so refuse to write it rather than emit a broken file.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
