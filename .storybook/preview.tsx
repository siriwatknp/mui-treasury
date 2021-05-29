import React, { Suspense, useEffect, useState } from "react";
import { StoryContext } from "@storybook/react/types-6-0";

import { ThemeProvider, StyledEngineProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createTreasuryTheme } from "@mui-treasury/theme-treasury";

import "./storybook-global.css";
import "./prism-theme.css";

const withThemeProvider = (Story: any, context: StoryContext) => {
  const mode = context.globals?.muiMode ?? "light";
  const [theme, setTheme] = useState(
    createTreasuryTheme({
      palette: {
        mode,
      },
    })
  );
  useEffect(() => {
    setTheme(
      createTreasuryTheme({
        palette: {
          mode,
        },
      })
    );
  }, [mode]);
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      }
    >
      <StyledEngineProvider injectFirst>
        {context.kind.startsWith("Layout") ? (
          <Story {...context} setTheme={setTheme} />
        ) : (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story {...context} setTheme={setTheme} />
          </ThemeProvider>
        )}
      </StyledEngineProvider>
    </Suspense>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Layout",
        [
          "Introduction",
          "Core Concept",
          "Starter Templates",
          "Migration to v5",
          "Tutorials",
          ["Dashboard", "Blog"],
          "Configuration",
          ["Overall", "Header", "EdgeSidebar", "InsetSidebar"],
          "Feature",
          "Preset",
          "Example",
          "App",
        ],
      ],
    },
  },
  controls: { expanded: true },
  backgrounds: {
    grid: {
      cellSize: 8,
      opacity: 0.24,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
    disable: true,
  },
  viewport: {
    viewports: {
      mobileM: {
        name: "Mobile M - xs",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      mobileL: {
        name: "Mobile L - xs",
        styles: {
          width: "425px",
          height: "926px",
        },
      },
      tablet: {
        name: "Tablet - sm",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      laptop: {
        name: "Laptop - md",
        styles: {
          width: "1024px",
          height: "calc(100vh - 80px)",
        },
      },
      laptopL: {
        name: "Laptop L - lg",
        styles: {
          width: "1440px",
          height: "calc(100vh - 80px)",
        },
      },
      monitor: {
        name: "Monitor - xl",
        styles: {
          width: "1920px",
          height: "calc(100vh - 80px)",
        },
      },
    },
  },
};
