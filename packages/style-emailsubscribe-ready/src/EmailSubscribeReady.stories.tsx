import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { experimentalStyled as styled } from "@material-ui/core/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import ArrowForward from "@material-ui/icons/ArrowForward";

import {
  getEmailSubscribeReadyStyles,
  getEmailSubscribeReadyTheme,
} from "@mui-treasury/style-emailsubscribe-ready";

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

const EmailSubscribeReady = styled(EmailSubscribe.Form)(
  getEmailSubscribeReadyStyles
);

export const Ready: Story = (args) => {
  return (
    <>
      <EmailSubscribeReady onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribeReady>
      <br />
      <EmailSubscribe.Form onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribe.Form>
    </>
  );
};
Ready.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getEmailSubscribeReadyTheme(theme),
    };
    return theme;
  }),
];
