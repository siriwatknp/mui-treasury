import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { styled } from "@material-ui/core/styles";

import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-sociallink";
import {
  Dribbble,
  FacebookCircle,
} from "@mui-treasury/component-sociallink/icons";

import {
  getSocialLinkPoofTheme,
  getSocialLinkPoofStyles,
} from "@mui-treasury/style-sociallink-poof";

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

const SocialLinkPoof = styled(SocialLink)(getSocialLinkPoofStyles);

export const Poof: Story<SocialLinkProps> = (args) => {
  return (
    <>
      <SocialLinkPoof {...args}>
        <FacebookCircle />
      </SocialLinkPoof>
      <SocialLink {...args}>
        <Dribbble />
      </SocialLink>
    </>
  );
};
Poof.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getSocialLinkPoofTheme(theme),
    };
    return theme;
  }),
];
