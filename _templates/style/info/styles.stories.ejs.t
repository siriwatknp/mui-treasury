---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
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
  get<%= h.toName(name) %>Styles,
  // get<%= h.toName(name) %>Theme,
  // get<%= h.toName(name) %>Variant,
} from "@mui-treasury/style-info-<%= h.extractStyleName(name)%>";

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

export const N01: Story<InfoProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 288 }}>
      <Info variant="<%= h.extractStyleName(name)%>" useStyles={get<%= h.toName(name) %>Styles}>
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
N01.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      // JunInfo: {
      //   variants: [get<%= h.toName(name) %>Variant(theme)],
      // },
      // ...get<%= h.toName(name) %>Theme(theme),
    };
    return theme;
  }),
];
