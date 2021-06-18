import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { styled } from "@material-ui/core/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import {
  getEmailSubscribeTranslucentStyles,
  getEmailSubscribeTranslucentTheme,
} from "@mui-treasury/style-emailsubscribe-translucent";

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

const EmailSubscribeTranslucent = styled(EmailSubscribe.Form)(
  getEmailSubscribeTranslucentStyles
);

export const Translucent: Story = (args) => {
  return (
    <>
      <EmailSubscribeTranslucent onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribeTranslucent>
      <br />
      <EmailSubscribe.Form onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribe.Form>
    </>
  );
};
Translucent.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getEmailSubscribeTranslucentTheme(theme),
    };
    return theme;
  }),
];
