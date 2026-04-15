#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SNAP_DIR = "apps/e2e/tests/visual.spec.ts-snapshots";
const DEST_DIR = "apps/website/public/og";
const REGISTRY_DIR = "apps/website/registry";
const PLATFORM = process.platform === "darwin" ? "darwin" : "linux";
const SUFFIX = `-visual-${PLATFORM}.png`;
const INSET = 64;

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

function escapeXml(s) {
  return s.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[c],
  );
}

const PANEL = { left: INSET - 24, top: 410, width: 560, height: 180 };
const PANEL_RADIUS = 16;

function overlaySvg(title, name) {
  const safeTitle = escapeXml(title);
  const cmd = escapeXml(`npx mui-treasury add ${name}`);
  const badgeY = 630 - INSET - 126;
  const titleY = 630 - INSET - 52;
  const cmdY = 630 - INSET - 12;
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect x="${PANEL.left}" y="${PANEL.top}" width="${PANEL.width}" height="${PANEL.height}" rx="${PANEL_RADIUS}" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <g transform="translate(${INSET} ${badgeY})">
    <rect x="0" y="0" width="128" height="30" rx="6" fill="#f1f5f9"/>
    <text x="64" y="20" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="15" font-weight="600" fill="#334155" text-anchor="middle">MUI Treasury</text>
  </g>
  <text x="${INSET}" y="${titleY}" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="40" font-weight="700" fill="#0f172a">${safeTitle}</text>
  <text x="${INSET}" y="${cmdY}" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="22" fill="#64748b">${cmd}</text>
</svg>`);
}

await fs.mkdir(DEST_DIR, { recursive: true });
const files = await fs.readdir(SNAP_DIR);
let copied = 0;
for (const file of files) {
  if (!file.endsWith(SUFFIX)) continue;
  const name = file.slice(0, -SUFFIX.length);
  if (only && name !== only) continue;
  const title = await findMetaTitle(name);
  await sharp(path.join(SNAP_DIR, file))
    .composite([{ input: overlaySvg(title, name), top: 0, left: 0 }])
    .toFile(path.join(DEST_DIR, `${name}.png`));
  copied += 1;
}
console.log(`Synced ${copied} OG images → ${DEST_DIR}`);
