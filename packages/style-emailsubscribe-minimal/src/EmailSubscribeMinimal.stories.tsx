import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { experimentalStyled as styled } from "@material-ui/core/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import Send from "@material-ui/icons/Send";

import {
  getEmailSubscribeMinimalTheme,
  getEmailSubscribeMinimalStyles,
} from "@mui-treasury/style-emailsubscribe-minimal";

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

const EmailSubscribeMinimal = styled(EmailSubscribe.Form)(
  getEmailSubscribeMinimalStyles
);

export const Minimal: Story = (args) => {
  return (
    <>
      <FormControl margin="normal">
        <FormLabel htmlFor={"newsletter-style"}>Newsletter</FormLabel>
        <EmailSubscribeMinimal onSubmit={args.onSubmit}>
          <EmailSubscribe.Input id={"newsletter-style"} />
          <EmailSubscribe.Submit>
            <Send />
          </EmailSubscribe.Submit>
        </EmailSubscribeMinimal>
      </FormControl>
      <br />
      <FormControl margin="normal">
        <FormLabel htmlFor={"newsletter-theme"}>Newsletter</FormLabel>
        <EmailSubscribe.Form onSubmit={args.onSubmit}>
          <EmailSubscribe.Input id={"newsletter-theme"} />
          <EmailSubscribe.Submit>
            <Send />
          </EmailSubscribe.Submit>
        </EmailSubscribe.Form>
      </FormControl>
    </>
  );
};
Minimal.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getEmailSubscribeMinimalTheme(theme),
    };
    return theme;
  }),
];
