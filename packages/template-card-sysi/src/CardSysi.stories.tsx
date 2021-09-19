import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CardSysi } from "./index";

export default {
  title: "Template/Card",
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Sysi: Story = () => {
  return <CardSysi style={{ resize: "horizontal", overflow: "auto" }} />;
};
Sysi.parameters = {
  googleFont: "Kanit",
};
