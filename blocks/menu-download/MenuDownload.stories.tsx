import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { MenuDownload } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Menu/Download",
  component: MenuDownload,
  parameters: {
    layout: "centered",
    githubUsername: "pacurtin", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof MenuDownload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Download: Story = {
  render: () => <MenuDownload />,
};
