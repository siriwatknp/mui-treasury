#!/usr/bin/env node
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker, isMainThread, parentPort } from "node:worker_threads";

import { renderOg } from "./og-overlay.mjs";

const SNAP_DIR = "apps/e2e/tests/visual.spec.ts-snapshots";
const DEST_DIR = "apps/website/public/og";
const REGISTRY_DIR = "apps/website/registry";
const PLATFORM = process.platform === "darwin" ? "darwin" : "linux";
const SUFFIX = `-visual-${PLATFORM}.png`;

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

if (!isMainThread) {
  parentPort.on("message", async (job) => {
    const t0 = Date.now();
    try {
      const baseImage = await fs.readFile(job.srcPath);
      const png = await renderOg({
        title: job.title,
        name: job.name,
        baseImage,
      });
      await fs.writeFile(job.destPath, png);
      parentPort.postMessage({
        type: "done",
        name: job.name,
        duration: Date.now() - t0,
      });
    } catch (err) {
      parentPort.postMessage({
        type: "error",
        name: job.name,
        message: err.message,
      });
    }
  });
} else {
  const only = process.argv[2];

  await fs.mkdir(DEST_DIR, { recursive: true });
  const files = await fs.readdir(SNAP_DIR);

  const targets = [];
  for (const file of files) {
    if (!file.endsWith(SUFFIX)) continue;
    const name = file.slice(0, -SUFFIX.length);
    if (name.endsWith("-dark")) continue;
    if (only && name !== only) continue;
    targets.push({ name, file });
  }

  if (targets.length === 0) {
    if (only) {
      console.error(`No baseline matches "${only}" in ${SNAP_DIR}`);
      process.exit(1);
    }
    console.warn(`No baselines found in ${SNAP_DIR}`);
    process.exit(0);
  }

  const jobs = await Promise.all(
    targets.map(async ({ name, file }) => ({
      name,
      title: await findMetaTitle(name),
      srcPath: path.join(SNAP_DIR, file),
      destPath: path.join(DEST_DIR, `${name}.png`),
    })),
  );

  const cores = os.availableParallelism?.() ?? os.cpus().length;
  const poolSize = Math.min(jobs.length, Math.max(1, cores - 1));
  const pad = String(jobs.length).length;
  const start = Date.now();
  console.log(
    `OG overlay: ${jobs.length} item${jobs.length > 1 ? "s" : ""} × ${poolSize} worker${poolSize > 1 ? "s" : ""} → ${DEST_DIR}`,
  );

  const selfUrl = fileURLToPath(import.meta.url);
  let next = 0;
  let completed = 0;
  let failed = false;

  await new Promise((resolve) => {
    const workers = [];
    const settle = () => {
      for (const w of workers) w.terminate();
      resolve();
    };
    const assign = (worker) => {
      if (failed || next >= jobs.length) return;
      worker.postMessage(jobs[next++]);
    };
    for (let i = 0; i < poolSize; i++) {
      const worker = new Worker(selfUrl);
      workers.push(worker);
      worker.on("message", (msg) => {
        completed += 1;
        const counter = `[${String(completed).padStart(pad)}/${jobs.length}]`;
        if (msg.type === "error") {
          failed = true;
          console.error(`  ${counter} ${msg.name} FAILED: ${msg.message}`);
          settle();
          return;
        }
        console.log(`  ${counter} ${msg.name} (${msg.duration}ms)`);
        if (completed === jobs.length) {
          settle();
          return;
        }
        assign(worker);
      });
      worker.on("error", (err) => {
        if (failed) return;
        failed = true;
        console.error(`Worker error: ${err.message}`);
        settle();
      });
      assign(worker);
    }
  });

  if (failed) process.exit(1);
  console.log(`Done in ${((Date.now() - start) / 1000).toFixed(1)}s`);
}
