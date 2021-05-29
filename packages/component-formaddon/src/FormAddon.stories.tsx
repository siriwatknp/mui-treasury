import React from "react";
import styled from "@emotion/styled";
import { Story, Meta } from "@storybook/react/types-6-0";

import Select from "@material-ui/core/Select";

import Search from "@material-ui/icons/Search";

import { FormAddon, FormAddonProps } from "./FormAddon";

export default {
  title: "Component/FormAddon",
  component: FormAddon,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const Wrapper = styled.div({
  display: "flex",
  "& > :not(:first-child)": {
    marginLeft: -1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "& .MuiInputBase-root": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  "& > :not(:last-child)": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    "& .MuiInputBase-root": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});

export const Text: Story<FormAddonProps> = (args) => {
  return <FormAddon {...args}>http://</FormAddon>;
};

export const Icon: Story<FormAddonProps> = (args) => {
  return (
    <FormAddon {...args} sx={{ minHeight: 40 }}>
      <Search />
    </FormAddon>
  );
};

export const SelectWrapper: Story<FormAddonProps> = (args) => {
  return (
    <FormAddon {...args}>
      <Select native variant="standard" disableUnderline>
        <option>.com</option>
        <option>.co.th</option>
        <option>.biz</option>
      </Select>
    </FormAddon>
  );
};
