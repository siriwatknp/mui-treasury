"use client";

import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

const theme = createTheme({
  cssVariables: true,
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily: "var(--font-inter)",
  },
});

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
