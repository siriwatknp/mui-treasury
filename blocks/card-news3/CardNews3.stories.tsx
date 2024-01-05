import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardNews3 } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/News3",
  component: CardNews3,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont(["Sen:wght@400;800"])],
} satisfies Meta<typeof CardNews3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const News3: Story = {
  render: () => <CardNews3 />,
};
