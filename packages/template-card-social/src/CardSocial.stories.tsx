import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CardSocial } from "./index";

export default {
  title: "Template/Card",
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Social: Story = () => {
  return <CardSocial style={{ resize: "horizontal", overflow: "auto" }} />;
};
