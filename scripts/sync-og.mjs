#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const SNAP_DIR = "apps/e2e/tests/visual.spec.ts-snapshots";
const DEST_DIR = "apps/website/public/og";
const PLATFORM = process.platform === "darwin" ? "darwin" : "linux";
const SUFFIX = `-visual-${PLATFORM}.png`;

await fs.mkdir(DEST_DIR, { recursive: true });
const files = await fs.readdir(SNAP_DIR);
let copied = 0;
for (const file of files) {
  if (!file.endsWith(SUFFIX)) continue;
  const name = file.slice(0, -SUFFIX.length);
  await fs.copyFile(
    path.join(SNAP_DIR, file),
    path.join(DEST_DIR, `${name}.png`),
  );
  copied += 1;
}
console.log(`Synced ${copied} OG images → ${DEST_DIR}`);
