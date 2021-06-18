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

const SocialLinkZoom = styled(SocialLink)(getSocialLinkZoomStyles);

export const Zoom: Story<SocialLinkProps> = (args) => {
  return (
    <>
      <SocialLinkZoom {...args}>
        <FacebookCircle />
      </SocialLinkZoom>
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
