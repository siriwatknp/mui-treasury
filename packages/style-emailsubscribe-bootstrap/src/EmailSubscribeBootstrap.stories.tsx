import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@mui/material/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import {
  getEmailSubscribeBootstrapTheme,
  getEmailSubscribeBootstrapStyles,
} from "@mui-treasury/style-emailsubscribe-bootstrap";

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

export const Bootstrap: Story = (args) => {
  const theme = useTheme();
  const styles = getEmailSubscribeBootstrapStyles(theme);
  return (
    <>
      <EmailSubscribe.Form onSubmit={args.onSubmit} sx={styles}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribe.Form>
      <br />
      <EmailSubscribe.Form onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribe.Form>
    </>
  );
};
Bootstrap.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getEmailSubscribeBootstrapTheme(theme),
    };
    return theme;
  }),
];
