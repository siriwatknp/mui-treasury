import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import type { Preview } from "@storybook/react";
import type {} from "@mui/material/themeCssVarsAugmentation";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from "@mui/material/styles";
import { useDarkMode } from "storybook-dark-mode";
import "./global.css";
import cliToolbar from "./decorators/cliToolbar";
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
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
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
    cliToolbar(),
    draggableIframe(),
    (Story) => {
      return (
        <CssVarsProvider>
          <ModeObserver />
          <CssBaseline />
          <Story />
        </CssVarsProvider>
      );
    },
  ],
};

export default preview;
