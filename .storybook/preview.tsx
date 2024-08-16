import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import type { Preview } from "@storybook/react";
import type {} from "@mui/material/themeCssVarsAugmentation";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  useColorScheme,
} from "@mui/material/styles";
import { useDarkMode } from "storybook-dark-mode";
import "./global.css";
import draggableIframe from "./decorators/draggableIframe";
import "./tailwind.css";

const ModeObserver = () => {
  const isDark = useDarkMode();
  const { setMode } = useColorScheme();
  React.useEffect(() => {
    if (isDark) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDark]);
  return null;
};

const preview: Preview = {
  globals: {
    blockUsage: false,
  },
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: [
          "Introduction",
          "How to use",
          "Command line",
          "Layout v6",
          [
            "Introduction",
            "Design Principles",
            "Quick Start",
            "Installation",
            "Configuration",
            [
              "Root",
              "Header",
              "Content",
              "Footer",
              "EdgeSidebar",
              "InsetSidebar",
            ],
            "Tutorials",
            ["Dashboard", "Blog"],
            "Preset",
            "Theme",
            "App",
          ],
          "Layout v5 (LEGACY)",
          [
            "Introduction",
            "Installation",
            "Core Concept",
            "Starter Templates",
            "Migration to v5",
            "Feature",
            "Configuration",
            "Tutorials",
            ["Dashboard", "Blog"],
            "Preset",
            "Example",
            "App",
          ],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true,
      expanded: false,
    },
  },
  decorators: [
    draggableIframe(),
    (Story) => {
      return (
        <ThemeProvider
          theme={createTheme({
            cssVariables: { colorSchemeSelector: "data" },
            colorSchemes: { light: true, dark: true },
          })}
        >
          <ModeObserver />
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
