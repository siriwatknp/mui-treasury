import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@material-ui/core/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import ArrowForward from "@material-ui/icons/ArrowForward";

import {
  getEmailSubscribeInfoStyles,
  getEmailSubscribeInfoTheme,
} from "@mui-treasury/style-emailsubscribe-info";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/EmailSubscribe/style-packages",
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Info: Story = (args) => {
  const theme = useTheme();
  const styles = getEmailSubscribeInfoStyles(theme);
  return (
    <>
      <EmailSubscribe.Form onSubmit={args.onSubmit} sx={styles}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit aria-label="Subscribe">
          <ArrowForward />
        </EmailSubscribe.Submit>
      </EmailSubscribe.Form>
      <br />
      <EmailSubscribe.Form onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit aria-label="Subscribe">
          <ArrowForward />
        </EmailSubscribe.Submit>
      </EmailSubscribe.Form>
    </>
  );
};
Info.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getEmailSubscribeInfoTheme(theme),
    };
    return theme;
  }),
];
