"use client";

import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const STORAGE_KEY = "firebase-config";

function getFirebaseConfig() {
  // Try localStorage first (user's custom config)
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        console.warn("Invalid Firebase config in localStorage");
      }
    }
  }

  // Fallback to env variable
  const envConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;
  if (envConfig) {
    try {
      return JSON.parse(envConfig);
    } catch {
      console.warn("Invalid NEXT_PUBLIC_FIREBASE_CONFIG");
    }
  }

  return null;
}

const firebaseConfig = getFirebaseConfig();

if (
  process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN &&
  typeof self !== "undefined"
) {
  // @ts-expect-error internal
  self.FIREBASE_APPCHECK_DEBUG_TOKEN =
    process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN;
}

// Initialize Firebase (only if config exists)
export const app = firebaseConfig ? initializeApp(firebaseConfig) : null;

if (
  app &&
  (process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN ||
    process.env.NODE_ENV === "production") &&
  typeof document !== "undefined"
) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6Lc97UQsAAAAAM4qTYp2CbXJzhLlPWRRx6BKFtHE",
    ),
    isTokenAutoRefreshEnabled: true,
  });
}

// Initialize Firebase Functions
export const functions = app ? getFunctions(app) : null;
