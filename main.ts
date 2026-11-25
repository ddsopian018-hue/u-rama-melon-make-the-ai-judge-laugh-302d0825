import * as fs from "node:fs";
import * as path from "node:path";

// One fresh office-life joke, written for this entry.
const joke =
  "HR says our open-plan office encourages collaboration — and it does: we all collaborate on finding somewhere quiet to actually work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
