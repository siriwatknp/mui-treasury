import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutExampleMultipleHeaders } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v5/Example/MultipleHeaders",
  component: LayoutExampleMultipleHeaders,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutExampleMultipleHeaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultipleHeaders: Story = {
  render: () => <LayoutExampleMultipleHeaders />,
};
