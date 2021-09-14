import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@mui/material/styles";

import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-sociallink";
import {
  Dribbble,
  FacebookCircle,
} from "@mui-treasury/component-sociallink/icons";

import {
  getSocialLinkBallTheme,
  getSocialLinkBallStyles,
} from "@mui-treasury/style-sociallink-ball";

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

export const Ball: Story<SocialLinkProps> = (args) => {
  const theme = useTheme();
  const styles = getSocialLinkBallStyles(theme);
  return (
    <>
      <SocialLink {...args} sx={styles}>
        <FacebookCircle />
      </SocialLink>
      <SocialLink {...args}>
        <Dribbble />
      </SocialLink>
    </>
  );
};
Ball.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getSocialLinkBallTheme(theme),
    };
    return theme;
  }),
];
