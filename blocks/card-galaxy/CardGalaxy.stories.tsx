import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardGalaxy } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Galaxy",
  component: CardGalaxy,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["info-basic"],
  },
  decorators: [storyDialog(Usage), googleFont(["Spartan"])],
} satisfies Meta<typeof CardGalaxy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Galaxy: Story = {
  render: () => (
    <div
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardGalaxy />
    </div>
  ),
};
