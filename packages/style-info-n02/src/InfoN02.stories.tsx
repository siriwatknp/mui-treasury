import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Box from "@material-ui/core/Box";
import {
  Info,
  InfoHead,
  InfoEyebrow,
  InfoBody,
  InfoProps,
} from "@mui-treasury/component-info";

import {
  getInfoN02Styles,
  // getInfoN02Theme,
  // getInfoN02Variant,
} from "@mui-treasury/style-info-n02";

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

export const N02: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="n02" useStyles={getInfoN02Styles}>
        <InfoEyebrow>MARCH 8, 2016</InfoEyebrow>
        <InfoHead>First Snow Storm</InfoHead>
        <InfoBody>
          Snow storm coming in Sommaroy island, Arctic Norway. This is something
          that you definitely wanna see in your life.
        </InfoBody>
      </Info>
    </Box>
  );
};
N02.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [getInfoN02Variant(theme)],
      // },
      // ...getInfoN02Theme(theme),
    };
    return theme;
  }),
];
