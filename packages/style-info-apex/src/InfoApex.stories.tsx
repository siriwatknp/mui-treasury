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
  getInfoApexStyles,
  // getInfoApexTheme,
  // getInfoApexVariant,
} from "@mui-treasury/style-info-apex";

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

export const Apex: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="apex" useStyles={getInfoApexStyles}>
        {/* <InfoEyebrow>March 20, 2019</InfoEyebrow> */}
        <InfoHead>APEX Legends: Assemble!</InfoHead>
        <InfoBody>Created by siriwatknp</InfoBody>
      </Info>
    </Box>
  );
};
Apex.parameters = {
  googleFont: "Ubuntu",
};
Apex.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [getInfoApexVariant(theme)],
      // },
      // ...getInfoApexTheme(theme),
    };
    return theme;
  }),
];
