import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
// TODO: Uncomment after `npx shadcn-ui@latest add https://mui-treasury.com/r/mui-treasury.json`
// import { ThemeProvider } from "@/mui-treasury/theme";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider
          options={{
            enableCssLayer: true,
          }}
        >
          {/* <ThemeProvider>{children}</ThemeProvider> */}
          <>{children}</>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
