import React, { useEffect, useState } from "react";
import { StoryContext } from "@storybook/react/types-6-0";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  Theme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const withMuiThemeProvider =
  (themeFn?: Theme | ((t: Theme) => Theme)) =>
  (Story: any, context: StoryContext) => {
    const mode = context.globals?.muiMode ?? "light";
    const googleFont = context.globals?.googleFont ?? "Roboto";
    const [theme, setTheme] = useState(
      createTheme(
        typeof themeFn === "function"
          ? themeFn(
              createTheme({
                palette: { mode },
                typography: { fontFamily: googleFont },
              })
            )
          : themeFn
      )
    );
    useEffect(() => {
      setTheme(
        typeof themeFn === "function"
          ? themeFn(
              createTheme({
                palette: { mode },
                typography: { fontFamily: googleFont },
              })
            )
          : createTheme({
              ...themeFn,
              palette: { ...themeFn?.palette, mode },
              typography: { ...themeFn?.typography, fontFamily: googleFont },
            })
      );
    }, [mode, googleFont]);
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story {...context} setTheme={setTheme} />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  };
