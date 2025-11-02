import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppTheme } from "./theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUI+",
  description: "All you need to build your next MUI project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollbarGutter: "stable" }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider
          options={{
            enableCssLayer: true,
          }}
        >
          <AppTheme>{children}</AppTheme>
        </AppRouterCacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
