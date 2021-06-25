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
        <InfoHead>Phawta Tuntayakul</InfoHead>
        <InfoBody>Great, I'll join you tomorrow...</InfoBody>
        <InfoEyebrow>10 m</InfoEyebrow>
      </Info>
      <Info variant="chatz" useStyles={getInfoChatzStyles}>
        <InfoHead>Maria Illesaca</InfoHead>
        <InfoBody>Can you please send me more detail...</InfoBody>
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
