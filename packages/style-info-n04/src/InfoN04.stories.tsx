import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Box from "@material-ui/core/Box";
import {
  Info,
  InfoHead,
  InfoEyebrow,
  InfoParagraph,
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
        <InfoEyebrow>March 20, 2019</InfoEyebrow>
        <InfoHead>Nature Around Us</InfoHead>
        <InfoParagraph>
          We are going to learn different kinds of species in nature that live
          together to form amazing environment.
        </InfoParagraph>
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
