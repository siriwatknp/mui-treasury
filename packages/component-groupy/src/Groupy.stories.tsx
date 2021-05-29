import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Groupy, GroupyProps } from "./Groupy";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import Stack from "@material-ui/core/Stack";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Search from "@material-ui/icons/Search";

import { FormAddon } from "@mui-treasury/component-formaddon";
import { FormLabel } from "@material-ui/core";

export default {
  title: "Component/Groupy",
  component: Groupy,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const AddonVertical: Story<GroupyProps> = (args) => {
  return (
    <Groupy {...args}>
      <FormAddon>https://</FormAddon>
      <FormAddon>Anything in the middle</FormAddon>
      <FormAddon>
        <Search />
      </FormAddon>
    </Groupy>
  );
};

export const AddonHorizontal: Story<GroupyProps> = (args) => {
  return (
    <Groupy {...args}>
      <FormAddon>https://</FormAddon>
      <FormAddon>Anything in the middle</FormAddon>
      <FormAddon>
        <Search />
      </FormAddon>
    </Groupy>
  );
};
AddonHorizontal.args = {
  orientation: "vertical",
};

export const FormSearch: Story<GroupyProps> = (args) => {
  return (
    <Stack spacing={2}>
      <Groupy {...args}>
        <OutlinedInput
          placeholder="Eg. City name, Street name"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained" sx={{ boxShadow: "none" }}>
          Search
        </Button>
      </Groupy>
      <FormControl sx={{ minWidth: 343 }}>
        <Groupy {...args}>
          <InputLabel>Explore</InputLabel>
          <OutlinedInput
            label="Explore"
            placeholder="Eg. City name, Street name"
            sx={{ flexGrow: 1 }}
          />
          <Button variant="contained" sx={{ boxShadow: "none" }}>
            Search
          </Button>
        </Groupy>
      </FormControl>
      <div>
        <Groupy {...args}>
          <FormAddon>
            <Search />
          </FormAddon>
          <FormControl sx={{ minWidth: 343 }}>
            <InputLabel>Explore</InputLabel>
            <OutlinedInput
              label="Explore"
              placeholder="Eg. City name, Street name"
              sx={{ flexGrow: 1 }}
            />
          </FormControl>
          <Button variant="contained" sx={{ boxShadow: "none" }}>
            Search
          </Button>
        </Groupy>
        <FormHelperText>This is awesome! 😲</FormHelperText>
      </div>
    </Stack>
  );
};

export const Addons = () => {
  return (
    <Stack spacing={2}>
      <Groupy>
        <FormAddon>https://</FormAddon>
        <OutlinedInput placeholder="Eg. City name, Street name" />
      </Groupy>
      <Groupy>
        <OutlinedInput
          placeholder="Eg. City name, Street name"
          sx={{ flexGrow: 1 }}
        />
        <FormAddon>
          <Search />
        </FormAddon>
      </Groupy>
      <FormControl required sx={{ minWidth: 320 }}>
        <FormLabel htmlFor="search-input" sx={{ mb: 0.5 }}>
          <b>Label</b>
        </FormLabel>
        <Groupy>
          <FormAddon>💡</FormAddon>
          <OutlinedInput
            id="search-input"
            placeholder="Eg. City name, Street name"
            sx={{ flexGrow: 1 }}
          />
          <FormAddon>
            <Search />
          </FormAddon>
        </Groupy>
      </FormControl>
    </Stack>
  );
};

export const SelectAddon = () => {
  return (
    <Groupy>
      <FormAddon>
        <Select variant="standard" disableUnderline value="" displayEmpty>
          <MenuItem value="">
            <em>Pick one</em>
          </MenuItem>
          <MenuItem value="1">https://</MenuItem>
          <MenuItem value="2">http://</MenuItem>
        </Select>
      </FormAddon>
      <OutlinedInput placeholder="website" />
      <FormAddon>
        <Select native variant="standard" disableUnderline>
          <option>.com</option>
          <option>.co.th</option>
        </Select>
      </FormAddon>
    </Groupy>
  );
};
