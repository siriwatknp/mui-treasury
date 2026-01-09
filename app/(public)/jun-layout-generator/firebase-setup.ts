"use client";

import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBN4DbKcKCloS40H7jgo89AjnJ7u_7hAe8",
  authDomain: "mui-treasury.firebaseapp.com",
  databaseURL: "https://mui-treasury.firebaseio.com",
  projectId: "mui-treasury",
  storageBucket: "mui-treasury.appspot.com",
  messagingSenderId: "256708219380",
  appId: "1:256708219380:web:93ea155d5eaf5ec098e9a1",
};

if (
  process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN &&
  typeof self !== "undefined"
) {
  // @ts-expect-error internal
  self.FIREBASE_APPCHECK_DEBUG_TOKEN =
    process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN;
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

if (
  (process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN ||
    process.env.NODE_ENV === "production") &&
  typeof document !== "undefined"
) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6Lc97UQsAAAAAM4qTYp2CbXJzhLlPWRRx6BKFtHE",
    ),
    isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
  });
}

// Initialize Firebase Functions
export const functions = getFunctions(app);
