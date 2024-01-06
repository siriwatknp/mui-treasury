import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardOffer } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Offer",
  component: CardOffer,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["info-basic"],
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof CardOffer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Offer: Story = {
  render: () => <CardOffer />,
};
