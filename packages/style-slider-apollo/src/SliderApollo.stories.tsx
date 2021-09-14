import React from "react";
import { Story, Meta, StoryContext } from "@storybook/react/types-6-0";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider, { SliderProps } from "@mui/material/Slider";

import { getSliderApolloTheme } from "./SliderApollo.styles";

const baseTheme = createTheme({
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
});
function withTheme(Story: any, context: StoryContext) {
  return (
    <ThemeProvider
      theme={{
        ...baseTheme,
        components: getSliderApolloTheme(baseTheme),
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
} as Meta;

export const Demo: Story<SliderProps> = (args) => {
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
