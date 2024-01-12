import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { ButtonGraphic } from "./index";

const meta = {
  title: "Button/Graphic",
  component: ButtonGraphic,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof ButtonGraphic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Graphic: Story = {
  render: () => <ButtonGraphic />,
};


