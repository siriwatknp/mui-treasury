import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { experimentalStyled as styled } from "@material-ui/core/styles";

import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-sociallink";
import {
  Dribbble,
  FacebookCircle,
} from "@mui-treasury/component-sociallink/icons";

import {
  getSocialLinkRoundTheme,
  getSocialLinkRoundStyles,
} from "@mui-treasury/style-sociallink-round";

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

const SocialLinkRound = styled(SocialLink)(getSocialLinkRoundStyles);

export const Round: Story<SocialLinkProps> = (args) => {
  return (
    <>
      <SocialLinkRound {...args}>
        <FacebookCircle />
      </SocialLinkRound>
      <SocialLink {...args}>
        <Dribbble />
      </SocialLink>
    </>
  );
};
Round.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getSocialLinkRoundTheme(theme),
    };
    return theme;
  }),
];
