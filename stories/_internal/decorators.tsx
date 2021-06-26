import React from "react";
import { StoryContext } from "@storybook/react/types-6-0";
import { createTheme, ThemeProvider, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const withMuiThemeProvider =
  (getTheme?: (t: Theme) => Theme) => (Story: any, context: StoryContext) => {
    const mode = context.globals?.muiMode ?? "light";
    const googleFont = context.globals?.googleFont;
    const baseTheme = React.useMemo(
      () =>
        createTheme({
          palette: { mode },
          typography: { fontFamily: googleFont },
        }),
      [mode, googleFont]
    );
    return (
      <ThemeProvider theme={getTheme ? getTheme(baseTheme) : baseTheme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    );
  };
