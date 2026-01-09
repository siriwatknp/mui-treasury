"use client";

import React from "react";

import { ThemeProvider as MuiTreasuryProvider } from "@/mui-treasury/theme";

export default function AIAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiTreasuryProvider>{children}</MuiTreasuryProvider>;
}
