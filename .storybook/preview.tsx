import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import type { Preview } from "@storybook/react";
import type {} from "@mui/material/themeCssVarsAugmentation";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
  useColorScheme,
} from "@mui/material/styles";
import { DocsContainer, DocsContainerProps } from "@storybook/blocks";
import { useDarkMode } from "storybook-dark-mode";
import "./global.css";
import draggableIframe from "./decorators/draggableIframe";
import "./tailwind.css";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data" },
  colorSchemes: { light: true, dark: true },
});
function CssVarsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ModeObserver />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

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
    docs: {
      container: ({
        children,
        ...props
      }: DocsContainerProps & { children: React.ReactNode }) => (
        <StyledEngineProvider enableCssLayer>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          <CssVarsProvider>
            <DocsContainer {...props}>{children}</DocsContainer>
          </CssVarsProvider>
        </StyledEngineProvider>
      ),
    },
  },
  decorators: [
    draggableIframe(),
    (Story) => {
      return (
        <StyledEngineProvider enableCssLayer>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          <CssVarsProvider>
            <Story />
          </CssVarsProvider>
        </StyledEngineProvider>
      );
    },
  ],
};

export default preview;
