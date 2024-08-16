import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import storyDialog from "../../.storybook/decorators/storyDialog";
import {
  CCExpiration,
  CCField,
  CCFieldProps,
  CCName,
  CCNumber,
  CCSecurityCode,
} from "./FieldCreditCardBasic";
import Usage from "./usage.mdx";

const meta = {
  title: "Field/Credit Card/Basic",
  component: CCField,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["use-card-input", "use-expiry-input", "use-input-siblings"],
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<CCFieldProps>;

export default meta;
type Story = StoryObj<CCFieldProps>;

export const Basic: Story = {
  render: (args) => (
    <CCField {...args} sx={{ width: 320 }}>
      <CCName margin="normal" fullWidth />
      <CCNumber margin="normal" fullWidth />
      <Box display="flex" gap={2}>
        <CCExpiration margin="normal" />
        <CCSecurityCode margin="normal" />
      </Box>
    </CCField>
  ),
};
