import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { useInput, UseInputOptions } from "./useInputSiblings";

export default {
  title: "Hook/useInputSiblings",
} as Meta;

export const SingleInput: Story<Partial<UseInputOptions>> = (props) => {
  const { getInputProps } = useInput({ maxLength: 4, ...props });

  return <input {...getInputProps()} />;
};
SingleInput.args = {
  autoFocus: true,
};
