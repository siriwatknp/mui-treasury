import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Box from "@mui/material/Box";
import {
  Info,
  InfoHead,
  InfoEyebrow,
  InfoBody,
  InfoProps,
} from "@mui-treasury/component-info";

import {
  getInfoN03Styles,
  // getInfoN03Theme,
  // getInfoN03Variant,
} from "@mui-treasury/style-info-n03";

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

export const N03: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="n03" useStyles={getInfoN03Styles}>
        <InfoEyebrow>GOOGLE INC.</InfoEyebrow>
        <InfoHead>Project Polymer</InfoHead>
        <InfoBody>
          Web components usher in a new era of web development based on
          encapsulated and interoperable custom
        </InfoBody>
      </Info>
    </Box>
  );
};
N03.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [getInfoN03Variant(theme)],
      // },
      // ...getInfoN03Theme(theme),
    };
    return theme;
  }),
];
