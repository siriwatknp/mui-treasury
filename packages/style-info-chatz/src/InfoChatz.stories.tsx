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
  getInfoChatzStyles,
  // getInfoChatzTheme,
  // getInfoChatzVariant,
} from "@mui-treasury/style-info-chatz";

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

export const Chatz: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="chatz" useStyles={getInfoChatzStyles}>
        <InfoTitle>Phawta Tuntayakul</InfoTitle>
        <InfoSubtitle>Great, I'll join you tomorrow...</InfoSubtitle>
        <InfoEyebrow>10 m</InfoEyebrow>
      </Info>
      <Info variant="chatz" useStyles={getInfoChatzStyles}>
        <InfoTitle>Maria Illesaca</InfoTitle>
        <InfoSubtitle>Can you please send me more detail...</InfoSubtitle>
        <InfoEyebrow>10:45 AM</InfoEyebrow>
      </Info>
    </Box>
  );
};
Chatz.parameters = {
  googleFont: "Maven Pro",
};
Chatz.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [getInfoChatzVariant(theme)],
      // },
      // ...getInfoChatzTheme(theme),
    };
    return theme;
  }),
];
