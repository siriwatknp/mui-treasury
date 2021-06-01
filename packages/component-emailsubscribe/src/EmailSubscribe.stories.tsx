import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";
import type { EmailSubscribeFormProps } from "@mui-treasury/component-emailsubscribe";

export default {
  title: "Component/EmailSubscribe",
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Demo: Story<EmailSubscribeFormProps> = (args) => {
  return (
    <EmailSubscribe.Form onSubmit={args.onSubmit}>
      <EmailSubscribe.Input />
      <EmailSubscribe.Submit />
    </EmailSubscribe.Form>
  );
};
