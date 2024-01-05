import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardSolidGame } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/SolidGame",
  component: CardSolidGame,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont(["Montserrat", "Keania One"])],
} satisfies Meta<typeof CardSolidGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidGame: Story = {
  render: () => <CardSolidGame />,
};
