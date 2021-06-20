import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Box from "@material-ui/core/Box";
import {
  CCField,
  CCFieldProps,
  CCName,
  CCNumber,
  CCExpiration,
  CCSecurityCode,
} from "@mui-treasury/component-creditcard";

export default {
  title: "Component/CreditCard",
  component: CCField,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["outlined", "filled", "standard"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
  args: {
    error: false,
    color: "primary",
    variant: "outlined",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Form: Story<CCFieldProps> = (args) => {
  return (
    <CCField {...args} sx={{ width: 320 }}>
      <CCName margin="normal" fullWidth />
      <CCNumber margin="normal" fullWidth />
      <Box display="flex" gap={2}>
        <CCExpiration margin="normal" />
        <CCSecurityCode margin="normal" />
      </Box>
    </CCField>
  );
};
