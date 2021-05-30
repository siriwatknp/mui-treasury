import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { createTheme } from "@material-ui/core/styles";

import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-social-link";
import { Dribbble } from "@mui-treasury/component-social-link/icons";

import { createSocialLinkBallStyles } from "@mui-treasury/style-sociallink-ball";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/SocialLink/Ball",
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const GlobalTheme: Story<SocialLinkProps> = (args) => {
  return (
    <SocialLink {...args}>
      <Dribbble />
    </SocialLink>
  );
};
GlobalTheme.decorators = [
  withMuiThemeProvider((theme) =>
    createTheme({ components: createSocialLinkBallStyles(theme) })
  ),
];
