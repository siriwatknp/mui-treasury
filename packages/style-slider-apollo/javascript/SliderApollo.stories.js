import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import { createSliderApolloStyles } from "./SliderApollo.styles";
const baseTheme = createTheme({
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
});
const textfieldStandardStyles = createSliderApolloStyles(baseTheme);
function withTheme(Story, context) {
  return (
    <ThemeProvider
      theme={{
        ...baseTheme,
        components: textfieldStandardStyles,
      }}
    >
      <Story {...context} />
    </ThemeProvider>
  );
}
export default {
  title: "Component/Slider/Apollo",
  component: Slider,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
  decorators: [withTheme],
};
export const Demo = (args) => {
  return (
    <Box width={320}>
      <Slider
        valueLabelDisplay="auto"
        aria-label="apollo slider"
        defaultValue={20}
      />
      <Slider
        color="secondary"
        valueLabelDisplay="auto"
        aria-label="apollo slider"
        defaultValue={64}
      />
    </Box>
  );
};
