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
  getSocialLinkZoomTheme,
  getSocialLinkZoomStyles,
} from "@mui-treasury/style-sociallink-zoom";

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

export const Zoom: Story<SocialLinkProps> = (args) => {
  const theme = useTheme();
  const styles = getSocialLinkZoomStyles(theme);
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
Zoom.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getSocialLinkZoomTheme(theme),
    };
    return theme;
  }),
];
