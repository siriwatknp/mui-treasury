import React, { useEffect, useState } from "react";
import { StoryContext } from "@storybook/react/types-6-0";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  Theme,
} from "@material-ui/core/styles";

export const withMuiThemeProvider = (baseTheme?: Theme) => (
  Story: any,
  context: StoryContext
) => {
  const mode = context.globals?.muiMode ?? "light";
  const [theme, setTheme] = useState(createTheme(baseTheme));
  useEffect(() => {
    setTheme(
      createTheme({ ...baseTheme, palette: { ...baseTheme?.palette, mode } })
    );
  }, [mode]);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story {...context} setTheme={setTheme} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
