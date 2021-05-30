import React, { useEffect, useState } from "react";
import { StoryContext } from "@storybook/react/types-6-0";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  Theme,
} from "@material-ui/core/styles";

export const withMuiThemeProvider =
  (themeFn?: Theme | ((t: Theme) => Theme)) =>
  (Story: any, context: StoryContext) => {
    const mode = context.globals?.muiMode ?? "light";
    const [theme, setTheme] = useState(
      createTheme(
        typeof themeFn === "function"
          ? themeFn(createTheme({ palette: { mode } }))
          : themeFn
      )
    );
    useEffect(() => {
      setTheme(
        typeof themeFn === "function"
          ? themeFn(createTheme({ palette: { mode } }))
          : createTheme({
              ...themeFn,
              palette: { ...themeFn?.palette, mode },
            })
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
