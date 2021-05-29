import React from "react";
import styled from "@emotion/styled";
import Select from "@material-ui/core/Select";
import Search from "@material-ui/icons/Search";
import { FormAddon } from "./FormAddon";
export default {
  title: "Component/FormAddon",
  component: FormAddon,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
};
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
export const Text = (args) => {
  return <FormAddon {...args}>http://</FormAddon>;
};
export const Icon = (args) => {
  return (
    <FormAddon {...args} sx={{ minHeight: 40 }}>
      <Search />
    </FormAddon>
  );
};
export const SelectWrapper = (args) => {
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
