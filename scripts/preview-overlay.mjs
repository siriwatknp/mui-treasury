#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

import { renderOverlay } from "./og-overlay.mjs";

const title = process.argv[2] ?? "Login Form";
const name = process.argv[3] ?? "login-form";
const OUT = "/tmp/og-overlay-preview.png";

const overlay = await renderOverlay({ title, name });
// Composite over a neutral checkerboard-free white bg for clarity.
const bg = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .png()
  .toBuffer();

await sharp(bg)
  .composite([{ input: overlay, top: 0, left: 0 }])
  .toFile(OUT);

console.log(`Wrote ${OUT} (${title} / ${name})`);
try {
  execSync(`open ${OUT}`);
} catch {
  /* non-mac */
}
