import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { experimentalStyled as styled } from "@material-ui/core/styles";

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

const EmailSubscribeBootstrap = styled(EmailSubscribe.Form)(
  getEmailSubscribeBootstrapStyles
);

export const Bootstrap: Story = (args) => {
  return (
    <>
      <EmailSubscribeBootstrap onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribeBootstrap>
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
