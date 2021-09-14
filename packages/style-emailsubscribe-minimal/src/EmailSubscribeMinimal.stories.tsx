import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useTheme } from "@mui/material/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import Send from "@mui/icons-material/Send";

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

export const Minimal: Story = (args) => {
  const theme = useTheme();
  const styles = getEmailSubscribeMinimalStyles(theme);
  return (
    <>
      <FormControl margin="normal">
        <FormLabel htmlFor={"newsletter-style"} sx={{ mb: 0.5 }}>
          Newsletter
        </FormLabel>
        <EmailSubscribe.Form onSubmit={args.onSubmit} sx={styles}>
          <EmailSubscribe.Input id={"newsletter-style"} />
          <EmailSubscribe.Submit>
            <Send />
          </EmailSubscribe.Submit>
        </EmailSubscribe.Form>
      </FormControl>
      <br />
      <FormControl margin="normal">
        <FormLabel htmlFor={"newsletter-theme"} sx={{ mb: 0.5 }}>
          Newsletter
        </FormLabel>
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
