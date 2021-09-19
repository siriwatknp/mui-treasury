import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CardSocial } from "./index";

export default {
  title: "Template/Card/Social",
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Demo: Story = () => {
  return <CardSocial style={{ resize: "horizontal", overflow: "auto" }} />;
};
