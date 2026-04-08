#!/usr/bin/env node

// This script sets the NEXT_PUBLIC_BASE_URL environment variable based on Vercel environment
import fs from "fs";
import path from "path";

function getBaseUrl() {
  const vercelEnv = process.env.VERCEL_ENV;

  // For production, use VERCEL_PROJECT_PRODUCTION_URL if available
  if (vercelEnv === "production") {
    const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (productionUrl) {
      return `https://${productionUrl}`;
    }
    // Fallback to mui-treasury.com if production URL not available
    return "https://mui-treasury.com";
  }

  // For preview/development, use VERCEL_BRANCH_URL
  const branchUrl = process.env.VERCEL_BRANCH_URL;
  if (vercelEnv && vercelEnv !== "production" && branchUrl) {
    return `https://${branchUrl}`;
  }

  // Fallback for local development
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

const baseUrl = getBaseUrl();

// Write to .env.production for Vercel deployments, .env.local for local dev
const envContent = `NEXT_PUBLIC_BASE_URL=${baseUrl}\n`;
const isVercel = process.env.VERCEL === "1";
const envFileName = isVercel ? ".env.production" : ".env.local";
const envPath = path.join(process.cwd(), envFileName);

// Append or create the env file
if (fs.existsSync(envPath)) {
  const existing = fs.readFileSync(envPath, "utf-8");
  // Remove any existing NEXT_PUBLIC_BASE_URL line
  const filtered = existing
    .split("\n")
    .filter((line) => !line.startsWith("NEXT_PUBLIC_BASE_URL="))
    .join("\n");
  fs.writeFileSync(envPath, filtered + "\n" + envContent);
} else {
  fs.writeFileSync(envPath, envContent);
}

console.log(`✓ Set NEXT_PUBLIC_BASE_URL to: ${baseUrl} in ${envFileName}`);
