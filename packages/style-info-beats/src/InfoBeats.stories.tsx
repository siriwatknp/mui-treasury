import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Box from "@mui/material/Box";
import {
  Info,
  InfoTitle,
  InfoEyebrow,
  InfoSubtitle,
  InfoProps,
} from "@mui-treasury/component-info";

import {
  getInfoBeatsStyles,
  // getInfoBeatsTheme,
  // getInfoBeatsVariant,
} from "@mui-treasury/style-info-beats";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/Info/style-packages",
  component: Info,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Beats: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="beats" useStyles={getInfoBeatsStyles}>
        <InfoTitle>Beats</InfoTitle>
        <InfoSubtitle>Headphone X</InfoSubtitle>
        <InfoEyebrow>Price starts from $345</InfoEyebrow>
      </Info>
    </Box>
  );
};
Beats.parameters = {
  googleFont: "Spartan",
};
Beats.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [getInfoBeatsVariant(theme)],
      // },
      // ...getInfoBeatsTheme(theme),
    };
    return theme;
  }),
];
