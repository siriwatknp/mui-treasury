import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Groupy, GroupyProps } from "./Groupy";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Search from "@mui/icons-material/Search";

import { FormAddon } from "@mui-treasury/component-formaddon";
import { FormLabel } from "@mui/material";

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
