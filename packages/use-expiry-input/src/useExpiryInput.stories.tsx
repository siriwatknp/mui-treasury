import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  useExpiryInput,
  UseExpiryInputOptions,
} from "@mui-treasury/use-expiry-input";

export default {
  title: "Hook/useExpiryInput",
  argTypes: {
    onChange: {
      action: "change",
    },
    onBlur: {
      action: "blur",
    },
  },
  args: {
    fullYear: false,
  },
} as Meta;

export const Expiration: Story<UseExpiryInputOptions> = (args) => {
  const { getInputProps } = useExpiryInput(args);

  return (
    <div>
      <label htmlFor="expiry" style={{ display: "block", fontSize: "12px" }}>
        Expiry date
      </label>
      <input id="expiry" {...getInputProps()} />
    </div>
  );
};
