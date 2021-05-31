import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { experimentalStyled as styled } from "@material-ui/core/styles";

import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-social-link";
import {
  Dribbble,
  FacebookCircle,
} from "@mui-treasury/component-social-link/icons";

import {
  getSocialLinkMoonTheme,
  getSocialLinkMoonStyles,
} from "@mui-treasury/style-sociallink-moon";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/SocialLink/style-packages",
  component: SocialLink,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const SocialLinkMoon = styled(SocialLink)(getSocialLinkMoonStyles);

export const Moon: Story<SocialLinkProps> = (args) => {
  return (
    <>
      <SocialLinkMoon {...args}>
        <FacebookCircle />
      </SocialLinkMoon>
      <SocialLink {...args}>
        <Dribbble />
      </SocialLink>
    </>
  );
};
Moon.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getSocialLinkMoonTheme(theme),
    };
    return theme;
  }),
];
