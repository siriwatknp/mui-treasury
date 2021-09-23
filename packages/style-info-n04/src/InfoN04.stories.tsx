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
  getInfoN04Styles,
  // getInfoN04Theme,
  // getInfoN04Variant,
} from "@mui-treasury/style-info-n04";

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

export const N04: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="n04" useStyles={getInfoN04Styles}>
        <InfoEyebrow>Kesha</InfoEyebrow>
        <InfoTitle>Inner Varnika</InfoTitle>
        <InfoSubtitle>
          That year, collection of songs, review melodies, memories full, this
          is a long and warm journey
        </InfoSubtitle>
      </Info>
    </Box>
  );
};
N04.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [getInfoN04Variant(theme)],
      // },
      // ...getInfoN04Theme(theme),
    };
    return theme;
  }),
];
