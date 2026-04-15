#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

import { renderOg } from "./og-overlay.mjs";

const SNAP_DIR = "apps/e2e/tests/visual.spec.ts-snapshots";
const DEST_DIR = "apps/website/public/og";
const REGISTRY_DIR = "apps/website/registry";
const PLATFORM = process.platform === "darwin" ? "darwin" : "linux";
const SUFFIX = `-visual-${PLATFORM}.png`;

const only = process.argv[2];

async function findMetaTitle(name) {
  for (const root of ["components", "blocks"]) {
    const metaPath = path.join(REGISTRY_DIR, root, name, `${name}.meta.json`);
    try {
      const content = JSON.parse(await fs.readFile(metaPath, "utf-8"));
      if (content.title) return content.title;
    } catch {
      /* not here */
    }
  }
  return name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

await fs.mkdir(DEST_DIR, { recursive: true });
const files = await fs.readdir(SNAP_DIR);
let copied = 0;
for (const file of files) {
  if (!file.endsWith(SUFFIX)) continue;
  const name = file.slice(0, -SUFFIX.length);
  if (name.endsWith("-dark")) continue;
  if (only && name !== only) continue;

  const title = await findMetaTitle(name);
  const baseImage = await fs.readFile(path.join(SNAP_DIR, file));
  const png = await renderOg({ title, name, baseImage });
  await fs.writeFile(path.join(DEST_DIR, `${name}.png`), png);
  copied += 1;
}
console.log(`Synced ${copied} OG images → ${DEST_DIR}`);
